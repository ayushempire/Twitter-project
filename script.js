// * Dom elemetns

//  selecting main page and login page
const mainPage = document.querySelector(".main-page");

const loginPage = document.querySelector(".login-page");

const right_middle = document.querySelector(".right-middle-main");

const brands_loginpage = document.querySelector(".brand");

const mian_top_login_btn = document.querySelector(".btn-top");

const feedPage = document.querySelector(".feed-page");

const loginpage_login_btn = document.querySelector(".login-page-loginbtn");

const loginpage_model = document.querySelector(".login-model");

const login_model_icon = document.querySelector(".login-model i");

const postBtn = document.querySelector(".post-btn");

const psotBlockWrapper = document.querySelector(".post-block-wrapper");

const psotBlock = document.querySelector(".post-block");

const psotBlock_icon = document.querySelector(".post-block-header i");

const psotBlock_postBtn = document.querySelector(".postblock-button");

const postblock_addBtn = document.querySelector(".post-block-footer span");

const postblock_input = document.querySelector(".postblock-input");

const user_info = document.querySelector(".nav-user");

const account_close = document.querySelector(".account-header i");

const account_content = document.querySelector(".account-content");

const account_wrapper = document.querySelector(".account-wrapper");

const dark_mode = document.querySelector(".circle");
// ******************************************************************** //

// main page

// todo: creating function to change the page

const goToLoginPage = () => {
  mainPage.style.display = "none";
  loginPage.style.display = "grid";
};

// todo: adding action listerner right_middle

right_middle.addEventListener("click", (e) => {
  if (e.target.classList[0] === "log-in") {
    goToLoginPage();
  }
  // console.log(e.target.classList);
});

// todo : making back to main page function
const loginpage_to_mainpage = () => {
  loginPage.style.display = "none";
  mainPage.style.display = "grid";
};

// todo adding event listener to brandslogin page
brands_loginpage.addEventListener("click", (e) => {
  if (e.target.classList[0] === "brand-home-btn") {
    loginpage_to_mainpage();
  }
  // console.log(e.target.classList);
});

// todo creating function for main to feed page
const login_to_feed = () => {
  mainPage.style.display = "none";
  loginPage.style.display = "none";
  feedPage.style.display = "grid";
};

mian_top_login_btn.addEventListener("click", (e) => {
  const input_user_info = document.querySelector(".user-info");
  // console.log(input_user_info);

  const input_user_password = document.querySelector(".password");
  // console.log(input_user_password);

  if (input_user_info.value !== "" && input_user_password.value !== "") {
    login_to_feed();
  } else if (input_user_info.value == "" && input_user_password.value == "") {
    goToLoginPage();
    loginpage_model.style.display = "block";
  }
  // console.log(e.target.classList);
});

// * log in page

// todo : making login page login btn ative
loginpage_login_btn.addEventListener("click", () => {
  // * getting data from local storage
  const luser = JSON.parse(localStorage.getItem("user"));

  // console.log(luser);

  //  *selecting log in page userinfo
  const loginpage_userinfo = document.querySelector(".loginpage-userinfo");
  console.log(loginpage_userinfo.value);
  // *selecting log in page password
  const loginpage_password = document.querySelector(".loginpage-password");
  console.log(loginpage_password.value);

  // * geting login info from localhost
  // for (let i = 0; i < luser.length; i++) {
  //   let user;
  //   user = luser[i];
  //   if (user.uname === loginpage_userinfo.value) {
  //     loginpage_model.style.display = "block";
  //   } else {
  //     login_to_feed();
  //   }
  // }

  // const user = luser.filter((e) => {
  //   return e === loginpage_userinfo.value;
  // });
  // console.log(user);

  // if loginpage_userinfo.value !== localStorage.getItem()
  // * end of this

  if (loginpage_userinfo.value !== "" && loginpage_password.value !== "") {
    let user = luser.filter((e) => {
      return e.uname === loginpage_userinfo.value;
    });

    if (
      user[0].uname !== loginpage_userinfo.value &&
      user[0].pass !== loginpage_password.value
    ) {
      loginpage_model.style.display = "block";
    } else {
      login_to_feed();
    }
  } else {
    loginpage_model.style.display = "block";
  }
});

// todo login model cross button
login_model_icon.addEventListener("click", () => {
  loginpage_model.style.display = "none";
});

// * Feed Page

// * Post button

// todo creating function for opacity change of post block buttons
const changeOpacity = (x) => {
  psotBlock_postBtn.style.opacity = x;
  postblock_addBtn.style.opacity = x;
};

// todo making post button active
postBtn.addEventListener("click", () => {
  psotBlock.style.display = "block";
  psotBlockWrapper.classList.add("post-block-wrapper-display");
});

// todo making close post model box
psotBlock_icon.addEventListener("click", () => {
  psotBlock.style.display = "none";
  psotBlockWrapper.classList.remove("post-block-wrapper-display");
  postblock_input.value = "";
  changeOpacity(0.5);
});

// todo opacity changes as we type in post block
postblock_input.addEventListener("keypress", (e) => {
  if (e.target.value !== "") {
    changeOpacity(1);
  }
});

postblock_input.addEventListener("blur", (e) => {
  if (e.target.value === "") {
    changeOpacity(0.5);
  }
});

// * account info

// todo making account ino active
user_info.addEventListener("click", () => {
  account_content.classList.add("account-content-upgrade");
  account_wrapper.classList.add("account-upgrade");
});

// todo making account close icon work
account_close.addEventListener("click", () => {
  account_content.classList.remove("account-content-upgrade");
  account_wrapper.classList.remove("account-upgrade");
});

// account_wrapper.addEventListener("click", () => {
//   account_content.classList.remove("account-content-upgrade");
//   account_wrapper.classList.remove("account-upgrade");
// });

// * dark mode
const darkElement1 = document.querySelectorAll(".darkmode-1");

const darkElement2 = document.querySelectorAll(".darkmode-2");
// console.log(darkElement2);

const lightElement = document.querySelectorAll(".lightmode");

const bordered = document.querySelectorAll(".border-1");
// todo toggle dark mode button
dark_mode.addEventListener("click", () => {
  dark_mode.classList.toggle("circle-upgrade");

  // todo to convert output to arrray list
  Array.from(darkElement1).map((darkEl1) =>
    darkEl1.classList.toggle("dark-mode-1")
  );
  Array.from(darkElement2).map((darkEl2) =>
    darkEl2.classList.toggle("dark-mode-2")
  );

  Array.from(lightElement).map((lightEl) => lightEl.classList.toggle("light"));

  Array.from(bordered).map((borderEl) =>
    borderEl.classList.toggle("border-color")
  );
});

// completed

// sign up button
const signBtn = document.querySelector("#btn-signup");
console.log(signBtn);

const signuppageSection = document.querySelector(".signup-page-section");
console.log(signuppageSection);

// signBtn.addEventListener('click',() => {
//   mainPage.style.display = 'none';
// signuppageSection.style.display = 'flex'
// })
