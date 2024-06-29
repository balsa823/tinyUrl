import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './database/models/link.model';
import { LinkRepository } from './database/repos/link.repo';
import { TransformerService } from './services/transformer.service';
import { Usage, UsageSchema } from './database/models/usage.model';
import { UsageRepository } from './database/repos/usage.repo';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://database:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1',
    ),
    MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }]),
    MongooseModule.forFeature([{ name: Usage.name, schema: UsageSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService, LinkRepository, UsageRepository, TransformerService],
})
export class AppModule {}
