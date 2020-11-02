import * as mongoose from 'mongoose';


export const HouseSchema = new mongoose.Schema({
    Name: String,
    // Category: String,
    // Latitude: Number,
    // Longitude: Number,
    Crime: Number

})
