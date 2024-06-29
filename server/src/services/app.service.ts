import { HttpRedirectResponse, Injectable, Logger } from '@nestjs/common';
import { DTO, ScoreEntry } from '../types/interfaces';
import { LinkRepository } from '../database/repos/link.repo';
import { Types } from 'mongoose';
import { TransformerService } from './transformer.service';
import { UsageRepository } from 'src/database/repos/usage.repo';
import { Usage } from 'src/database/models/usage.model';
import { LinkDocument } from 'src/database/models/link.model';

const HOME_PAGE = 'http://localhost:3000';
const MILLISECONDS_IN_A_DAY = 86400000;

@Injectable()
export class AppService {
  constructor(
    private readonly linkRepository: LinkRepository,
    private readonly usageRepository: UsageRepository,
    private readonly transformer: TransformerService,
  ) {}

  private logger = new Logger(AppService.name);

  async generateTinyUrl(dto: DTO): Promise<LinkDocument> {
    const doc = await this.linkRepository.findOne({ longUrl: dto.url });

    if (doc) return doc;

    const _id = new Types.ObjectId();

    return this.linkRepository.create({
      _id,
      shortUrl: this.transformer.hexToBase62(_id),
      longUrl: dto.url,
    });
  }

  async redirectTo(shortUrl: string): Promise<HttpRedirectResponse> {
    this.logger.log(`param: ${shortUrl}`);

    const doc = await this.linkRepository.findOne({ shortUrl });
    if (doc) {
      await this.usageRepository.create({
        timestamp: Date.now(),
        url: doc.longUrl,
      });
      this.logger.log(`Redirecting to: ${doc.longUrl}`);

      return { url: doc.longUrl, statusCode: 302 };
    } else {
      await this.usageRepository.create({
        timestamp: Date.now(),
        url: HOME_PAGE,
      });

      this.logger.log(`Redirecting to: ${HOME_PAGE}`);

      return { url: HOME_PAGE, statusCode: 302 };
    }
  }

  async popularLinks(): Promise<ScoreEntry[]> {
    const dayAgo = Date.now() - MILLISECONDS_IN_A_DAY;

    const usages: Usage[] = await this.usageRepository.find({
      timestamp: { $gt: dayAgo },
    });
    const count: Record<string, number> = usages.reduce((acc, { url }) => {
      if (url in acc) {
        acc[url]++;
      } else {
        acc[url] = 1;
      }
      return acc;
    }, {});
    console.log(count);

    return Object.entries(count)
      .sort((a, b) => b[1] - a[1])
      .map((item) => ({
        url: item[0],
        times: item[1],
      }));
  }
}
