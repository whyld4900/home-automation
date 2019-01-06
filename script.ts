import * as fse from 'fs-extra';

const dirBase:string = 'C:/_MIS/github/home-automation-camera-ftp/';

let allJpgFiles:string[] = fse.readdirSync(dirBase)
    .filter((file) => {
        return file.split('.')[1] === 'jpg' ? true : false;
    });

console.log(allJpgFiles);

// let allDaysFromFiles:string[] = allJpgFiles.

// if(allJpgFiles.length > 0){
    
// }


const file = fse.statSync(`${dirBase}rbb3_20190105_013719.jpg`);
const fileModTimeMs = file.mtimeMs;
const fileModTimeDateObj = new Date(fileModTimeMs);

let YYYY = fileModTimeDateObj.getFullYear();
let mmPrep = fileModTimeDateObj.getMonth() + 1;
let MM = mmPrep < 10 ? `0${mmPrep}` : mmPrep;
let ddPrep = fileModTimeDateObj.getDate();
let DD = ddPrep < 10 ? `0${ddPrep}` : ddPrep;

let YYYYMMDD = `${YYYY}-${MM}-${DD}`;

async function example(directory: string) {
    try {
        await fse.ensureDir(directory)
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
}



example(`${dirBase}${YYYYMMDD}`);