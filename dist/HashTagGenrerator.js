"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTagGenerator = void 0;
var SentenceTokenizer_1 = require("./Ai/SentenceTokenizer");
var WordTokenizer_1 = require("./Ai/WordTokenizer");
var ThesaurusSynonym_1 = require("./Ai/ThesaurusSynonym");
// Getting the information from natural ai
var HashTagGenerator = function (caption) {
    //let GeneratedHash: string[] = []
    var SentenceHash = (0, SentenceTokenizer_1.SentenceTokenizer)(caption);
    var WordHash = (0, WordTokenizer_1.WordTokenizer)(caption);
    var WordSynonymHash = (0, ThesaurusSynonym_1.SimilarSearch)(WordHash);
    //returning similar and synthesised in one format
    return __spreadArray(__spreadArray([], WordSynonymHash, true), SentenceHash, true);
};
exports.HashTagGenerator = HashTagGenerator;
//console.log(HashTagGenerator("Beehance products are the best, get yours for as low as 10 ghana cedis"))
