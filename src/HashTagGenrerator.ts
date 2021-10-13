import { SentenceTokenizer } from "./Ai/SentenceTokenizer";
import { WordTokenizer } from "./Ai/WordTokenizer";
import { SimilarSearch } from './Ai/ThesaurusSynonym'


// Getting the information from natural ai


export const HashTagGenerator = (caption: string) => {

    //let GeneratedHash: string[] = []

    const SentenceHash = SentenceTokenizer(caption)
    const WordHash = WordTokenizer(caption)
    const WordSynonymHash = SimilarSearch(WordHash)

    //returning similar and synthesised in one format
    return [...WordSynonymHash, ...SentenceHash]
}


//console.log(HashTagGenerator("Beehance products are the best, get yours for as low as 10 ghana cedis"))