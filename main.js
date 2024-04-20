const nav = document.querySelector("nav");
const cusList = document.querySelector(".cus-list");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

function showNavSide() {
  cusList.classList.add("reset-tranlate");
  nav.classList.add("overlay");
}
menu.addEventListener("click", showNavSide);

function hideNavSide() {
  cusList.classList.remove("reset-tranlate");
  nav.classList.remove("overlay");
}
close.addEventListener("click", hideNavSide);

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay") && window.innerWidth < 768) {
    hideNavSide();
  }
});
/////////////////////////////

const mount = document.querySelector(".mount");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const cartMount = document.getElementById("cartMount");
const inCart = document.querySelector(".in-cart");
const togCart = document.getElementById("togCart");
const addToCart = document.querySelector(".addToCart");
const msgForEmpty = document.getElementById("msgForEmpty");
const show = document.querySelector(".show");

function incre() {
  mount.innerHTML++;
  minus.style.opacity = "1";
}
plus.addEventListener("click", incre);

function decre() {
  if (mount.innerHTML == 0) {
    minus.setAttribute("disabled", "true");
  } else if (mount.innerHTML == 1) {
    minus.style.opacity = ".5";
    mount.innerHTML--;
  } else {
    mount.innerHTML--;
  }
}
minus.addEventListener("click", decre);

togCart.addEventListener("click", () => {
  inCart.classList.toggle("reset-position");
});

function htmlComponent() {
  return `
  <div class="px-3 py-4 prouct flex justify-between gap-1 sm:gap-0">
    <img
      class="rounded-lg w-12 md:w-14 object-contain shrink-0"
      src="./images/image-product-1-thumbnail.jpg"
      alt="product"
    />
    <div class="content flex flex-col text-DarkGrayishBlue">
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        $125.00 x ${mount.innerHTML}
        <span class="text-VeryDarkBlue font-bold">$${(
          125 * mount.innerHTML
        ).toFixed(2)}</span>
      </p>
    </div>
    <img
      class="delete object-contain cursor-pointer pl-2"
      src="./images/icon-delete.svg"
      alt="icon-delete"
    />
    </div>
    <div class="checkOut pb-6 px-5">
    <button
      class="w-full selection:bg-transparent bg-Orange flex items-center justify-center py-4 rounded-xl font-bold text-white hover:opacity-85"
    >
      Checkout
    </button>
  </div>
    `;
}

addToCart.addEventListener("click", () => {
  if (mount.innerHTML > 0) {
    msgForEmpty.style.display = "none";

    cartMount.style.opacity = 1;
    cartMount.innerText = mount.innerHTML;
    show.innerHTML = htmlComponent();

    const delIcon = document.querySelector(".delete");
    delIcon.addEventListener("click", deleteFromCart);
  }
});

function deleteFromCart() {
  show.innerHTML = "";
  mount.innerHTML = 0;
  cartMount.innerText = mount.innerHTML;
  cartMount.style.opacity = 0;
  msgForEmpty.style.display = "grid";
}

//############################################
const productActiveImg = document.querySelector(".main-active-img img");
const thumbnails = Array.from(document.querySelectorAll("#thumbnails img"));
const next = document.querySelectorAll(".next");
const prev = document.querySelectorAll(".prev");

thumbnails.forEach((img, index) => {
  img.addEventListener("click", (e) => {

    thumbnails.forEach((img) => {
      img.classList.remove("active-img");
    });

    if (thumbnails.indexOf(e.target) >= thumbnails.length / 2) {
      thumbnails[index - thumbnails.length / 2].classList.add("active-img");
    } else {
      thumbnails[index + thumbnails.length / 2].classList.add("active-img");
    }
    e.target.classList.add("active-img");

    productActiveImg.src = e.target.src.replace("-thumbnail", "");
    cheker();
    syncImgWithMainActive();
  });
});

function nextBtn() {
  if (!productActiveImg.src.match(`-${thumbnails.length / 2}`)) {
    let next = thumbnails.indexOf(document.querySelector(".active-img")) + 1;
    thumbnails[next].click();
  }
  cheker();
  syncImgWithMainActive();
}
next[0].addEventListener("click", nextBtn);

function prevBtn() {
  if (!productActiveImg.src.match(`-1`)) {
    let previous =
      thumbnails.indexOf(document.querySelector(".active-img")) - 1;
    thumbnails[previous].click();
  }
  cheker();
  syncImgWithMainActive();
}
prev[0].addEventListener("click", prevBtn);

function cheker() {
  if (productActiveImg.src.match(`-1`)) {
    prev[0].style.opacity = 0.3;
    prev[1].style.opacity = 0.3;
  } else {
    prev[0].style.opacity = 1;
    prev[1].style.opacity = 1;
  }

  if (productActiveImg.src.match(`-${thumbnails.length / 2}`)) {
    next[0].style.opacity = 0.3;
    next[1].style.opacity = 0.3;
  } else {
    next[0].style.opacity = 1;
    next[1].style.opacity = 1;
  }
}
cheker();

/////////////////////////////////////////////////////////
const lightBox = document.querySelector(".light-box");
const closeLightBox = document.querySelector(".close-light-box");
// const thumbnailsLightBox = document.querySelectorAll("#thumbnails-light-box img");
const mainLightBoxImg = document.querySelector(
  ".main-active-img-light-box img"
);

function syncImgWithMainActive() {
  mainLightBoxImg.src = productActiveImg.src;
}

productActiveImg.addEventListener("click", () => {
  lightBox.classList.add("show-light-box");
});

closeLightBox.addEventListener("click", () => {
  lightBox.classList.remove("show-light-box");
});

prev[1].addEventListener("click", prevBtn);
next[1].addEventListener("click", nextBtn);
