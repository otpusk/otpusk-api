import { endpoints } from '../config';
import { call } from '../fn';

export async function getCountries () {
    const data = await call(endpoints.countries);

    return data;
}
