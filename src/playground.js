import {
    getMainpage
} from './index';

async function main () {
    const mainpage = await getMainpage({ country: 'italy', budget: 400, currency: 'eur' });

    console.log(mainpage);
}

main();
