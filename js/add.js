let superHeros = [];  // מערך גיבורים 

function heroCharge(hero,ssp,costume,friend,pic){ //פונקציה עם פרמטרים , ומעלה למערך
    let superHero = {
        name : hero,
        superPower: { ssp , bestFriend: friend},
        suit : costume,
        picture : pic, 
    }
superHeros.push(superHero)
}
//תמונות גיבורים בתוך משתנים
let marioPic = "https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/fb/d7/35/fbd73580-96fa-3722-e458-b523e61f8c5c/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
let sonicPic = "https://upload.wikimedia.org/wikipedia/he/2/2d/TSR_Sonic.png"
let linkPic = "https://static.wikia.nocookie.net/characterprofile/images/a/a1/LinkZelda.png/revision/latest?cb=20160105030137"

//קריאת הפונקציה, עם ארגיומנטים לפי בחירה
heroCharge('mario','fire ball','red hat and overall','luigi',marioPic)
heroCharge('sonic','rolling ball','blue body','tails',sonicPic)
heroCharge('link','Master sword','green cloths','zelda',linkPic)
console.log(superHeros)
 
//לולאה על כל המערך לתוך html
for(hero of superHeros){
    document.querySelector("#root").innerHTML += `<p>name : ${hero.name}</p>`
    document.querySelector("#root").innerHTML += `<p>hero's SuperPower ${hero.superPower} hero's frined ${hero.superPower.bestFriend}</p>`
    document.querySelector("#root").innerHTML += `<p>hero's suit ${hero.suit}</p>`
    document.querySelector("#root").innerHTML += `<p>hero's picture <img src="${hero.picture}" style="width:200px;height:200px;"></p><br>`

}