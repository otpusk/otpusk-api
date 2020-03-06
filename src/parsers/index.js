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

export const parseCatalogueTours = (data) => {
    const { catalogue : dataCatalogue = {}} = data;

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
    const { bestHotels : dataBestHotels = {}} = data;
    const bestHotels = [];

    if (dataBestHotels) {
        Object.values(dataBestHotels).forEach((row) => {
            if (row.length) {
                bestHotels.push(row);
            }
        });
    }

    return bestHotels;
};