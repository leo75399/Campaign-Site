/** @format */

// 各區塊變數
let header = document.getElementById("header");
let sideNav = document.getElementById("side_nav");
let sideNavLobby = document.getElementById("side_nav_lobby");
let sideNavAbout = document.getElementById("side_nav_about");
let sideNavTicket = document.getElementById("side_nav_ticket");
let sideNavRules = document.getElementById("side_nav_rules");
let sideNavLibrary = document.getElementById("side_nav_library");
let sideNavContact = document.getElementById("side_nav_contact");
let mobileNavTitle = document.getElementById("header_mobile_title");

// 首頁parallax特效
var bannerBackground = document.getElementById("header_background");
var parallaxInstance = new Parallax(bannerBackground, {
  relativeInput: true,
  frictionY: 0.01,
  frictionX: 0.01,
  limitX: 50,
  limitY: 50,
  hoverOnly: true,
});

// fupage.js特效
new fullpage("#container", {
  licenseKey: "",
  scrollOverflow: true,
  anchors: ["Welcome", "Intro", "Ivinte", "Guest", "Secret", "Tipsy", "CheckOut", "Ticket", "Rules", "Library", "Contact"],
  lockAnchors: true,
  scrollingSpeed: 850,
  easingcss3: "ease-in-out",

  afterLoad: function (origin, destination, direction) {
    // console.log(origin, destination, direction);
    // console.log(origin.anchor, origin.index + " To " + destination.anchor, destination.index);

    //計算起始位置與終點位置，去決定要關閉與開啟什麼
    //// 何時顯示header與nav
    if (destination.index > 1) {
      //開啟
      header.setAttribute("class", "header--close header--open");
      openSideNav();
    } else if (destination.index < 2) {
      //關閉
      header.setAttribute("class", "header--close");
      closeSideNav();
    }

    //// 到各區塊時的動態
    if (destination.index == 1) {
      secondIntroOpen();
      sideNavLobbyOpen();
    } else if (destination.index == 2) {
      sideNavAboutOpen();
      navTitleToAbout();
      thirdIvinteOpen();
    } else if (destination.index == 3) {
      sideNavAboutOpen();
      navTitleToAbout();
      fourGuestOpen();
    } else if (destination.index == 4) {
      sideNavAboutOpen();
      navTitleToAbout();
      fiveSecretOpen();
    } else if (destination.index == 5) {
      sideNavAboutOpen();
      navTitleToAbout();
      sixTipsyOpen();
    } else if (destination.index == 6) {
      sideNavAboutOpen();
      navTitleToAbout();
      sevenCheckOutOpen();
    } else if (destination.index == 7) {
      sideNavTicketOpen();
      navTitleToTicket();
      eightTicketOpen();
    } else if (destination.index == 8) {
      sideNavRulesOpen();
      navTitleToRules();
      nineRulesOpen();
    } else if (destination.index == 9) {
      sideNavLibraryOpen();
      navTitleToLibrary();
      tenLibraryOpen();
    } else if (destination.index == 10) {
      sideNavContactOpen();
      navTitleToContact();
      elevenContactOpen();
    }

    //// 離開各區塊時的動態

    if (origin.index == 1) {
      sideNavLobbyClose();
      secondIntroClose();
    } else if (origin.index == 2) {
      if (destination.index < 2 || destination.index > 6) {
        sideNavAboutClose();
      }
      thirdIvinteClose();
    } else if (origin.index == 3) {
      if (destination.index < 2 || destination.index > 6) {
        sideNavAboutClose();
      }
      fourGuestClose();
    } else if (origin.index == 4) {
      if (destination.index < 3 || destination.index > 6) {
        sideNavAboutClose();
      }
      fiveSecretClose();
    } else if (origin.index == 5) {
      if (destination.index < 3 || destination.index > 6) {
        sideNavAboutClose();
      }
      sixTipsyClose();
    } else if (origin.index == 6) {
      if (destination.index < 3 || destination.index > 6) {
        sideNavAboutClose();
      }
      sevenCheckOutClose();
    } else if (origin.index == 7) {
      sideNavTicketClose();
      eightTicketClose();
    } else if (origin.index == 8) {
      sideNavRulesClose();
      nineRulesClose();
    } else if (origin.index == 9) {
      sideNavLibraryClose();
      tenLibraryClose();
    } else if (origin.index == 10) {
      sideNavContactClose();
      elevenContactClose();
    }
  },
});

