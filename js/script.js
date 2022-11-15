{
    const welcome = () => {
        console.log("Witajcie wszyscy zaglądający tu developerzy! Oto stronka CV na zamówienie!")
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ?
            "jasny" :
            "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);

        welcome ()
    };

    init ();
}