import { AppService } from './services/app.service';
import { DTO, ScoreEntry } from './types/interfaces';
import { LinkDocument } from './database/models/link.model';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    generate(dto: DTO): Promise<LinkDocument>;
    popularLinks(): Promise<ScoreEntry[]>;
    redirect(params: any): Promise<import("@nestjs/common").HttpRedirectResponse>;
}
