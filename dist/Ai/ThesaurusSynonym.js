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
exports.SimilarSearch = void 0;
var thesaurus = require('thesaurus');
// Search synonyms for a particular word
var SearchSynonym = function (word) {
    var LimitSearchOrder = thesaurus.find(word);
    var SearchResult = LimitSearchOrder.filter(function (element) { return LimitSearchOrder.indexOf(element) <= 5; });
    return SearchResult;
};
//search synonyms for more than one word
var SimilarSearch = function (sentence) {
    var FinalSearch = [];
    sentence.forEach(function (element) {
        var elementSearch = SearchSynonym(element);
        FinalSearch = __spreadArray(__spreadArray([], FinalSearch, true), elementSearch, true);
    });
    return FinalSearch;
};
exports.SimilarSearch = SimilarSearch;
//console.log(SimilarSearch(['I', 'toy']))
