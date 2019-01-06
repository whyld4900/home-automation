import * as fse from 'fs-extra';

export async function createDayFolders(directory: string) {
    try {
        await fse.ensureDir(directory);
    } catch (err) {
        console.error(err);
    }
}

export async function moveJpgToFolder(src: string, dest: string) {
    try {
        await fse.move(src, dest)
    } catch (err) {
        console.error(err)
    }
}