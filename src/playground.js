import {
    getCities
} from './index';

async function main () {
    const cities = await getCities({ country: 3 });

    console.log(cities);
}

main();
