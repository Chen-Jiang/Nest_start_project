import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { DatabaseModule } from "../database/database.module";
import { HouseController } from './house.controller';
import { houseProviders } from "./house.providers";
import {MongooseModule} from "@nestjs/mongoose";
import {HouseSchema} from "./schema/house.schema";


@Module({
  // imports: [DatabaseModule],
  imports: [
    MongooseModule.forFeature([{ name: 'House', schema: HouseSchema}])
  ],
  providers: [HouseService],
  controllers: [HouseController]
})
export class HouseModule {}
