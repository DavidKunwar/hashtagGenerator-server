var thesaurus = require('thesaurus')


// Search synonyms for a particular word
const SearchSynonym = (word: string): string[] => 
{  
    const LimitSearchOrder: string[] = thesaurus.find(word)

    const SearchResult: string[] =  LimitSearchOrder.filter((element) => { return LimitSearchOrder.indexOf(element) <= 5 })
    return SearchResult
}



//search synonyms for more than one word
export const SimilarSearch = (sentence: string[]) => {

    let FinalSearch: string[] = []

    sentence.forEach(element => {
        let elementSearch: string[] = SearchSynonym(element)
        FinalSearch = [...FinalSearch, ...elementSearch]
    })

    return FinalSearch;
}

//console.log(SimilarSearch(['I', 'toy']))
