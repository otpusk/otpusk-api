import { escapeHtml } from '../helpers';

export const parseSportTours = (data) => {
    const [dataSport = {}] = data?.sport || [];
    const sport = [];

    if (dataSport) {
        Object.entries(dataSport).forEach(([category, isExist]) => {
            sport.push({
                category,
                isExist: Boolean(Number(isExist)),
            });
        });
    }

    return sport;
};

export const parseTours = (tours) => {
    return tours.map((tour) => ({ ...tour, name: escapeHtml(tour.name) }));
};

export const parseCatalogueTours = (data) => {
    const { catalogue: dataCatalogue = {}} = data;

    const catalogue = [];

    if (dataCatalogue) {
        Object.entries(dataCatalogue).forEach(([category, isExist]) => {
            catalogue.push({
                category,
                isExist: Boolean(Number(isExist)),
            });
        });
    }

    return catalogue;
};

export const parseBestHotels = (data) => {
    const { bestHotels: dataBestHotels = {}} = data;
    const bestHotels = [];

    if (dataBestHotels) {
        Object.values(dataBestHotels).forEach((row) => {
            if (row.length) {
                bestHotels.push(parseTours(row));
            }
        });
    }

    return bestHotels;
};

export const parseExcursions = (data) => {
    const { excursions: dataExcursions = []} = data;

    if (dataExcursions) {
        return dataExcursions.map((excursion) => {
            const {
                id : excursionId = null,
                name: title = '',
                length = null,
                transport = null,
                deptCity: departureCity = '',
                deptCityRd: departureCityRd = '',
                uah = null,
                usd = null,
                eur = null,
                cities,
                desktop_gallery : coverPhoto,
                mainType: mainCategory,
                titleTranslit = '',
            } = excursion;

            const destinations = cities.split(' - ');

            return {
                excursionId,
                title,
                titleTranslit,
                length: length && Number(length),
                transport,
                departureCity,
                departureCityRd,
                prices: { usd, eur, uah },
                coverPhoto,
                destinations,
                mainCategory,
            };
        });
    }

    return [];
};
