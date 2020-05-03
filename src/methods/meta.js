import { endpoints } from '../config';
import { call } from '../fn';
import { concatEndpointParameters } from "../helpers";

export async function getToursMainpageMeta ({ country, city, season }) {
    if (season) {
        const data = await call(concatEndpointParameters(endpoints.toursMainPageMetaBySeason, country, city, season));

        return data;
    }

    const data = await call(concatEndpointParameters(endpoints.toursMainPageMeta, country, city));

    return data;

}

export async function getGuidePageMeta (country, city) {
    const data = await call(concatEndpointParameters(endpoints.guidePageMeta, country, city));

    return data;
}
