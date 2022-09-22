const quotes=[["Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you  - tyrion lannister",
"There is only one thing we say to death: Not today.  - Syrio Forel",
"The things I do for love.  - jaimie lannister"],//0
["Life is something that happens when you can't get to sleep.  - Fran Lebowitz",
"A mind set in its ways is wasted. Don't do it.  - Eric Schmidt",
"Every pilot needs a co-pilot, and let me tell you, it is awful nice to have someone sitting there beside you, especially when you hit some bumpy air.  - Eric Wald"],//1
["The lone wolf dies but the pack survives.  - Sansa Stark",
"Power resides where men believe it resides. Its a trick, a shadow on the wall. And, a very small man can cast a very large shadow.  - Varys",
"Fear cuts deeper than swords.  — Arya Stark"],//2
["A mind needs books like a sword needs a whetstone.  - Tyrion Lannister", 
"Im not going to stop the wheel. Im going to break the wheel.  - Daenerys Targaryen",
"Chaos is a ladder. - Petyr Baelish"], //3
["Rhaegar fought valiantly, Rhaegar fought nobly, Rhaegar fought honorably. And Rhaegar died.  — Jorah Mormont",
"We are going to leave the world better than we found it.  — Daenerys Targaryen",
"You need to take your enemys side if youre going to see things the way they do.  — Tyrion Lannister"]]//4

let space = document.getElementById('quotes_div')
const randomQuotesFunc=()=>{
    let random1 = Number(Math.floor(Math.random()*4))
    let random2 = Number(Math.floor(Math.random()*2))
    console.log(quotes[random1][random2])
    space.innerHTML=`<h3>${quotes[random1][random2]}</h3>`
}
