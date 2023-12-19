import _ from 'underscore'

export const BoatColor = {
    'RED'   : ['#FF8080', '#C33F3F'],
    'ORANGE': ['#FFAD84', '#E9814D'],
    'YELLOW': ['#FFCD4B', '#DEAC2A'],
    'GREEN' : ['#B5CB99', '#186F65'],
    'BLUE'  : ['#6DB9EF', '#3081D0'],
    'INDIGO': ['#576BEA', '#1A30BB'],
    'VIOLET': ['#793FDF', '#191D88'],
    'WHITE' : ['#E4E4E4', '#95979D'],
    'BLACK' : ['#363636', '#000000'],
}

export const GetColorName = (colorCode) => {
    const pair = _.pairs(BoatColor)
    for (var i = 0; i < pair.length; i ++){
        if (colorCode == pair[i][1][0]){
            return pair[i][0]
        }
    }
}

export const FetchAuth = {
    url: 'https://oprec-betis-be.up.railway.app/perahu',
    bearerToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMzdmZTM3OC01N2JjLTQ1N2MtYTM2OS0zN2E1NmViYTFmNjkiLCJpZCI6ImIzN2ZlMzc4LTU3YmMtNDU3Yy1hMzY5LTM3YTU2ZWJhMWY2OSIsInVzZXJuYW1lIjoiYW5kcmV3LmRldml0byIsImlhdCI6MTcwMjAxMzY0OSwiZXhwIjoxNzA0NjA1NjQ5fQ.x496-CoXOkFxM6tPFL4jrgXiizNme7U177BDT3Ope30'
}

export function RandomLoadingWords(){
    const LoadingWords = [
        "Scratching your data", "Preparing something good for you", "Cleaning up some stuff for you",
        "Cooking Somethin! 🔥"
    ]

    const index = Math.floor(Math.random() * (LoadingWords.length))

    if (LoadingWords[index]){
        return LoadingWords[index]
    }
}