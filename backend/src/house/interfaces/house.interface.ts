import { Document } from 'mongoose';

export interface House extends Document {
    readonly Name: string;
    // readonly Category: string;
    // readonly Latitude: number;
    // readonly Longitude: number;
    readonly Crime: number;
}
