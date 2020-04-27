import Cookies from 'js-cookie';

const host = Cookies.get('excursion-api-host') || 'https://new.otpusk.com/api';

const endpoints = Object.freeze({
    toursMainPage:             `${host}/tours/mainpage`,
    hotToursMainPage:          `${host}/tours/hotpage`,
    tourTypesMainPage:         `${host}/tours/tour_type`,
    countries:                 `${host}/tours/countries`,
    cities:                    `${host}/tours/cities`,
    tourType:                  `${host}/tours/tour_type`,
    guidePage:                 `${host}/tours/guide_page`,
    // seo meta data
    toursMainPageMeta:         `${host}/seo/tours/mainpage`,
    toursMainPageMetaBySeason: `${host}/seo/tours/mainpage/season`,
    guidePageMeta:             `${host}/seo/tours/guide_page`,
});

export { endpoints };
