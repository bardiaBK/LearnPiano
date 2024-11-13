const translation = {
    pr: {
        selct : "Learn Piano.خوش آمدین به",
        title : "شما در این سایت میتونید اهنگ های زیادی را که با پیانو",
        pargr : "زده میشه دانلود کنید به صورت رایگان"
    },
    en: {
        selct : "Welcome To Learn Piano",
        title : "You Can Download a lot of Free Song With Piano",
        pargr : "And See a lot of Piano Song"
    }
}

const languageSelectop = document.querySelector("select");
let selct = document.getElementById("selct");
let title = document.getElementById("title");
let pargr = document.getElementById("pargr");

languageSelectop.addEventListener("change", (event) =>{
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if(language == "pr"){
        selct.innerText = translation.en.selct;
        title.innerText = translation.en.title;
        pargr.innerText = translation.en.pargr;

    }else if(language == "en"){
        selct.innerText = translation.pr.selct;
        title.innerText = translation.pr.title;
        pargr.innerText = translation.pr.pargr;
    }
}