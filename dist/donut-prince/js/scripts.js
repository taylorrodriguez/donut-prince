const desk = document.querySelector(".desk");
const nav = document.querySelector(".nav");
const navListItems = document.querySelectorAll(".nav ul li");
const navIcon = document.querySelector(".nav-icon");
const sticky = desk.offsetTop; // for sticky nav
const stickyNav = nav.offsetTop;

// STICKY NAVIGATION

window.onscroll = function () {
  stickyNavScroll();
};

function stickyNavScroll() {
  if (window.pageYOffset >= sticky && window.pageYOffset >= stickyNav) {
    desk.classList.add("sticky");
    nav.classList.add("sticky-nav");
  } else {
    desk.classList.remove("sticky");
    nav.classList.remove("sticky-nav");
  }
}

//makes the nav disappear when a list item is clicked
for (let i = 0; i < navListItems.length; i++) {
  navListItems[i].addEventListener("click", () => {
    nav.classList.remove("visible");
    for (let i = 0; i < navIcon.children.length; i++) {
      navIcon.children[i].classList.remove("new-bar");
      navIcon.children[i].classList.add("bar");
      navIcon.children[i].classList.add("old-nav");
    }
    navIcon.children[2].classList.remove("new-nav3");
  });
}

//ANIMATES NAV ICON

navIcon.addEventListener("click", () => {
  nav.classList.toggle("visible");

  if (nav.classList.contains("visible")) {
    for (let i = 0; i < navIcon.children.length; i++) {
      navIcon.children[i].classList.remove("bar");
      navIcon.children[i].classList.add("new-bar");
      navIcon.children[i].classList.remove("old-nav");
    }

    navIcon.children[0].classList.add("new-nav1");
    navIcon.children[1].classList.add("new-nav2");
    navIcon.children[2].classList.add("new-nav3");
  } else {
    for (let i = 0; i < navIcon.children.length; i++) {
      navIcon.children[i].classList.remove("new-bar");
      navIcon.children[i].classList.add("bar");
      navIcon.children[i].classList.add("old-nav");
    }

    navIcon.children[0].classList.remove("new-nav1");
    navIcon.children[1].classList.remove("new-nav2");
    navIcon.children[2].classList.remove("new-nav3");
  }
});

//LINK HOVERS

for (let i = 0; i <= navListItems.length - 1; i++) {
  navListItems[i].addEventListener("mouseover", () => {
    navListItems[i].children[0].style.color = "white";
  });
  navListItems[i].addEventListener("mouseout", () => {
    navListItems[i].children[0].style.color = "black";
  });
}
const deskListItems = desk.children[1].querySelectorAll("li");
for (let i = 0; i <= deskListItems.length - 1; i++) {
  deskListItems[i].addEventListener("mouseover", () => {
    deskListItems[i].children[0].style.color = "white";
  });
  deskListItems[i].addEventListener("mouseout", () => {
    deskListItems[i].children[0].style.color = "black";
  });
}

//MENU TOGGLE
const donutsMenu = document.querySelector(".donuts-menu");
const drinksMenu = document.querySelector(".drinks-menu");
const donutsToggle = document.querySelector(".donuts-button");
const drinksToggle = document.querySelector(".drinks-button");
const underBar = document.querySelector(".button-holder hr");

donutsToggle.classList.add("selected");
drinksToggle.addEventListener("click", () => {
  drinksToggle.classList.add("selected");
  donutsToggle.classList.remove("selected");
  underBar.classList.remove("under-left");
  underBar.classList.add("under-right");

  donutsMenu.classList.add("invisible");
  drinksMenu.classList.remove("invisible");
});

donutsToggle.addEventListener("click", () => {
  donutsToggle.classList.add("selected");
  drinksToggle.classList.remove("selected");
  underBar.classList.remove("under-right");
  underBar.classList.add("under-left");

  drinksMenu.classList.add("invisible");
  donutsMenu.classList.remove("invisible");
});

//ITEM HOVER
const donutItemOverlay = document.querySelectorAll(".donut-item-overlay");
const drinksItemOverlay = document.querySelectorAll(".drinks-item-overlay");

for (let i = 0; i <= donutsMenu.children[0].children.length - 1; i++) {
  donutsMenu.children[0].children[i].addEventListener("mouseover", () => {
    donutItemOverlay[i].classList.add("item-overlay-hover");
  });

  donutsMenu.children[0].children[i].addEventListener("mouseout", () => {
    donutItemOverlay[i].classList.remove("item-overlay-hover");
  });
}

for (let i = 0; i <= drinksMenu.children[0].children.length - 1; i++) {
  drinksMenu.children[0].children[i].addEventListener("mouseover", () => {
    drinksItemOverlay[i].classList.add("item-overlay-hover");
  });

  drinksMenu.children[0].children[i].addEventListener("mouseout", () => {
    drinksItemOverlay[i].classList.remove("item-overlay-hover");
  });
}