//methods
// fullpage_api.setLockAnchors (false);

function openSideNav() {
  //開啟sideNav
  sideNav.setAttribute("class", "side_nav--close side_nav--open");
}

function closeSideNav() {
  //關閉sideNav
  sideNav.setAttribute("class", "side_nav--close");
}

//開啟各區塊動畫

let textfirstWelcome = document.querySelector("#firstWelcome .section_mainBlock_text");
let textsecondIntro = document.querySelector("#secondIntro .section_mainBlock_text");
let textthirdIvinte = document.querySelector("#thirdIvinte .section_mainBlock_text");
let textfourGuest = document.querySelector("#fourGuest .section_mainBlock_text");
let textfiveSecret = document.querySelector("#fiveSecret .section_mainBlock_text");
let textsixTipsy = document.querySelector("#sixTipsy .section_mainBlock_text");
let textsevenCheckOut = document.querySelector("#sevenCheckOut .section_mainBlock_text");
let texteightTicket = document.querySelector("#eightTicket .section_mainBlock_text");
let textnineRules = document.querySelector("#nineRules .section_mainBlock_text");
let texttenLibrary = document.querySelector("#tenLibrary .section_mainBlock_text");
let textelevenContact = document.querySelector("#elevenContact .section_mainBlock_text");

let decosecondIntroOpen = document.querySelector(".section_mainBlock_future");
let decothirdIvinte = document.querySelector("#thirdIvinte .section_deco");
let decofourGuest = document.querySelector("#fourGuest .section_deco");
let decofiveSecret = document.querySelector("#fiveSecret .section_deco");
let decosixTipsy = document.querySelector("#sixTipsy .section_deco");
let decosevenCheckOut = document.querySelector("#sevenCheckOut .section_deco");

let contentEightTicket = document.querySelector("#eightTicket .section_content--overflow");
let contentElevenContact = document.querySelector("#elevenContact .section_content--overflow");

////open

function secondIntroOpen() {
  textsecondIntro.setAttribute("class", "section_mainBlock_text section_text--close section_text--open");
  decosecondIntroOpen.setAttribute("class", "section_mainBlock_future section_mainBlock_future--close section_mainBlock_future--open");
}

function thirdIvinteOpen() {
  textthirdIvinte.setAttribute("class", "section_mainBlock_text section_text--close section_text--open");
  decothirdIvinte.setAttribute("class", "section_deco section_deco--close section_deco--open");
}

function fourGuestOpen() {
  textfourGuest.setAttribute("class", "section_mainBlock_text section_text--close section_text--open");
  decofourGuest.setAttribute("class", "section_deco section_deco--close section_deco--open");
}

function fiveSecretOpen() {
  textfiveSecret.setAttribute("class", "section_mainBlock_text section_text--close section_text--open");
  decofiveSecret.setAttribute("class", "section_deco section_deco--close section_deco--open");
}

function sixTipsyOpen() {
  textsixTipsy.setAttribute("class", "section_mainBlock_text section_text--close section_text--open");
  decosixTipsy.setAttribute("class", "section_deco section_deco--close section_deco--open");
}

function sevenCheckOutOpen() {
  textsevenCheckOut.setAttribute("class", "section_mainBlock_text section_text--close section_text--open");
  decosevenCheckOut.setAttribute("class", "section_deco section_deco--close section_deco--open");
}

function eightTicketOpen() {
  //特別長
  contentEightTicket.setAttribute("class", "section_content--overflow minusHeader section_content--close section_content--open");
}

function nineRulesOpen() {
  textnineRules.setAttribute("class", "section_mainBlock_text section_text--close section_text--open");
}

function tenLibraryOpen() {
  texttenLibrary.setAttribute("class", "section_mainBlock_text section_text--close section_text--open");
}

function elevenContactOpen() {
  //特別長
  contentElevenContact.setAttribute("class", "section_content--overflow minusHeader section_content--close section_content--open");
}

