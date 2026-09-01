var req = {
    "entity_type": "SUBSIDIARY",
    "ids": "YjG9CBFEUTVb",
    "name": "Medan Site",
    "status": {
        "background": "#2E8B57",
        "font_color": "#ffff",
        "name": "Active"
    }
};


var WORD_CHARS = 3;
var MAX_ABBR = 9;

var prefixMap = {
    'HOLDING': 'HLD',
    'SUBSIDIARY': 'SUB',
    'BRANCH': 'BRC'
};

var stopWords = {
    'PT': true,
    'CV': true,
    'TBK': true,
    'PERSERO': true,
    'DAN': true,
    'THE': true,
    'OF': true
};

var entityType = req.entity_type !== null && req.entity_type !== undefined ? String(req.entity_type).toUpperCase().trim() : '';
var prefix = prefixMap[entityType] ? prefixMap[entityType] : 'GEN';

var rawName = req.name !== null && req.name !== undefined ? String(req.name) : '';
var cleanName = rawName.replace(/[^A-Za-z0-9\s\u00A0]/g, ' ').toUpperCase();
var words = cleanName.split(/[\s\u00A0]+/);

var abbr = '';
var word;
var i;

for (i = 0; i < words.length; i++) {
    word = words[i];
    if (word === '' || stopWords[word]) {
        continue;
    }
    abbr = abbr + word.substring(0, WORD_CHARS);
    if (abbr.length >= MAX_ABBR) {
        break;
    }
}

if (abbr === '') {
    abbr = 'ENTITY';
}

req.code = prefix + '-' + abbr.substring(0, MAX_ABBR);

console.log(req);