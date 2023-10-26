import { HttpHeaders } from "@angular/common/http";

export const environment = {

    api: {
        //key: '1a91545bacade996d1c45dc91044cbb6',
         key: '6440392d5e93461c956f2cebb78a0767',
        baseUrl: 'https://v3.football.api-sports.io/'
    },
    resources: {
        countriesUrl: 'https://v3.football.api-sports.io/countries',
        leagueDataUrl: 'https://v3.football.api-sports.io/standings',
        fixturesUrl: 'https://v3.football.api-sports.io/fixtures',
    }

}
