import {
    getGuidePage
} from './index';

async function main () {
    const guidePage = await getGuidePage(13);

    console.log(guidePage.monthly);
}

main();
