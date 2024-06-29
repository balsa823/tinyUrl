import { FilterQuery, Model } from 'mongoose';
import { Link, LinkDocument } from '../models/link.model';
import { CreateUrlDto } from 'src/types/interfaces';
export declare class LinkRepository {
    private linkModel;
    constructor(linkModel: Model<Link>);
    create(createUrlDto: CreateUrlDto): Promise<LinkDocument>;
    findOne(filterQuery: FilterQuery<LinkDocument>): Promise<LinkDocument | null>;
    findAll(): Promise<LinkDocument[]>;
}
