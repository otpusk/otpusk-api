import {
    getGuidePage
} from './index';

async function main () {
    const guidePage = await getGuidePage(4);

    console.log(guidePage);
}

main();
