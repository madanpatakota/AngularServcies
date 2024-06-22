
import { City } from "./city.model";
export class CityService {

    private CityList:City[] = [
        {
            CityID: 101,
            CityName: 'London',
        },
        {
            CityID: 102,
            CityName: 'Seattle',
        },
        {
            CityID: 103,
            CityName: 'Tacoma',
        },
        {
            CityID: 104,
            CityName: 'Kirkland',
        },
        {
            CityID: 105,
            CityName: 'Redmond',
        },
        {
            CityID: 106,
            CityName: 'Bangolore',
        },
        {
            CityID: 107,
            CityName: 'Hyderabad',
        },
    ];

    getCitiesList() {
        return this.CityList;
      }


}