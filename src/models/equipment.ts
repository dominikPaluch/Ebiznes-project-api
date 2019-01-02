import {Document} from 'mongoose';

export interface Equipment extends Document {
    readonly name: string;
    readonly price: number;
    readonly status: string;
}
