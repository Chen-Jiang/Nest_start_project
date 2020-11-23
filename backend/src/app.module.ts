import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { FilesModule } from './files/files.module';
import { CsvModule } from 'nest-csv-parser';
import { DatabaseModule } from './database/database.module';
import { HouseModule } from './house/house.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://housedecision:4iVl3R4lFkMxfDnZEB5P8MduSQsUkjhgK1ael3sWOthN37raExO2QZxmgfJew2JY5ufudkdTSVFdos1imcdpmw==@housedecision.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@housedecision@',
          {useNewUrlParser: true}
          ),
      // CsvModule,
      // FilesModule,
      // DatabaseModule,
      HouseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
