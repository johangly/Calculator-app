//? variables
//* calc variables
let DATA = 0;
let error = false;
let btn_res_active = false
//* change theme variables

let root = document.documentElement;
let $themeButton_1 = document.querySelector(".theme-1")
let $themeButton_2 = document.querySelector(".theme-2")
let $themeButton_3 = document.querySelector(".theme-3")
let $theme_ball= document.querySelector(".ball")

//* numberPad variables
// numbers
let $numbersPad = document.querySelectorAll(".btn")
let $zero_btn = document.querySelector(".btn_zero")
let $dot_btn = document.querySelector(".btn_dot")
// functions
let $reset_btn = document.querySelector(".btn_reset")
let $add_btn = document.querySelector(".btn_add")
let $result_btn = document.querySelector(".btn_result")
let $substract_btn = document.querySelector(".btn_subtract");
let $del_btn = document.querySelector(".btn_del");
let $multiply_btn = document.querySelector(".btn_multiply");
let $split_btn = document.querySelector(".btn_split");

//* screen variables

let screen = document.querySelector(".screen")

//* registration variables

let $registration = document.querySelector(".registration")
let $menuBtn = document.querySelector(".menu__btn")
let $registrationContainer = document.querySelector(".registration__container")
let $clearRegistrationBtn = document.querySelector(".clearRegistry__btn")
//! registration event

$menuBtn.addEventListener("click", (e) => {
  if ($registration.style.transform === "translateX(0%)") {
    $registration.style.transform = "translateX(100%)"
  } else {
    $registration.style.transform = "translateX(0%)"

  }
})

//! delete registration
localStorage.removeItem("2")

$clearRegistrationBtn.addEventListener("click", function clearRegistry(e) {
  let sortedLocalStorage = Object.keys(localStorage)
  let local = sortedLocalStorage.sort((a, b) => a - b)

  for (let i = 0; i < local.length; i++) {

    if (local[i]) {
      localStorage.removeItem(`${local[i]}`)
    }
  }
  loadLocalStorage();

})

//! load registration


function loadLocalStorage() {
  $registrationContainer.innerHTML = "";
  let sortedLocalStorage = Object.keys(localStorage)
  let local = sortedLocalStorage.sort((a, b) => a - b)
  for (let i = 0; i < local.length; i++) {
    let element = localStorage.getItem(`${local[i]}`);
    if (element) {
      let span = document.createElement("span")
      span.innerHTML = element
      span.classList.add(`calc-${i}`);
      $registrationContainer.appendChild(span)
    }
  }
  // if ($registrationContainer.innerHTML === "") {
  //   $registrationContainer.style.display = "none"
  // } else {
  //   $registrationContainer.style.display = "flex"
  // }
}
loadLocalStorage();


//! change theme functions

$themeButton_1.addEventListener('click', (e) => {
  $theme_ball.style.left = "6%"
  root.style.setProperty('--color-1', ' hsl(222, 26%, 31%)');
  root.style.setProperty('--color-2', 'hsl(223, 31%, 20%)');
  root.style.setProperty('--color-3', 'hsl(224, 36%, 15%)');
  root.style.setProperty('--color-4', 'hsl(225, 21%, 49%)');
  root.style.setProperty('--color-5', 'hsl(224, 28%, 35%)');
  root.style.setProperty('--color-6', 'hsl(6, 63%, 50%)');
  root.style.setProperty('--color-7', 'hsl(6, 70%, 34%)');
  root.style.setProperty('--color-8', 'hsl(30, 25%, 89%)');
  root.style.setProperty('--color-9', 'hsl(221, 14%, 31%)');
  root.style.setProperty('--color-10', 'hsl(28, 16%, 65%)');
  root.style.setProperty('--color-11', 'hsl(221, 14%, 31%)');
  root.style.setProperty('--color-12', 'hsl(0, 0%, 100%)');
  $result_btn.style.color = "#fff"
})

