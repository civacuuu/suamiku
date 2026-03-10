const messages = [
"Suamiku...",
"Aku tau aku udah bikin kamu kecewa.",
"Aku benar-benar minta maaf atas semuanya.",
"Aku ga pernah ada niatan bikin kamu ngerasa kaya ini.",
"Kamu itu sangat berarti buat aku.",
"Aku gak mau kehilangan kamu 🥺",
"Aku sayang kamu, suamiku ❤️",
"Kasih aku kesempatan yaa. Aku janji akan berusaha memperbaiki semuanya 🥺"
]

let msgIndex = 0
let charIndex = 0
const text = document.getElementById("text")

function typeText(){

if(charIndex < messages[msgIndex].length){

text.innerHTML += messages[msgIndex].charAt(charIndex)
charIndex++

setTimeout(typeText,60)

}else{

setTimeout(()=>{
text.innerHTML=""
msgIndex++
charIndex=0

if(msgIndex < messages.length){

typeText()

}else{

document.getElementById("tombol").classList.remove("hidden")

}

},2500)

}

}

typeText()


function maafin(){

document.getElementById("akhir").innerHTML =
"Terima kasih udah maafin aku ❤️ love u suamiku."

}


/* tombol kabur */

const tombolKabur = document.getElementById("kabur")

tombolKabur.addEventListener("mouseover",()=>{

const x = Math.random()*200-100
const y = Math.random()*200-100

tombolKabur.style.transform =
`translate(${x}px, ${y}px)`

})


/* animasi hati */

function createHeart(){

const heart=document.createElement("div")

heart.classList.add("heart")
heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"
heart.style.fontSize=Math.random()*20+10+"px"
heart.style.animationDuration=Math.random()*3+3+"s"

document.querySelector(".hearts").appendChild(heart)

setTimeout(()=>{
heart.remove()
},5000)

}

setInterval(createHeart,300)