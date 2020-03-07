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
    const data = await call(endpoints.guidePage, { query: props });

    data.catalogue = parseCatalogueTours(data);
    data.sport = parseSportTours(data);
    data.bestHotels = parseBestHotels(data);
    data.excursions = parseExcursions(data);

    return data;
}
