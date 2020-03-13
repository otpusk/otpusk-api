import { endpoints } from '../config';
import { call } from '../fn';
import {
    parseCatalogueTours,
    parseSportTours,
    parseBestHotels,
    parseExcursions
} from '../parsers';

export async function getGuidePage (countryAlias) {
    const data = await call(`${endpoints.guidePage}/${countryAlias}`);

    data.catalogue = parseCatalogueTours(data);
    data.sport = parseSportTours(data);
    data.bestHotels = parseBestHotels(data);
    data.excursions = parseExcursions(data);

    return data;
}
