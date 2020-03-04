import { endpoints } from '../config';
import { call } from '../fn';

export async function getGuidePage (countryId) {
    const data = await call(endpoints.guidePage, { query: { country: countryId }});

    const { catalogue : dataCatalogue = {}} = data;
    const [dataSport = {}] = data?.sport || [];

    const catalogue = [];
    const sport = [];

    dataCatalogue && Object.entries(dataCatalogue).forEach(([category, isExist]) => {
        catalogue.push({
            category,
            isExist: Boolean(Number(isExist)),
        });
    });

    dataSport && Object.entries(dataSport).forEach(([category, isExist]) => {
        sport.push({
            category,
            isExist: Boolean(Number(isExist)),
        });
    });

    data.catalogue = catalogue;
    data.sport = sport;

    return data;
}
