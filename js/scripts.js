console.log("Cześć Youcode!")

let button = document.querySelector(".js-main__button");
let body = document.querySelector(".js-body");
let main__nameTheme = document.querySelector(".js-main__nameTheme");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains(".dark")) {
        main__nameTheme.innerText = "jasny";

    } else {
        main__nameTheme.innerText = "ciemniejszy";
    }

}
);
