export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0, hi = haystack.length;
    do {
        
        for(let i = lo; i < hi ; i++  ){
            const middleNumber = haystack[Math.floor(lo + (hi-lo)/2)]
            if(middleNumber == needle ){
                return true
            }else if(needle > middleNumber){
                    lo = Math.floor(lo + (hi-lo)/2) + 1;
            }else{
                hi = Math.floor(lo + (hi-lo)/2);
            }
        }


    } while (hi>lo);
    return false
}