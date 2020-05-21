import { ListingController } from './controllers/listing';

export class Routers {
    private listingCtrl: ListingController;
    constructor(private app: any) {

        this.listingCtrl = new ListingController();

        this.app.route('/:listingId').get(this.listingCtrl.get);
    }
}
