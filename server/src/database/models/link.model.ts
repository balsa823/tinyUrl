import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LinkDocument = HydratedDocument<Link>;

@Schema({ versionKey: false, collection: 'links' })
export class Link {
  @Prop()
  shortUrl: string;

  @Prop()
  longUrl: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
