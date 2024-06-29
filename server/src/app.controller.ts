import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common';
import { AppService } from './services/app.service';
import { DTO, ScoreEntry } from './types/interfaces';
import { LinkDocument } from './database/models/link.model';

@Controller('/api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/generate')
  generate(@Body() dto: DTO): Promise<LinkDocument> {
    return this.appService.generateTinyUrl(dto);
  }

  @Get('/popular')
  popularLinks(): Promise<ScoreEntry[]> {
    return this.appService.popularLinks();
  }

  @Get(':url')
  @Redirect('https://docs.nestjs.com', 302)
  redirect(@Param() params) {
    return this.appService.redirectTo(params.url);
  }
}
