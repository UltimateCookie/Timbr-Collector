import { Color } from '@ionic/core';

export class Stamp {
    id: number;
    country: string;
    year: number;
    color: Color;
    fiscal: boolean;
    postal: boolean;
    picture: string;
    fav: boolean;
}