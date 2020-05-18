import {
    parseSeasonsTours,
    parseTours,
    parseBestHotels,
    parseCatalogueTours,
    parseExcursions,
    parseSportTours,
    parseDescription,
    parseFaq,
    parseWeather
} from './parsers';

export function escapeHtml (unsafe) {
    if (!unsafe) {
        return null;
    }

    const unsafeCharacters = [
        { char: "\r", unicode: "\\r" },
        { char: "\n", unicode: "\\n" },
        { char: "&", unicode: "&amp;" },
        { char: '"', unicode: "&quot;" },
        { char: '“', unicode: "&quot;" },
        { char: '”', unicode: "&quot;" },
        { char: "'", unicode: "&#039;" },
        { char: "«", unicode: "&#171;" },
        { char: "»", unicode: "&#187;" },
        { char: '„', unicode: "&quot;" },
        { char: '	', unicode: ' ' }
    ];

    return unsafeCharacters.reduce((acc, { char, unicode }) => {
        return acc.replace(new RegExp(char, "g"), unicode);
    }, unsafe);
}

export const formatLandingPage = (data) => {
    data.hot = parseTours(data.hot);
    data.qualityPrice = parseTours(data.qualityPrice);
    data.cheapest = parseTours(data.cheapest);
    data.friends = parseTours(data.friends);
    data.romantic = parseTours(data.romantic);
    data.family = parseTours(data.family);
    data.peaceful = parseTours(data.peaceful);
    data.catalogue = parseCatalogueTours(data.catalogue);
    data.sport = parseSportTours(data.sport);
    data.bestHotels = parseBestHotels(data.bestHotels);
    data.excursions = parseExcursions(data.excursions);
    data.months_tours = parseSeasonsTours(data.months_tours);
    data.seasons_tours = parseSeasonsTours(data.seasons_tours);
    data.description = parseDescription(data.description);
    data.faq = parseFaq(data.faq);
    data.weather = parseWeather(data.weather);

    return data;
};

export const concatEndpointParameters  = (endpoint, ...params) => {
    return `${endpoint}/${params.filter((param) => Boolean(param)).join('/')}`;
};
