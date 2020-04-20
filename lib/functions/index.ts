import getUrlPages from './getUrlPages'
import getLastChapter from './getLastChapter'
import chapterIsAvailable from './chapterIsAvailable'
export declare interface mangascanmanga extends manga {
    path:string,
    pagePath:string
}

const url:string = "https://www.scan-manga.com/"
const site:string = "Scan Manga"
const Mangas:{[name:string]:mangascanmanga} = {
    "solo-leveling": {
        name: "Solo Leveling",
        path: "https://www.scan-manga.com/5176/Solo-Leveling.html",
        pagePath: "https://lei.scan-manga.eu/solo_leveling/11059"
    },
    "kimetsu-no-yaiba": {
        name:"Kimetsu No Yaiba",
        path:"https://www.scan-manga.com/3377/Kimetsu-no-Yaiba.html",
        pagePath: "https://lei.scan-manga.eu/kimetsu_no_yaiba/11105"
    },
    "the-ghostly-doctor": {
        name: "The Ghostly Doctor",
        path: "https://www.scan-manga.com/5272/The-Ghostly-Doctor.html",
        pagePath: "https://lei.scan-manga.eu/the_ghostly_doctor/11243"
    }
}

async function getNumberPageChapter(manga:mangascanmanga,chapter:number): Promise<number> {
    return (await getUrlPages(manga,chapter)).length
}

async function _chapterIsAvailable(manga:mangascanmanga,chapter:number): Promise<boolean> {
    return Promise.resolve(true)
}


export const ScanManga:source = {
    mangas:Mangas,
    url,
    site,
    getUrlPages,
    getNumberPageChapter,
    chapterIsAvailable,
    getLastChapter
}