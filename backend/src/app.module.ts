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
      MongooseModule.forRoot('mongodb://localhost/property-app',
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
