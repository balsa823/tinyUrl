import { Types } from 'mongoose';
export declare class TransformerService {
    private readonly base62Chars;
    hexToBase62(_id: Types.ObjectId): string;
}
