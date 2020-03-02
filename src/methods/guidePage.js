import { endpoints } from '../config';
import { call } from '../fn';

export async function getGuidePage (countryId) {
    const data = await call(endpoints.guidePage, { query: { country: countryId }});

    return data;
}
