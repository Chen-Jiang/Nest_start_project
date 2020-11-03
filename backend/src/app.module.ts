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
      MongooseModule.forRoot('mongodb://crimeforhouse:v8wMH66uoG1eQ5NzlxhyyU6CnQ3TLLo0BcliU2rwnPHS48LiSnh5g86nrzrPwZVLtt6zZx7k9sYnP08d9jzosg==@crimeforhouse.documents.azure.com:10255/?ssl=true',
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
