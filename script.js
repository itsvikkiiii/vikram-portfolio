
/* =========================
   MOBILE MENU
========================= */

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

if (menu && nav) {

  menu.addEventListener("click", () => {

    nav.classList.toggle("open");

  });


  document
    .querySelectorAll(".nav nav a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        nav.classList.remove("open");

      });

    });

}


/* =========================
   CURSOR GLOW
========================= */

const glow = document.querySelector(".cursor-glow");

if (glow) {

  document.addEventListener(
    "pointermove",
    (event) => {

      glow.style.left =
        event.clientX + "px";

      glow.style.top =
        event.clientY + "px";

    }
  );

}


/* =========================
   BACK TO TOP
========================= */

const topBtn =
  document.querySelector(".back-top");

if (topBtn) {

  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 500) {

        topBtn.classList.add("show");

      } else {

        topBtn.classList.remove("show");

      }

    }
  );


  topBtn.addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

    }
  );

}


/* =========================
   SCROLL REVEAL
========================= */

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


/* =========================
   ANIMATED ELEMENTS
========================= */

document
  .querySelectorAll(
    `
    .project-card,
    .skill-card,
    .timeline-item,
    .certificate-card,
    .training-card,
    .activity-card,
    .contact-grid a
    `
  )
  .forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(16px)";

    element.style.transition =
      "opacity .55s ease, transform .55s ease";

    observer.observe(element);

  });
```
