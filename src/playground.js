import {
    getToursMainpageMeta,
    getGuidePageMeta
} from './index';

async function main () {
    const meta = await getToursMainpageMeta({ country: 'italy' });

    console.log(meta);
}

main();