//ADD TO BAG

const addToBag = document.querySelectorAll(".add");
const inputNumber = document.querySelectorAll(".number-input");
let inputValue = document.querySelectorAll(".quantity"); //string
const submit = document.querySelectorAll(".submit");
const added = document.querySelectorAll(".added");
const close = document.querySelectorAll(".close-add");
const addContainer = document.querySelectorAll(".add-container");
const minus = document.querySelectorAll(".minus");
const plus = document.querySelectorAll(".plus");
const bag = document.querySelector(".bag");
const overlay = document.querySelector(".overlay");
const bagListContainer = document.querySelector(".bag-list-container");
const bagList = document.querySelector(".bag-list");
const sad = document.querySelector(".sad");
const empty = document.querySelector(".empty");
const html = document.querySelector("html");
const body = document.querySelector("body");
const checkout = document.querySelector(".checkout");
const prices = document.querySelectorAll(".price");

let totalPrice = document.querySelector(".total-price");
var total = 0;

// AMOUNT BUTTONS (-)(+)
for (let i = 0; i < addToBag.length; i++) {
  minus[i].addEventListener("click", () => {
    minus[i].parentNode.querySelector(".quantity").stepDown();
  });

  plus[i].addEventListener("click", () => {
    plus[i].parentNode.querySelector(".quantity").stepUp();
  });

  //Clicking "Add To Bag"
  addToBag[i].addEventListener("click", () => {
    close[i].classList.remove("invisible");
    addToBag[i].classList.add("invisible");
    inputNumber[i].style.display = "inline-flex";
    submit[i].classList.remove("invisible");
  });

  close[i].addEventListener("click", () => {
    close[i].classList.add("invisible");
    addToBag[i].classList.remove("invisible");
    inputNumber[i].style.display = "none";
    submit[i].classList.add("invisible");
  });

  //GET SUM FUNCTION
  var array = [];
  function getSum() {
    const bagAmounts = document.querySelectorAll(
      ".new-item .number-input .quantity"
    );

    var amountArray = [];
    sum = 0;

    for (let k = 0; k <= bagAmounts.length - 1; k++) {
      amountArray.push(bagAmounts[k].value);
      console.table(amountArray);
      sum += parseInt(amountArray[k]);
      document.querySelector(".item-amount").innerHTML = sum.toString();
      bagAmounts[k].addEventListener("keydown", () => {
        return false;
      });
    }
  }

  function readPrices() {
    let priceArray = [];
    const inBagPrices = document.querySelectorAll(".in-bag-prices");
    const mainTotalShown = document.querySelector(".main-total");
    for (let i = 0; i <= inBagPrices.length - 1; i++) {
      priceArray.push(parseFloat(inBagPrices[i].innerHTML.slice(1)));
      var mainTotal = priceArray.reduce((a, b) => a + b, 0);
      mainTotalShown.innerHTML = mainTotal.toFixed(2).toString();
    }
  }

  //SUBMIT BUTTON

  submit[i].addEventListener("click", () => {
    readPrices();
    getSum();

    document.querySelector(".item-amount").style.display = "flex";

    let newDiv = document.createElement("div");
    let deleteItem = document.createElement("img");

    deleteItem.setAttribute("src", "img/other-formats/close.png");
    deleteItem.classList.add("delete");

    let itemName = document.createElement("span");
    let amount = document.createElement("div");

    amount.classList.add("amount");
    newDiv.classList.add("new-item");

    var submittedType =
      submit[i].parentElement.parentElement.children[0].innerHTML;

    // MAKE CLONE
    function makeClone() {
      const cloneReference = submit[i].previousElementSibling; //reference of amount changer
      const clone = cloneReference.cloneNode(true); //clone of amount changer
      const itemTotal = document.createElement("span");
      itemTotal.classList.add("in-bag-prices");

      newDiv.appendChild(itemTotal);
      itemTotal.innerHTML =
        "$" +
        (
          parseFloat(
            submit[i].parentElement.parentElement.children[1].children[0]
              .children[1].innerHTML
          ) * parseInt(clone.children[1].value)
        ).toFixed(2);
      newDiv.appendChild(clone);
      clone.style.display = "inline-flex";
      clone.children[1].setAttribute("disabled", "");

      clone.children[0].addEventListener("click", () => {
        clone.children[0].parentNode.querySelector(".quantity").stepDown();
        if (
          parseInt(
            clone.children[0].parentNode.querySelector(".quantity").value
          ) >= 1
        ) {
          itemTotal.innerHTML =
            "$" +
            (
              clone.children[1].value *
              parseFloat(
                submit[i].parentElement.parentElement.children[1].children[0]
                  .children[1].innerHTML
              )
            ).toFixed(2);
        }
        readPrices();
        getSum();

        document.querySelector(".item-amount").innerHTML = sum.toString();
      });

      clone.children[2].addEventListener("click", () => {
        clone.children[2].parentNode.querySelector(".quantity").stepUp();
        if (
          parseInt(
            clone.children[2].parentNode.querySelector(".quantity").value
          ) >= 1
        ) {
          itemTotal.innerHTML =
            "$" +
            (
              clone.children[1].value *
              parseFloat(
                submit[i].parentElement.parentElement.children[1].children[0]
                  .children[1].innerHTML
              )
            ).toFixed(2);
        }
        readPrices();
        getSum();
        document.querySelector(".item-amount").innerHTML = sum.toString();
      });
    }

    itemName.innerHTML = submittedType;
    amount.innerHTML = inputValue[i].value;
    newDiv.appendChild(deleteItem);
    newDiv.appendChild(itemName);

    deleteItem.addEventListener("click", () => {
      sum =
        sum -
        parseInt(
          deleteItem.nextElementSibling.nextElementSibling.nextElementSibling.querySelector(
            ".quantity"
          ).value
        );

      document.querySelector(".item-amount").innerHTML = sum.toString();

      if (sum == 0) {
        document.querySelector(".item-amount").style.display = "none";
      }

      deleteItem.parentElement.remove();

      if (bagList.children.length == 0) {
        checkout.classList.add("invisible");
        totalPrice.classList.add("invisible");
        sad.classList.remove("invisible");
        empty.classList.remove("invisible");
      }

      addContainer[i].style.backgroundColor = "transparent";
      added[i].classList.add("invisible");
      addToBag[i].classList.remove("invisible");
      readPrices();
    });

    if (bagList.children.length === 0) {
      bagList.appendChild(newDiv);
    } else {
      for (let j = 0; j < bagList.children.length; j++) {
        if (submittedType === bagList.children[j].children[0].innerHTML) {
          var repeat = true;
        }
      }
    }
    if (repeat) {
      var itemToUpdate = array.indexOf(submittedType);
      var amountInBag = parseInt(
        bagList.children[itemToUpdate].children[1].innerHTML
      );

      amountInBag += parseInt(inputValue[i].value);

      amount.innerHTML = amountInBag.toString();

      bagList.children[itemToUpdate].children[1].innerHTML = amount.innerHTML;
    } else {
      array.push(submittedType);

      bagList.appendChild(newDiv);
      makeClone();
    }

    if (bagList.children.length !== 0) {
      checkout.classList.remove("invisible");
      totalPrice.classList.remove("invisible");
      empty.classList.add("invisible");
      sad.classList.add("invisible");
    }

    addContainer[i].style.backgroundColor = "lightgreen";

    added[i].classList.remove("invisible");
    inputNumber[i].style.display = "none";
    addToBag[i].classList.add("invisible");
    submit[i].classList.add("invisible");
    close[i].classList.add("invisible");

    readPrices();
    getSum();
  });
}

