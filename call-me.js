'use strict'

const test = require('tape')
const repeat = require(process.argv[2])


test('repeat callback n', (t) => {

    const times = 10
    t.plan(times)
    repeat(times, _ => {
            t.pass('callback called')
    })

    t.end()
})
