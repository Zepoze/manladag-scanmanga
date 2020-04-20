'use strict'
var chai = require('chai')
var expect = chai.expect
var index = require('../dist/index.js').Source

describe('ScanManga interface test', () => {
    it('should return tab of 38 url',async () => {
        const result = await index.getUrlPages(index.mangas["solo-leveling"],110)
        expect(result).to.be.an('array').lengthOf(38)
    })
    it('should return chapter >= 110',async () => {
        const result = await index.getLastChapter(index.mangas["solo-leveling"])
        expect(result).to.be.greaterThan(109)
    })

    it('should return chapter >= 202',async () => {
        const result = await index.getLastChapter(index.mangas["kimetsu-no-yaiba"])
        expect(result).to.be.greaterThan(201)
    })

    it("chapter should be not available", async() => {
        const result = await index.chapterIsAvailable(index.mangas["kimetsu-no-yaiba"],9999)
        expect(result).to.be.false
    })
    it("chapter should be available", async() => {
        const result = await index.chapterIsAvailable(index.mangas["kimetsu-no-yaiba"],202)
        expect(result).to.be.true
    })
})