$themeButton_2.addEventListener('click', (e) => {
  $theme_ball.style.left = "38%"
  root.style.setProperty('--color-1', 'hsl(0, 0%, 90%)');
  root.style.setProperty('--color-2', 'hsl(0, 5%, 81%)');
  root.style.setProperty('--color-3', 'hsl(0, 0%, 93%)');
  root.style.setProperty('--color-4', 'hsl(185, 42%, 37%)');
  root.style.setProperty('--color-5', 'hsl(185, 58%, 25%)');
  root.style.setProperty('--color-6', 'hsl(25, 98%, 40%)');
  root.style.setProperty('--color-7', 'hsl(25, 99%, 27%)');
  root.style.setProperty('--color-8', 'hsl(45, 7%, 89%)');
  root.style.setProperty('--color-9', 'hsl(60, 10%, 19%)');
  root.style.setProperty('--color-10', 'hsl(35, 11%, 61%)');
  root.style.setProperty('--color-11', 'hsl(60, 10%, 19%)');
  root.style.setProperty('--color-12', 'hsl(60, 10%, 19%)');
  $result_btn.style.color = "#fff"
})

$themeButton_3.addEventListener('click', (e) => {
  $theme_ball.style.left = "69%"
  root.style.setProperty('--color-1', 'hsl(268, 75%, 9%)');
  root.style.setProperty('--color-2', 'hsl(268, 71%, 12%)');
  root.style.setProperty('--color-3', 'hsl(268, 71%, 12%)');
  root.style.setProperty('--color-4', 'hsl(281, 89%, 26%)');
  root.style.setProperty('--color-5', 'hsl(285, 91%, 52%)');
  root.style.setProperty('--color-6', 'hsl(176, 100%, 44%)');
  root.style.setProperty('--color-7', 'hsl(177, 92%, 70%)');
  root.style.setProperty('--color-8', 'hsl(268, 47%, 21%)');
  root.style.setProperty('--color-9', 'hsl(290, 70%, 36%)');
  root.style.setProperty('--color-11', 'hsl(52, 100%, 62%)');
  root.style.setProperty('--color-10', 'hsl(285, 91%, 52%)');
  root.style.setProperty('--color-12', 'hsl(52, 100%, 62%)');
  $result_btn.style.color ="hsl(198, 20%, 13%)"
})

//! numberPad functions

$numbersPad.forEach(btn => {
  btn.addEventListener('click', () => {
    var data = DATA.toString().split(" ")
    if ((error === false)) {
      if (btn_res_active === false) {
        if ((data[data.length - 1] === "+") || (data[data.length - 1] === "-") || (data[data.length - 1] === "/") || (data[data.length - 1] === "*")) {
          screen.innerHTML += " " + btn.innerHTML
          DATA = screen.innerHTML
        } else {
          screen.innerHTML += btn.innerHTML
          DATA = screen.innerHTML
        }
      } else {
        screen.innerHTML = ""
        DATA = 0
        btn_res_active = false
        screen.innerHTML += btn.innerHTML
        DATA = screen.innerHTML
      }
    } else {
      screen.innerHTML = ""
      DATA = 0
      btn_res_active = false
      error = false
      screen.innerHTML += btn.innerHTML
      DATA = screen.innerHTML
    }
  })
})
//! zero button

$zero_btn.addEventListener('click', () => {
  var data = DATA.toString().split(" ")
  if ((error === false)) {
    if (btn_res_active === false) {
      if ((data[data.length - 1] === "+") || (data[data.length - 1] === "-") || (data[data.length - 1] === "/") || (data[data.length - 1] === "*")) {
        screen.innerHTML += " " + $zero_btn.innerHTML
        DATA = screen.innerHTML
      } else {
        screen.innerHTML += $zero_btn.innerHTML
        DATA = screen.innerHTML
      }
    } else {
      screen.innerHTML = ""
      DATA = 0
      btn_res_active = false
      screen.innerHTML += $zero_btn.innerHTML
      DATA = screen.innerHTML
    }
  } else {
    screen.innerHTML = ""
    DATA = 0
    btn_res_active = false
    error = false
    screen.innerHTML += $zero_btn.innerHTML
    DATA = screen.innerHTML
  }
})
//! dot button

$dot_btn.addEventListener('click', () => {
  var data = DATA.toString().split(" ")
  if ((error === false)) {
    if (btn_res_active === false) {
      if ((data[data.length - 1] === "+") || (data[data.length - 1] === "-") || (data[data.length - 1] === "/") || (data[data.length - 1] === "*")) {
        screen.innerHTML += " " + $dot_btn.innerHTML
        DATA = screen.innerHTML
      } else {
        screen.innerHTML += $dot_btn.innerHTML
        DATA = screen.innerHTML
      }
    } else {
      screen.innerHTML = ""
      DATA = 0
      btn_res_active = false
      screen.innerHTML += $dot_btn.innerHTML
      DATA = screen.innerHTML
    }
  } else {
    screen.innerHTML = ""
    DATA = 0
    btn_res_active = false
    error = false
    screen.innerHTML += $dot_btn.innerHTML
    DATA = screen.innerHTML
  }
})

