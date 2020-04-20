import { mangascanmanga } from '.'
import chaptersInfos from './chaptersInfos'
export default async function (manga:mangascanmanga): Promise<number> {
    return Promise.resolve(
        Math.max(
            ...(await chaptersInfos(manga)).map((e) => {
                return parseInt(e.innerHTML.replace(/chapitre (\d+)/i,'$1'))
            })
        )
    )
}