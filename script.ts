import * as fse from 'fs-extra';
import moment from 'moment';

const timeNow = moment();

const folders10daysFromNow: string[] = Array(10).fill('')
    .map((item, index) => {
        if (index === 0) {
            item = timeNow.format().split('T')[0];
        } else {
            item = timeNow.add(1, 'day').format().split('T')[0];
        }

        return item;

    });

console.log('folders10daysFromNow == ', folders10daysFromNow);

const dirBase: string = 'C:/_MIS/github/home-automation-camera-ftp/test-image-dir/';

async function example(directory: string) {
    try {
        await fse.ensureDir(directory);
    } catch (err) {
        console.error(err);
    }
}

folders10daysFromNow.forEach((folderName, index) => {
    example(`${dirBase}${folderName}`);
});


const file = fse.statSync(`${dirBase}rbb3_20190105_013719.jpg`);
const fileModTimeMs = file.mtimeMs;
const fileModTimeDateObj = new Date(fileModTimeMs);

let allJpgFiles: string[] = fse.readdirSync(dirBase)
    .filter((file) => {
        // return true;
        return file.split('.')[1] === 'jpg' ? true : false;
    });

console.log(allJpgFiles);

allJpgFiles.forEach((fileName, index) => {
    let date: string = fileName.split('_')[1];
    let yyyy = date.substring(0, 4);
    let mm = date.substring(4, 6);
    let dd = date.substring(6, 8);
    const dateFormatted:string = `${yyyy}-${mm}-${dd}`;
    console.log('dateFormatted... ', dateFormatted);
});

// let allDaysFromFiles:string[] = allJpgFiles.

// if(allJpgFiles.length > 0){

// }


