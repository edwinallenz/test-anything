'use strict'

const test = require('tape')
const fancify = require(process.argv[2])


test('achulame mi cadena', (t) => {
    t.equal(fancify('hola'),'~*~hola~*~', 'chulea hola')
    t.equal(fancify('hola',true),'~*~HOLA~*~','chulea hola en caps')
    t.equal(fancify('hola',false,'!'),'~!~hola~!~','culea hola con otro caracter')
    t.end()
})
