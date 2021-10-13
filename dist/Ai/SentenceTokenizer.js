"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentenceTokenizer = void 0;
var natural_1 = __importDefault(require("natural"));
var Stokenizer = new natural_1.default.SentenceTokenizer();
//this module will split docs into sentences
var SentenceTokenizer = function (sentence) {
    return Stokenizer.tokenize(sentence);
};
exports.SentenceTokenizer = SentenceTokenizer;
//console.log(SentenceTokenizer('hello everybody, my name is dickson and so is you'))
