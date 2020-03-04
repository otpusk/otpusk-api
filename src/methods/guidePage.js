import { endpoints } from '../config';
import { call } from '../fn';

export async function getGuidePage (countryId) {
    const data = await call(endpoints.guidePage, { query: { country: countryId }});

    const { catalogue : dataCatalogue = {}} = data;

    const catalogue = [];

    dataCatalogue && Object.entries(dataCatalogue).forEach(([category, isExist]) => {
        catalogue.push({
            category,
            isExist: Boolean(isExist),
        });
    });

    data.catalogue = catalogue;

    return data;
}
