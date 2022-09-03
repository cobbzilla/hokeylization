const { expect } = require('chai')

const { replaceHandlebars, revertHandlebars, REPLACEMENT_STUB: STUB } = require('../util/translate')

const TESTS = [
    {
        name: 'a plain string with no handlebars is returned unchanged',
        test: 'a string with no handlebars',
        expect: 'a string with no handlebars',
        translation: 'some random translation',
        result: 'some random translation',
        replacements: []
    },
    {
        name: 'a string with one double-curly handlebars template is handled correctly',
        test: 'a string with {{ one }} handlebars',
        expect: `a string with ${STUB} handlebars`,
        replacements: ['{{ one }}'],
        translation: `a random translation with ${STUB} foo`,
        result: `a random translation with {{ one }} foo`
    },
    {
        name: 'a string with one triple-curly handlebars template is handled correctly',
        test: 'a string with {{{ one }}} handlebars',
        expect: `a string with ${STUB} handlebars`,
        replacements: ['{{{ one }}}'],
        translation: `a random translation with ${STUB} foo`,
        result: `a random translation with {{{ one }}} foo`
    },
    {
        name: 'a string with that uses a handlebars helper is handled correctly',
        test: 'a string with {{someHelper one two three}} handlebars',
        expect: `a string with ${STUB} handlebars`,
        replacements: ['{{someHelper one two three}}'],
        translation: `a random translation with ${STUB} foo`,
        result: `a random translation with {{someHelper one two three}} foo`
    },
    {
        name: 'a string with that uses multiple handlebars templates and helpers is handled correctly',
        test: 'a string with {{someHelper one two three}} handlebars and {{another}} and a {{{triple curly}}}',
        expect: `a string with ${STUB} handlebars and ${STUB} and a ${STUB}`,
        replacements: [
            '{{someHelper one two three}}',
            '{{another}}',
            '{{{triple curly}}}'
        ],
        translation: `a random translation with ${STUB} foo and ${STUB} and ${STUB}`,
        result: `a random translation with {{someHelper one two three}} foo and {{another}} and {{{triple curly}}}`
    },
    {
        name: 'a string with that starts and ends with handlebars templates and helpers is handled correctly',
        test: '{{{a string}}} with {{someHelper one two three}} handlebars and {{another}} and a {{{triple curly}}}',
        expect: `${STUB} with ${STUB} handlebars and ${STUB} and a ${STUB}`,
        translation: `${STUB} some translated text ${STUB} and more text ${STUB} with the last stub here ${STUB}`,
        result: `{{{a string}}} some translated text {{someHelper one two three}} and more text {{another}} with the last stub here {{{triple curly}}}`,
        replacements: [
            '{{{a string}}}',
            '{{someHelper one two three}}',
            '{{another}}',
            '{{{triple curly}}}'
        ]
    },
    {
        name: 'a multi-line string with handlebars templates is handled correctly',
        test: '{{{a string}}} with {{someHelper one two three}}\nhandlebars and {{another}}\nand a {{{triple curly}}}\n',
        expect: `${STUB} with ${STUB}\nhandlebars and ${STUB}\nand a ${STUB}\n`,
        translation: `${STUB} some translated text ${STUB}\nand more text ${STUB}\nwith the last stub here ${STUB}\n`,
        result: `{{{a string}}} some translated text {{someHelper one two three}}\nand more text {{another}}\nwith the last stub here {{{triple curly}}}\n`,
        replacements: [
            '{{{a string}}}',
            '{{someHelper one two three}}',
            '{{another}}',
            '{{{triple curly}}}'
        ]
    },
    {
        name: 'a multi-line string with repeated handlebars templates is handled correctly',
        test: "Hello from {{config.title}}!\n\nYou have been cordially invited by {{fromUser.firstName}} {{fromUser.lastName}} to join\nthe {{config.title}} community.\n\nTo accept this invitation, please click this link and continue to create your account:\n\n{{inviteLink}}\n",
        expect: `Hello from ${STUB}!\n\nYou have been cordially invited by ${STUB} ${STUB} to join\nthe ${STUB} community.\n\nTo accept this invitation, please click this link and continue to create your account:\n\n${STUB}\n`,
        replacements: [
            '{{config.title}}',
            '{{fromUser.firstName}}',
            '{{fromUser.lastName}}',
            '{{config.title}}',
            '{{inviteLink}}'
        ]
    }
]

// set SINGLE_TEST to just run one test
const SINGLE_TEST = 'a multi-line string with repeated handlebars templates is handled correctly'
// const SINGLE_TEST = null

for (const test of TESTS)  {
    // noinspection PointlessBooleanExpressionJS
    if (SINGLE_TEST && SINGLE_TEST !== test.name) continue

    describe(`handlebars test: ${test.name}`, () => {
        it(test.name, (done) => {
            const value = test.test
            const hbs = replaceHandlebars(value)
            expect(hbs.value).to.equal(test.expect, `failed (wrong expected value): ${test.name}`)
            expect(hbs.replacements).to.have.lengthOf(test.replacements.length, `failed (wrong replacements array length): ${test.name}`)
            for (let i = 0; i < hbs.replacements.length; i++) {
                expect(hbs.replacements[i] === test.replacements[i], `failed (wrong replacement at index ${i}): ${test.name}`)
            }
            if (test.translation) {
                const reverted = revertHandlebars(test.translation, hbs)
                expect(reverted).to.equal(test.result)
            }
            done()
        })
    })
}
