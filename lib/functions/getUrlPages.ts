import { mangascanmanga } from './index'
import getUrlChapter from './getUrlChapter'

import { JSDOM } from 'jsdom'
import { resolve } from 'url';
import { rejects } from 'assert';
export default async function(manga:mangascanmanga,chapter:number):Promise<string[]> {
    let tab:string[] = []
    //console.log("no zrror")
    await(() => {
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                resolve()
            },1000)
        })
    })()
    const url:string = await getUrlChapter(manga,chapter)
    //console.log("no zrror",url)

    await(() => {
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                resolve()
            },1000)
        })
    })()
    let dom = await JSDOM.fromURL(url)
    /*try {
        dom = await JSDOM.fromURL(url)
    }catch(e) {
        console.log("dom error ",e.message)
        const bool = /socket hang up/g.test(e.message)
        if(bool) {
            console.log('one hang up')
            await(() => {
                return new Promise((resolve,reject) => {
                    setTimeout(()=> {
                        resolve()
                    },1000)
                })
            })()
            dom = await JSDOM.fromURL(url)
        } else throw e
        
    }*/
    let str = dom.serialize()

    let array = str.match(/(?<=\d+_).{1,60}\.sm(?:j|p)/g)
    if(array == null) throw new Error('No page ??')

    let key = url.match(/(?<=_)\d+(?=\.html)/g)
    if(key == null) throw new Error(`Impossible to find key in the url: ${url}`)
    tab = array.map((e)=> {
        return `${manga.pagePath}/${key}/${e.replace(/\.smj/g,'.jpg').replace(/\.smp/g,'.png')}`
    })
    return Promise.resolve(tab)
}