////close

function secondIntroClose() {
  textsecondIntro.setAttribute("class", "section_mainBlock_text section_text--close");
  decosecondIntroOpen.setAttribute("class", "section_mainBlock_future section_mainBlock_future--close");
}

function thirdIvinteClose() {
  textthirdIvinte.setAttribute("class", "section_mainBlock_text section_text--close");
  decothirdIvinte.setAttribute("class", "section_deco section_deco--close");
}

function fourGuestClose() {
  textfourGuest.setAttribute("class", "section_mainBlock_text section_text--close");
  decofourGuest.setAttribute("class", "section_deco section_deco--close ");
}

function fiveSecretClose() {
  textfiveSecret.setAttribute("class", "section_mainBlock_text section_text--close");
  decofiveSecret.setAttribute("class", "section_deco section_deco--close ");
}

function sixTipsyClose() {
  textsixTipsy.setAttribute("class", "section_mainBlock_text section_text--close");
  decosixTipsy.setAttribute("class", "section_deco section_deco--close");
}

function sevenCheckOutClose() {
  textsevenCheckOut.setAttribute("class", "section_mainBlock_text section_text--close");
  decosevenCheckOut.setAttribute("class", "section_deco section_deco--close");
}

function eightTicketClose() {
  contentEightTicket.setAttribute("class", "section_content--overflow minusHeader section_content--close");
}

function nineRulesClose() {
  textnineRules.setAttribute("class", "section_mainBlock_text section_text--close");
}

function tenLibraryClose() {
  texttenLibrary.setAttribute("class", "section_mainBlock_text section_text--close");
}

function elevenContactClose() {
  contentElevenContact.setAttribute("class", "section_content--overflow minusHeader section_content--close");
}

// sideNav 動態
function sideNavLobbyOpen() {
  sideNavLobby.setAttribute("class", "navLi--close navLi--open");
}

function sideNavAboutOpen() {
  sideNavAbout.setAttribute("class", "navLi--close navLi--open");
}

function sideNavTicketOpen() {
  sideNavTicket.setAttribute("class", "navLi--close navLi--open");
}

function sideNavRulesOpen() {
  sideNavRules.setAttribute("class", "navLi--close navLi--open");
}

function sideNavLibraryOpen() {
  sideNavLibrary.setAttribute("class", "navLi--close navLi--open");
}

function sideNavContactOpen() {
  sideNavContact.setAttribute("class", "navLi--close navLi--open");
}

function sideNavLobbyClose() {
  sideNavLobby.setAttribute("class", "navLi--close");
}

function sideNavAboutClose() {
  sideNavAbout.setAttribute("class", "navLi--close ");
}

function sideNavTicketClose() {
  sideNavTicket.setAttribute("class", "navLi--close ");
}

function sideNavRulesClose() {
  sideNavRules.setAttribute("class", "navLi--close ");
}

function sideNavLibraryClose() {
  sideNavLibrary.setAttribute("class", "navLi--close");
}

function sideNavContactClose() {
  sideNavContact.setAttribute("class", "navLi--close ");
}

// Mobile nav控制
let navCheckbox = document.getElementById("header_mobile_button");
let navList = document.getElementById("header_mobile_list");
let navButton = document.getElementById("header_mobile_button_svg");

let navStatus = "close"; //nav 是否為開啟狀態

navCheckbox.addEventListener("click", navCheckboxChange, false); //按header button的判斷
function navCheckboxChange() {
  //按header button的判斷
  if (navStatus == "close") {
    openNav();
  } else if (navStatus == "open") {
    closeNav();
  }
}

navList.addEventListener("click", navListClick, false); //判斷點擊哪個nav中的選項
function navListClick(e) {
  //判斷點擊哪個nav中的選項
  console.log(e);
  if (e.target.nodeName == "LI") {
    //點擊li關閉nav並滑動
    if (e.target.innerText == "LOBBY") {
      fullpage_api.moveTo(2);
    } else if (e.target.innerText == "ABOUT") {
      fullpage_api.moveTo(3);
    } else if (e.target.innerText == "TICKET") {
      fullpage_api.moveTo(8);
    } else if (e.target.innerText == "RULES") {
      fullpage_api.moveTo(9);
    } else if (e.target.innerText == "LIBRARY") {
      fullpage_api.moveTo(10);
    } else if (e.target.innerText == "CONTACT") {
      fullpage_api.moveTo(11);
    }
  }
  closeNav();
}

