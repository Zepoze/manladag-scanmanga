import { mangascanmanga } from '.'
import chaptersInfos from './chaptersInfos'
export default async function getUrlchapter(manga:mangascanmanga,chapter:number): Promise<string> {

    const tabInfos = await chaptersInfos(manga)

    const chap = tabInfos.find((e,i,t) => {
        const currentchapter:number = parseInt(e.innerHTML.replace(/chapitre (\d+)/i,'$1'))
        return currentchapter == chapter
    })

    if(chap == undefined) throw new Error(`Impossible to get url of ${manga.name}'s chapter n ${chapter}`)
    const href = chap.getAttribute('href')

    if(href == null) throw new Error(`Impossible to get url of ${manga.name}'s chapter n ${chapter}`)

    return Promise.resolve(href)
}