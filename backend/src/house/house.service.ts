import { Injectable, Inject } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { House } from "./interfaces/house.interface";
import {CreateHouseDTO} from "./dto/create-house.dto";

@Injectable()
export class HouseService {
    constructor(
        @InjectModel('House')
        private houseModel: Model<House>,
    ) {}

    async create(createHouseDto: CreateHouseDTO): Promise<House> {
        const createdCat = new this.houseModel(createHouseDto);
        return createdCat.save();
    }

    async findAll(): Promise<House[]> {
        console.log("enter all")
        // console.log("here: ", await this.houseModel.find().exec())
        return await this.houseModel.find().exec();
    }

    async check(): Promise<String> {
        return 'This is for check function.'
    }
}
