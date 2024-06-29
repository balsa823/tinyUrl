import { Types } from 'mongoose';
export declare class DTO {
    url: string;
}
export declare class UrlDTO {
    url: string;
}
export declare class CreateUrlDto {
    _id: Types.ObjectId;
    shortUrl: string;
    longUrl: string;
}
export declare class CreateUsageDto {
    timestamp: number;
    url: string;
}
export declare class ScoreEntry {
    url: string;
    times: number;
}
