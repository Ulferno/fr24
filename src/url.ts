export const BaseUrls = {
    cdn_flightradar_base_url: "https://cdn.flightradar24.com",
    flightradar_base_url: "https://www.flightradar24.com",
    data_live_base_url: "https://data-live.flightradar24.com",
    data_cloud_base_url: "https://data-cloud.flightradar24.com"
}

export const Routes = {
    login(): string {
        return `${BaseUrls.flightradar_base_url}/user/login` as const;
    },

    flights(): string {
        return `${BaseUrls.data_cloud_base_url}/zones/fcgi/feed.js` as const;
    },
    
    flight(flightId: string): string {
        return `${BaseUrls.data_live_base_url}/clickhandler/?flight=${flightId}` as const;
    },

    airport(icao: string): string {
        return `${BaseUrls.flightradar_base_url}/airports/traffic-stats/?airport=${icao}` as const;
    },

    airports(): string {
        return `${BaseUrls.flightradar_base_url}/_json/airports.php` as const;
    },
    
    airlines(): string {
        return `${BaseUrls.flightradar_base_url}/_json/airlines.php` as const;
    },

    zones() {
        return `${BaseUrls.flightradar_base_url}/zones/fcgi/feed.js` as const;
    }
}