//! reset function

$reset_btn.addEventListener("click", () => {
  screen.innerHTML = ""
  DATA = 0
  btn_res_active = false
})

//! add function

$add_btn.addEventListener("click", (e) => {
  if (error === false) {
    screen.innerHTML += " + "
    DATA = screen.innerHTML
    btn_res_active = false
  } else {
    screen.innerHTML = ""
    DATA = 0
    error = false
    btn_res_active = false
    screen.innerHTML += " + "
    DATA = screen.innerHTML
  }
})
//! multiply function

$multiply_btn.addEventListener("click", (e) => {
  if (error === false) {
    screen.innerHTML += " * "
    DATA = screen.innerHTML
    btn_res_active = false
  } else {
    screen.innerHTML = ""
    DATA = 0
    btn_res_active = false
    error = false
    screen.innerHTML += " * "
    DATA = screen.innerHTML
  }
})

//! split function

$split_btn.addEventListener("click", (e) => {
  if (error === false) {
    screen.innerHTML += " / "
    DATA = screen.innerHTML
    btn_res_active = false
  } else {
    screen.innerHTML = ""
    DATA = 0
    btn_res_active = false
    error = false
    screen.innerHTML += " / "
    DATA = screen.innerHTML
  }
})
//! substract function

$substract_btn.addEventListener("click", (e) => {
  if (error === false) {
    screen.innerHTML += " - "
    btn_res_active = false
    DATA = screen.innerHTML
  } else {
    screen.innerHTML = ""
    DATA = 0
    btn_res_active = false
    error = false
    screen.innerHTML += " - "
    DATA = screen.innerHTML
  }
})

//! delete function

$del_btn.addEventListener("click", (e) => {
  if (error === false) {
    btn_res_active = false
    let del = DATA.toString().split(" ")
    if (del[del.length - 1] === "") {
      del = del.slice(0,-2).join(" ")
    } else {
      lastNum = del[del.length - 1]
      lastNum = lastNum.slice(0, -1)
      del[del.length - 1] = lastNum;
      del = del.join(" ")
    }
    DATA = del
    screen.innerHTML = DATA
  } else {
    screen.innerHTML = ""
    DATA = 0
    error = false
  }
})

//! result function

$result_btn.addEventListener("click", () => {
  DATA = screen.innerHTML
  let result = DATA.split(" ")
  let contador = 0
  let a;
  let b;
  let signo;
  //? if que verifica si hay un error en los datos a calcular
  if ((result[result.length - 1] === "+") || (result[result.length - 1] === "-") || (result[result.length - 1] === "/") || (result[result.length - 1] === "*") || (result[result.length - 1] === "")) {
    error = true
  }
  for (let i = 0; i < result.length; i++) {
    if (error === false) {
      //? detector de numeros
      if (i % 2 === 0) {
        if (i === 0) {
          a = result[i]
          contador++
        } else {
          contador++
        }
        if (result.length % 2 !== 0) {
          contador++
        }
        if (contador === 2) {
          b = result[i]
          if (signo === "+") {
            a = Number(a) + Number(b)
          }
          if (signo === "-") {
            a = Number(a) - Number(b)
          }
          if (signo === "/") {
            a = Number(a) / Number(b)
          }
          if (signo === "*") {
            a = Number(a) * Number(b)
          }
          contador = 0
        }
      }
      //? detector de signos
      if (i % 2 === 1) {
        signo = result[i]
      }
    } else {
      screen.innerHTML = "SYNTAX ERROR"
      error = true
    }
  }
  //? aqui se da el resultado
  if (error === false) {
    if (isNaN(a)) {
      screen.innerHTML = "SYNTAX ERROR"
      error = true
    } else {
      screen.innerHTML = a
      // let toLocalStorage = a
      localStorage.setItem(`${localStorage.length + 1}`, `${DATA} = ${a}`);
      DATA = a
      btn_res_active = true
      loadLocalStorage();
    }
  } else {
    a = 0
    b = 0
  }
})

// TODO: cuando se usa un traductor este elimina los espacios en los signos, forzar