import { FilterQuery, Model } from 'mongoose';
import { CreateUsageDto } from 'src/types/interfaces';
import { Usage } from '../models/usage.model';
export declare class UsageRepository {
    private usageModel;
    constructor(usageModel: Model<Usage>);
    create(createUrlDto: CreateUsageDto): Promise<Usage>;
    findOne(filterQuery: FilterQuery<Usage>): Promise<Usage | null>;
    find(filterQuery: FilterQuery<Usage>): Promise<Usage[] | []>;
    findAll(): Promise<Usage[]>;
}