function closeNav() {
  //開啟nav
  navList.setAttribute("class", "header_mobile_list--close");
  navButton.setAttribute("class", "ham hamRotate ham4");
  navStatus = "close";
}

function openNav() {
  //關閉nav
  navList.setAttribute("class", "header_mobile_list--close header_mobile_list--open");
  navButton.setAttribute("class", "ham hamRotate ham4 active");
  navStatus = "open";
}

//更改Nav中的區塊標題
function navTitleToMenu() {
  mobileNavTitle.innerText = "MENU";
}

function navTitleToAbout() {
  mobileNavTitle.innerText = "ABOUT";
}

function navTitleToTicket() {
  mobileNavTitle.innerText = "TICKET";
}

function navTitleToRules() {
  mobileNavTitle.innerText = "RULES";
}

function navTitleToLibrary() {
  mobileNavTitle.innerText = "LIBRARY";
}

function navTitleToContact() {
  mobileNavTitle.innerText = "CONTACT";
}

//sideNav滑動
sideNav.addEventListener("click", sideNavClickMove, false);

function sideNavClickMove(e) {
  // console.log(e.target.parentNode.id);
  sideNavLobbyClose();
  sideNavAboutClose();
  sideNavTicketClose();
  sideNavRulesClose();
  sideNavLibraryClose();
  sideNavContactClose();

  if (e.target.nodeName == "H2" || e.target.nodeName == "DIV" || e.target.nodeName == "P") {
    //點到sidebar才判斷
    if (e.target.parentNode.id == "side_nav_lobby") {
      fullpage_api.moveTo(2);
    } else if (e.target.parentNode.id == "side_nav_about") {
      fullpage_api.moveTo(3);
    } else if (e.target.parentNode.id == "side_nav_ticket") {
      fullpage_api.moveTo(8);
    } else if (e.target.parentNode.id == "side_nav_rules") {
      fullpage_api.moveTo(9);
    } else if (e.target.parentNode.id == "side_nav_library") {
      fullpage_api.moveTo(10);
    } else if (e.target.parentNode.id == "side_nav_contact") {
      fullpage_api.moveTo(11);
    }
  }
}

// button有滑動效果
document.getElementById("header_homeButton").addEventListener("click", function () {
  //header的home button
  if (navStatus == "close") {
    fullpage_api.moveTo(1);
  }
});

document.getElementById("firstWelcome_button").addEventListener("click", function () {
  //firstWelcome 的enter button
  fullpage_api.moveTo(2);
});

document.getElementById("section_mainBlock_future_about").addEventListener("click", function () {
  //第2cut的滑動功能
  fullpage_api.moveTo(3);
});
document.getElementById("section_mainBlock_future_ticket").addEventListener("click", function () {
  //第2cut的滑動功能
  fullpage_api.moveTo(8);
});
document.getElementById("section_mainBlock_future_rule").addEventListener("click", function () {
  //第2cut的滑動功能
  fullpage_api.moveTo(9);
});
document.getElementById("section_mainBlock_future_contact").addEventListener("click", function () {
  //第2cut的滑動功能
  fullpage_api.moveTo(11);
});

// 倒數
let nowTime = new Date();

//// 截止日（結訓當天中午）換成距今毫秒
var countDownDate = new Date("Nov 17, 2021 12:00:00").getTime();

// 每一秒換一次前台倒數
var x = setInterval(function () {
  // 今天日期換成距今毫秒
  var now = new Date().getTime();

  //兩者相減
  var distance = countDownDate - now;

  // 將毫秒換回來
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 呈現結果在前台
  document.getElementById("countDown").innerHTML = ` <span class="days">${days}</span>天
  <span class="hours">${hours}</span>時
  <span class="minutes">${minutes}</span>分
  <span class="seconds">${seconds}</span>秒`;
}, 1000);
