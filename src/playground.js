import {
    getHotToursMainpage,
    getGuidePage,
    getTourTypeMainpage,
    getGuidePageMeta
} from './index';

async function main () {
    const data = await getGuidePageMeta('italy', 'rim');

    console.log(data);
}

main();
