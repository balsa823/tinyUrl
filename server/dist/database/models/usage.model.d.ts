import { HydratedDocument } from 'mongoose';
export type UsageDocument = HydratedDocument<Usage>;
export declare class Usage {
    timestamp: number;
    url: string;
}
export declare const UsageSchema: import("mongoose").Schema<Usage, import("mongoose").Model<Usage, any, any, any, import("mongoose").Document<unknown, any, Usage> & Usage & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Usage, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Usage>> & import("mongoose").FlatRecord<Usage> & {
    _id: import("mongoose").Types.ObjectId;
}>;
