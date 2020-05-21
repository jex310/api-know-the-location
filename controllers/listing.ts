import { GooglePlacesService } from '../resources/google';
import { Request, Response } from 'express';

export class ListingController {
    get(req: Request, res: Response) {
        const gps = new GooglePlacesService();
        const data = gps.getPlace({});
        console.log(data)
        res.send(data);
    }
}
