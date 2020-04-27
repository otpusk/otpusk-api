import {
    parseSeasonsTours,
    parseTours,
    parseBestHotels,
    parseCatalogueTours,
    parseExcursions,
    parseSportTours
} from './parsers';

export function escapeHtml (unsafe) {
    const unsafeCharacters = [
        { char: "\r\n", unicode: "<br />" },
        { char: "\n", unicode: "<br />" },
        { char: "\\\\", unicode: '' },
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

    return data;
};
