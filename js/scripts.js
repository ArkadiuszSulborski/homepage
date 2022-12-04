{
    const greetings = () => {
          console.log("Hello Youcode :)")
    };

    const ChangeBackgroundColor = () => {
          const body = document.querySelector(".js-body")
          const themeName = document.querySelector(".js-main__nameTheme")
    
          body.classList.toggle("dark")
          themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {
          const button = document.querySelector(".js-main__button")

          button.addEventListener("click", ChangeBackgroundColor);
          
          greetings ();
          ChangeBackgroundColor ();
    };

    init ();
};