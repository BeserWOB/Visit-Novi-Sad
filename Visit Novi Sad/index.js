const guide = document.querySelector(".guide-div");
const img = document.querySelector(".activities-imgs")
const snp = document.querySelector("#snp")
const dnp = document.querySelector("#dnp")
const exit = document.querySelector("#exit")
const ns = document.getElementById("title")





guide.addEventListener("click", function(){
    window.open("https://www.facebook.com/BeserWOB")
})

img.addEventListener("click", function(){
    window.open("https://www.facebook.com/BeserWOB")
})

snp.addEventListener("click", function(){
    window.open("https://www.snp.org.rs/")
})

dnp.addEventListener("click", function(){
    window.open("http://www.novisad.rs/lat/dunavski-park")
})

exit.addEventListener("click", function(){
    window.open("https://www.exitfest.org/")
})

ns.addEventListener("click", function(){
    window.open("http://www.novisad.rs/")
})
