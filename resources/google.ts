import { Client } from '@googlemaps/google-maps-services-js';

export class GooglePlacesService {
    public client: any;

    constructor() {
        this.client = new Client({});
    }

    /**
     * get place data
     * @param location
     */
    public async getPlace(location: any) {
        let data;
        await this.client
            .placesNearby({
                params: {
                    location: {
                        lat: 45,
                        lng: -110,
                    },
                    radius: 3000,
                    type: 'point_of_interest',
                    fields: ['reference', 'name', 'photos', 'formatted_address'],
                    key: process.env.GAPI_API_KEY,
                },
            })
            .then((res: any) => {
                data = res.data;
            })
            .catch((res: any) => {
                data = res.data;
            });

        return data;
    }
}
