import Cookies from 'js-cookie';

const host = Cookies.get('excursion-api-host') || 'https://new.otpusk.com/api';

const endpoints = Object.freeze({
    mainpage:  `${host}/tours/mainpage`,
    countries: `${host}/tours/countries`,
    cities:    `${host}/tours/cities`,
    tourType:  `${host}/tours/tour_type`,
    guidePage: `${host}/tours/guide_page`,
});

export { endpoints };
