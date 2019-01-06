import * as fse from 'fs-extra';
import moment from 'moment';
import rimraf from 'rimraf';
import { moveJpgToFolder, createDayFolders } from './utils';

const DIR_BASE: string = 'C:/_MIS/github/home-automation-camera-ftp/test-image-dir/';
const DAYS_OF_FOLDERS: number = 10;
const timeNow = moment();
const time10daysAgo = timeNow.subtract(DAYS_OF_FOLDERS, 'day');
var ddd = 222;
// ### create all folders needed
Array(DAYS_OF_FOLDERS)
    .fill('')
    .forEach((item) => {
        const folderName = time10daysAgo.add(1, 'day').format().split('T')[0];
        createDayFolders(`${DIR_BASE}${folderName}`);
    });

// ### delete old folders and get JPG list
const allJpgFiles: string[] = fse.readdirSync(DIR_BASE)
    .filter((file) => {

        if (file.split('-').length > 2) { // this is a folder, e.g. '2019-01-15'
            const daysDiff = timeNow.diff(file, 'day');
            if (daysDiff >= DAYS_OF_FOLDERS) { // if too old then delete
                rimraf(`${DIR_BASE}${file}`, (err) => {
                    if (err) { throw err; }
                });
            }
        }

        return file.split('.')[1] === 'jpg' ? true : false;
    });

// ### put all JPGs into the right folders
allJpgFiles.forEach((fileName) => {
    const date: string = fileName.split('_')[1];
    const folderName: string = `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`;
    moveJpgToFolder(`${DIR_BASE}${fileName}`, `${DIR_BASE}${folderName}/${fileName}`);
});
