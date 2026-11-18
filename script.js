const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

// create hamburger button
const toggle = document.createElement("button");
toggle.className = "menu-toggle";
toggle.setAttribute("aria-label", "Toggle menu");
toggle.innerHTML = '<i class="fas fa-bars"></i>';
header.appendChild(toggle);

// copy the phone button into the dropdown (mobile only)
const callLi = document.createElement("li");
callLi.className = "nav-call";
callLi.innerHTML = '<button><i class="fas fa-phone"></i> +00 232 6777</button>';
nav.querySelector("ul").appendChild(callLi);

function setMenu(open) {
  nav.classList.toggle("open", open);
  toggle.innerHTML = open
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
}

toggle.addEventListener("click", () =>
  setMenu(!nav.classList.contains("open")),
);

// close menu when a link is tapped
nav
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => setMenu(false)));

// close menu if the screen becomes large again
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) setMenu(false);
});
