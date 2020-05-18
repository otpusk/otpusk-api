import {
    getHotToursMainpage,
    getToursMainpage,
    getTourTypeMainpage,
    getGuidePageMeta,
    getGuidePage
} from './index';

async function main () {
    const data = await getGuidePage('egypt', 'hurgada');

    // console.log(data);
}

main();
