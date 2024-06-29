import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { Types } from 'mongoose';

export class DTO {
  @IsString()
  @IsUrl()
  url: string;
}

export class UrlDTO {
  url: string;
}

export class CreateUrlDto {
  _id: Types.ObjectId;

  shortUrl: string;

  longUrl: string;
}

export class CreateUsageDto {
  @IsNumber()
  timestamp: number;

  @IsString()
  @IsNotEmpty()
  url: string;
}

export class ScoreEntry {
  url: string;
  times: number;
}
