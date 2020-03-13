import { endpoints } from '../config';
import { call } from '../fn';
import {
    parseCatalogueTours,
    parseSportTours,
    parseBestHotels,
    parseExcursions
} from '../parsers';

export async function getMainpage (props) {
    // props = { country, city, month, season, budget (required), currency (require) }
    const { country, city = '', ...other }  = props;

    let data = null;

    if (country && city) {
        data = await call(`${endpoints.mainpage}/${country}/${city}`, { query: other });
    } else {
        data = await call(`${endpoints.mainpage}/${country}`, { query: other });
    }

    data.catalogue = parseCatalogueTours(data);
    data.sport = parseSportTours(data);
    data.bestHotels = parseBestHotels(data);
    data.excursions = parseExcursions(data);

    return data;
}
