import { endpoints } from '../config';
import { call } from '../fn';

export async function getToursMainpageMeta ({ country, city, season }) {
    if (country && city && season) {
        const data = await call(`${endpoints.toursMainPageMetaBySeason}/${country}/${city}/${season}`);

        return data;
    }

    if (country && !city && season) {
        const data = await call(`${endpoints.toursMainPageMetaBySeason}/${country}/${season}`);

        return data;
    }

    if (country && city && !season) {
        const data = await call(`${endpoints.toursMainPageMeta}/${country}/${city}`);

        return data;
    }

    if (country && !city && !season) {
        const data = await call(`${endpoints.toursMainPageMeta}/${country}`);

        return data;
    }
}

export async function getGuidePageMeta (country) {
    const data = await call(`${endpoints.guidePageMeta}/${country}`);

    return data;
}
