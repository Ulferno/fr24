import * as axiosModule from 'axios';
import { Routes } from './url.js';

export default class fr24 {
    axios: axiosModule.AxiosInstance;
    defaultRealTimeFlightConfig: Object

    constructor() {
        this.axios = axiosModule.default.create({
            headers: {
                "cache-control": "max-age=0",
                "origin": "https://www.flightradar24.com",
                "referer": "https://www.flightradar24.com/",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "user-agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
            }
        });

        this.defaultRealTimeFlightConfig = {}
    }
    
    // Set a default axios header
    private setHeader(key: string, value: string) {
        this.axios.defaults.headers.common[key] = value;
    }

    // Get flights from FlightRadar24
    // Limit by airline (ICAO code)
    // or by bound coordinates (y1, y2, x1, x2)
    public getFlights(airline?: string, bounds?: string) {
        return new Promise((resolve, reject) => {
            const config: any = structuredClone(this.defaultRealTimeFlightConfig);

            if (airline) {
                config.airline = airline;
            }

            if (bounds) {
                config.bounds = bounds.replace(',', '%2C');
            }

            this.axios({
                method: 'GET',
                url: Routes.flights(),
                params: config
            })
            .then((result => {
                resolve(result.data);
            }))
            .catch((err) => {
                console.warn(`[fr24] Error: ${err}`);
                reject(err);
            })
        });
    }
    
    public getFlight() {
        return this.axios.get(Routes.flight(''));
    }
}
