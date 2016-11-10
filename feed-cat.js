'use strict'

const test = require('tape')
const feed = require(process.argv[2])


test('repeat callback n', (t) => {

    t.equal(feed('bread'),'yum')
    t.throws(_ => {
        feed('chocolate')
    })
    t.end()
})
