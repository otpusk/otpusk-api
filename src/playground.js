import {
    getHotToursMainpage,
    getToursMainpage,
    getTourTypeMainpage,
    getGuidePageMeta
} from './index';

async function main () {
    const data = await getToursMainpage({ country: 'spain' });

    // console.log(data);
}

main();
