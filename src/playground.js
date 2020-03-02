import {
    getGuidePage,
    getCountries
} from './index';

async function main () {
    const guidePage = await getGuidePage(13);

    console.log(guidePage);

    const countries = await getCountries();

    console.log(countries);
}

main();
