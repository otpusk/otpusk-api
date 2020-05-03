import { endpoints } from '../config';
import { call } from '../fn';
import { formatLandingPage, concatEndpointParameters } from "../helpers";

const getMainpage = async (endpoint, props = {}) => {
    // props = { country, city, month, season, budget (required), currency (require) }
    const { country = '', city = '', ...other }  = props;
    const data = await call(
        concatEndpointParameters(endpoint, country, city),
        { query: other }
    );

    return formatLandingPage(data);
};

export async function getToursMainpage (props) {
    return await getMainpage(endpoints.toursMainPage, props);
}

export async function getHotToursMainpage (props) {
    return await getMainpage(endpoints.hotToursMainPage, props);
}

export async function getGuidePage (country, city) {
    return await getMainpage(endpoints.guidePage, { country, city });
}

export async function getTourTypeMainpage (props) {
    // country city type
    return await getMainpage(endpoints.tourTypesMainPage, props);
}
