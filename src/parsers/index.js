import { escapeHtml } from '../helpers';

export const parseSportTours = ([dataSport]) => {
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
    if (!tours) {
        return [];
    }

    return tours.map((tour) => ({ ...tour, name: escapeHtml(tour.name) }));
};

export const parseCatalogueTours = (dataCatalogue = {}) => {
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

export const parseBestHotels = (dataBestHotels = {}) => {
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

export const parseExcursions = (dataExcursions = []) => {
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
                mainType,
                translit : titleTranslit = '',
            } = excursion;

            const destinations = cities.split(' - ');
            const mainCategory = { name: mainType.name, icon: mainType.iconSmall };

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

export const parseSeasonsTours = (seasonsToursData = {}) => {
    if (seasonsToursData) {
        return Object.entries(seasonsToursData)
            .map(([month, tours]) => ({ [month]: parseTours(tours) }));
    }

    return [];
};

export const parseDescription = (description = []) => {
    if (description.length) {
        return description.reduce((acc, el) => {
            const { lang, title, text } = el;

            acc[lang] = { title, text: escapeHtml(text) };

            return acc;
        }, { rus: null, ukr: null });
    }

    return { rus: null, ukr: null };
};

export const parseFaq = (faq = []) => {
    if (faq.length) {
        return faq.reduce((acc, el) => {
            const { lang, title, text } = el;

            acc[lang].push({ title, text: escapeHtml(text) });

            return acc;
        }, { rus: [], ukr: []});
    }

    return { rus: [], ukr: []};
};
