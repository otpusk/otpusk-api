import { endpoints } from '../config';
import { call } from '../fn';
import { parseCatalogueTours, parseSportTours } from '../parsers';

export async function getGuidePage (countryId) {
    const data = await call(endpoints.guidePage, { query: { country: countryId }});

    data.catalogue = parseCatalogueTours(data);
    data.sport = parseSportTours(data);

    return data;
}
