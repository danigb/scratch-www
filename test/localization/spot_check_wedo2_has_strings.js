/*
 * spot check that each language has values for the string id keys on Splash page
 * that are contained in English (i.e. make sure strings will show up, not ids")
 */
var tap = require('tap');
var languages = require('../../languages.json');
window = {};
require('../../intl/wedo2.intl.js');

tap.test('spotCheckWedo2Strings', function (t) {
    var isoCodes = Object.keys(languages);
    var keysToCheck = Object.keys(window._messages['en']).sort();
    for (var i in isoCodes) {
        t.same(
            Object.keys(window._messages[isoCodes[i]]).sort(),
            keysToCheck,
            'check Wedo2 keys for language ' + isoCodes[i]
        );
    }
    t.end();
});
