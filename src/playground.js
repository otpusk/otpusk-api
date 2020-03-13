import {
    getMainpage
} from './index';

async function main () {
    const mainpage = await getMainpage({ country: 'bulgaria', budget: 400, currency: 'eur' });

    console.log(mainpage);
}

main();
