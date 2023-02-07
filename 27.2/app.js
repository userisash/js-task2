const makeallcaps =  (words) => {
   return new Promise ((res, rej) => {
        if(words.every(word => typeof word ==="string")){
            res(words.map(word => word.toUpperCase()));
        }else{
            rej("you have a not string")
        }
    })
}

function sortWords(words) {
    return new Promise((res) => {
        res(words.sort());
    });
}
let names = ["ash", "raj", "mo salah"]


makeallcaps(names)
.then(words => sortWords(words))
.then(result => console.log(result))
.catch(error => console.log(error))

