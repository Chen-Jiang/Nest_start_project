import { Controller, Post, Res, Body, Get, HttpStatus } from '@nestjs/common';
import { HouseService } from "./house.service";
import { CreateHouseDTO } from "./dto/create-house.dto";

@Controller('house')
export class HouseController {
    constructor(private houseService: HouseService) { }

    // add a houses
    @Post('create')
    async addCustomer(@Res() res, @Body() createHouseDTO: CreateHouseDTO) {
        const house = await this.houseService.create(createHouseDTO);
        return res.status(HttpStatus.OK).json({
            message: "House has been created successfully",
            house
        })
    }

    // Retrieve houses list
    @Get('all')
    async getAllCustomer(@Res() res) {
        const houses = await this.houseService.findAll();
        return res.status(HttpStatus.OK).json(houses);
    }

    // for check
    @Get('check')
    async getCheck(@Res() res) {
        const message1 = await this.houseService.check();
        return res.status(HttpStatus.OK).json({
            message: 'check successful',
            message1
        })
    }
}
