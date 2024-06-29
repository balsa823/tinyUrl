import { HttpRedirectResponse } from '@nestjs/common';
import { DTO, ScoreEntry } from '../types/interfaces';
import { LinkRepository } from '../database/repos/link.repo';
import { TransformerService } from './transformer.service';
import { UsageRepository } from 'src/database/repos/usage.repo';
import { LinkDocument } from 'src/database/models/link.model';
export declare class AppService {
    private readonly linkRepository;
    private readonly usageRepository;
    private readonly transformer;
    constructor(linkRepository: LinkRepository, usageRepository: UsageRepository, transformer: TransformerService);
    private logger;
    generateTinyUrl(dto: DTO): Promise<LinkDocument>;
    redirectTo(shortUrl: string): Promise<HttpRedirectResponse>;
    popularLinks(): Promise<ScoreEntry[]>;
}