//BAG

function disableScroll() {
  html.style.scrollBehavior = "auto";

  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  html.style.scrollBehavior = "smooth";
  window.onscroll = function () {};
  window.onscroll = function () {
    stickyNavScroll();
  };
}

bag.addEventListener("click", () => {
  disableScroll();
  closeBag.style.display = "block";
  bagListContainer.style.display = "flex";
  overlay.style.display = "block";
});
overlay.addEventListener("click", () => {
  enableScroll();
  bagListContainer.style.display = "none";
  overlay.style.display = "none";
});

const closeBag = document.querySelector(".close-bag");
closeBag.addEventListener("click", () => {
  enableScroll();
  bagListContainer.style.display = "none";
  overlay.style.display = "none";
});

//MAP
const mapButton = document.querySelector(".see-map");
const map = document.querySelector(".gmap_canvas iframe");
const mapOuter = document.querySelector(".mapouter");
const gmapCanvas = document.querySelector(".gmap_canvas");
const closeMap = document.querySelector(".close-map");

mapButton.addEventListener("click", () => {
  map.setAttribute("height", "300px");
  mapOuter.style.height = "300px";
  gmapCanvas.style.height = "300px";
  closeMap.style.display = "flex";
});

closeMap.addEventListener("click", () => {
  map.setAttribute("height", "0px");
  mapOuter.style.height = "0px";
  gmapCanvas.style.height = "0px";
  closeMap.style.display = "none";
});

//PRICE

for (let i = 0; i < prices.length; i++) {
  const dollarSign = document.createElement("span");
  dollarSign.innerHTML = "$";
  prices[i].parentNode.insertBefore(dollarSign, prices[i]);
}