import { FilterQuery, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Link, LinkDocument } from '../models/link.model';
import { CreateUrlDto } from 'src/types/interfaces';

@Injectable()
export class LinkRepository {
  constructor(@InjectModel(Link.name) private linkModel: Model<Link>) {}

  async create(createUrlDto: CreateUrlDto): Promise<LinkDocument> {
    const doc = new this.linkModel(createUrlDto);
    return doc.save();
  }

  async findOne(
    filterQuery: FilterQuery<LinkDocument>,
  ): Promise<LinkDocument | null> {
    return this.linkModel.findOne(filterQuery);
  }

  async findAll(): Promise<LinkDocument[]> {
    return this.linkModel.find().exec();
  }
}
