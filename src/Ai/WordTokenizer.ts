import natural from 'natural'

const Wtokenizer = new natural.WordTokenizer()

//this module will split docs into words
export const WordTokenizer = (sentence: string) => {

    return Wtokenizer.tokenize(sentence)
}


//console.log(WordTokenizer('hello everybody, my name is dickson and so is you'))