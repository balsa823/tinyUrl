import { HydratedDocument } from 'mongoose';
export type LinkDocument = HydratedDocument<Link>;
export declare class Link {
    shortUrl: string;
    longUrl: string;
}
export declare const LinkSchema: import("mongoose").Schema<Link, import("mongoose").Model<Link, any, any, any, import("mongoose").Document<unknown, any, Link> & Link & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Link, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Link>> & import("mongoose").FlatRecord<Link> & {
    _id: import("mongoose").Types.ObjectId;
}>;
