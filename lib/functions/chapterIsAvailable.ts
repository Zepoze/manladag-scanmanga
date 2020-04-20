import { mangascanmanga } from '.'
import chaptersInfos from './chaptersInfos'
export default async function (manga:mangascanmanga,chapter:number): Promise<boolean> {
    //return Promise.resolve(true)
    const tab = (await chaptersInfos(manga)).map((e) => {
        return parseInt(e.innerHTML.replace(/chapitre (\d+)/i,'$1'))
    })
    return Promise.resolve(
        tab.includes(chapter)
    )
}