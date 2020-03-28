import { endpoints } from '../config';
import { call } from '../fn';
import {
    parseCatalogueTours,
    parseSportTours,
    parseBestHotels,
    parseExcursions,
    parseTours
} from '../parsers';

export async function getGuidePage (countryAlias) {
    const data = await call(`${endpoints.guidePage}/${countryAlias}`);

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
