import { Connection } from "mongoose";
import { HouseSchema } from "./schema/house.schema";

export const houseProviders = [{
    provide: 'House',
    useFactory: (connection: Connection) => connection.model('House', HouseSchema),
    inject: ['DATABASE_CONNECTION'],
},];
