"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordTokenizer = void 0;
var natural_1 = __importDefault(require("natural"));
var Wtokenizer = new natural_1.default.WordTokenizer();
//this module will split docs into words
var WordTokenizer = function (sentence) {
    return Wtokenizer.tokenize(sentence);
};
exports.WordTokenizer = WordTokenizer;
//console.log(WordTokenizer('hello everybody, my name is dickson and so is you'))
