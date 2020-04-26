import { endpoints } from '../config';
import { call } from '../fn';
import {
    parseCatalogueTours,
    parseSportTours,
    parseBestHotels,
    parseExcursions,
    parseMonthsTours,
    parseTours, parseSeasonsTours
} from '../parsers';

export async function getGuidePage (countryAlias) {
    const data = await call(`${endpoints.guidePage}/${countryAlias}`);

    data.hot = parseTours(data.hot);
    data.qualityPrice = parseTours(data.qualityPrice);
    data.cheapest = parseTours(data.cheapest);
    data.friends = parseTours(data.friends);
    data.romantic = parseTours(data.romantic);
    data.family = parseTours(data.family);
    data.peaceful = parseTours(data.peaceful);
    data.catalogue = parseCatalogueTours(data.catalogue);
    data.sport = parseSportTours(data.sport);
    data.bestHotels = parseBestHotels(data.bestHotels);
    data.excursions = parseExcursions(data.excursions);
    data.months_tours = parseSeasonsTours(data.months_tours);
    data.seasons_tours = parseSeasonsTours(data.seasons_tours);

    return data;
}
