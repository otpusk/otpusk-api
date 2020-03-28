import { endpoints } from '../config';
import { call } from '../fn';
import {
    parseCatalogueTours,
    parseSportTours,
    parseBestHotels,
    parseExcursions,
    parseTours
} from '../parsers';

export async function getToursMainpage (props) {
    // props = { country, city, month, season, budget (required), currency (require) }
    const { country, city = '', ...other }  = props;

    let data = null;

    if (country && city) {
        data = await call(`${endpoints.toursMainPage}/${country}/${city}`, { query: other });
    } else {
        data = await call(`${endpoints.toursMainPage}/${country}`, { query: other });
    }

    data.qualityPrice = parseTours(data.qualityPrice);
    data.cheapest = parseTours(data.cheapest);
    data.friends = parseTours(data.friends);
    data.romantic = parseTours(data.romantic);
    data.family = parseTours(data.family);
    data.peaceful = parseTours(data.peaceful);
    data.catalogue = parseCatalogueTours(data);
    data.sport = parseSportTours(data);
    data.bestHotels = parseBestHotels(data);
    data.excursions = parseExcursions(data);

    return data;
}
