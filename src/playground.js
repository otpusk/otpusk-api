import {
    getGuidePage
} from './index';

async function main () {
    const data = await getGuidePage('italy');

    console.log(data);
}

main();
