/* =========================
   SCROLL REVEAL
========================= */

const observer =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: .12
    }

);


document
.querySelectorAll(".reveal")
.forEach(element => {

    observer.observe(element);

});



/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
document.querySelector(".cursor");

const ring =
document.querySelector(".cursor-ring");


window.addEventListener(
    "mousemove",
    event => {

        cursor.style.left =
            event.clientX + "px";

        cursor.style.top =
            event.clientY + "px";

        ring.style.left =
            event.clientX + "px";

        ring.style.top =
            event.clientY + "px";

    }
);



/* =========================
   CURSOR HOVER
========================= */

document
.querySelectorAll("a,.card,.interest")
.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            ring.style.width = "65px";

            ring.style.height = "65px";

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            ring.style.width = "38px";

            ring.style.height = "38px";

        }
    );

});



/* =========================
   MAGNETIC ENQUIRE BUTTON
========================= */

const button =
document.querySelector(".enquire-btn");


button.addEventListener(
    "mousemove",
    event => {

        const rect =
        button.getBoundingClientRect();

        const x =
        event.clientX -
        rect.left -
        rect.width / 2;

        const y =
        event.clientY -
        rect.top -
        rect.height / 2;


        button.style.transform =
        `translate(${x*.15}px,${y*.15}px)`;

    }
);


button.addEventListener(
    "mouseleave",
    () => {

        button.style.transform = "";

    }
);
