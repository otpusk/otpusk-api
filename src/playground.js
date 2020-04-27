import {
    getHotToursMainpage,
    getGuidePage,
    getTourTypeMainpage
} from './index';

async function main () {
    const data = await getTourTypeMainpage({ type: 'friends' });

    console.log(data);
}

main();
