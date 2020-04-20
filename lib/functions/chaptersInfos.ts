import { JSDOM } from 'jsdom'
import {mangascanmanga} from '.'

export default async function(manga:mangascanmanga): Promise<Array<Element>> {
    const dom = await JSDOM.fromURL(manga.path)
    const tab = new Array<Element>()
    dom.window.document.querySelectorAll('.chapitre_nom a').forEach( e=> {
        tab.push(e)
    })
    return tab
}