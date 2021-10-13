import natural from 'natural'

const Stokenizer = new natural.SentenceTokenizer()

//this module will split docs into sentences
export const SentenceTokenizer = (sentence: string) => {

    return Stokenizer.tokenize(sentence)
}


//console.log(SentenceTokenizer('hello everybody, my name is dickson and so is you'))