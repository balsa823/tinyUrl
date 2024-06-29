import { FilterQuery, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUsageDto } from 'src/types/interfaces';
import { Usage } from '../models/usage.model';

@Injectable()
export class UsageRepository {
  constructor(@InjectModel(Usage.name) private usageModel: Model<Usage>) {}

  async create(createUrlDto: CreateUsageDto): Promise<Usage> {
    const doc = new this.usageModel(createUrlDto);
    return doc.save();
  }

  async findOne(filterQuery: FilterQuery<Usage>): Promise<Usage | null> {
    return this.usageModel.findOne(filterQuery);
  }

  async find(filterQuery: FilterQuery<Usage>): Promise<Usage[] | []> {
    return this.usageModel.find(filterQuery);
  }

  async findAll(): Promise<Usage[]> {
    return this.usageModel.find().exec();
  }
}
