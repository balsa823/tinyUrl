import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsageDocument = HydratedDocument<Usage>;

@Schema({ versionKey: false })
export class Usage {
  @Prop()
  timestamp: number;

  @Prop()
  url: string;
}

export const UsageSchema = SchemaFactory.createForClass(Usage);
