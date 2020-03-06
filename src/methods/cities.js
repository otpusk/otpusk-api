import { endpoints } from '../config';
import { call } from '../fn';

export async function getCities ({ country, city = '' }) {
    const data = await call(endpoints.cities, { query: { country, city }});

    return data;
}
