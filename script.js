const tabs = document.querySelectorAll('[data-tab-target]')
const tabcontents = document.querySelectorAll('[data-tab-content]')

const acc_btn = document.querySelectorAll('.accordion-header');
const acc_contents = document.querySelectorAll('.accordion-body');
const strong = document.querySelectorAll('strong')

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const closed = document.querySelector('.close')
const logo = document.querySelector('.logo')
const replace = document.querySelector('.replacement')
const navLink = document.querySelectorAll('.nav-link')
console.log(navLink)

const link = document.querySelectorAll(".link");

const form = document.getElementById('form')
const email = document.getElementById('email')



form.addEventListener('submit', (e) => {
    e.preventDefault
    checkInputs()
})

function checkInputs() {
    const emailValue = email.value.trim()

    if (emailValue === '') {
      setErrorFor(email, `Whoops, make sure it's an email`);  
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, `Whoops, make sure it's an email`);
    } else {
        setSuccessFor()
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'field error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'field success' 
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}


for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("show");
    current[0].className = current[0].className.replace(" show", "");
    this.className += " show";
  });
}


hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-toggle')
    closed.classList.toggle('nav-toggle')
    hamburger.classList.toggle('nav-toggle')
    logo.classList.add('nav-toggle')
    replace.classList.add('nav-toggle')
})

closed.addEventListener('click', () => {
    closed.classList.remove('nav-toggle')
    hamburger.classList.remove('nav-toggle')
    nav.classList.toggle('nav-toggle')
    logo.classList.remove('nav-toggle')
    replace.classList.remove("nav-toggle");
})

navLink.forEach((e) => {
  e.addEventListener("click", () => {
      nav.classList.remove("nav-toggle");  
     logo.classList.remove("nav-toggle");
      replace.classList.remove("nav-toggle");
      closed.classList.remove("nav-toggle");
      hamburger.classList.remove("nav-toggle"); 
  });
});



acc_btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        acc_contents.forEach(acc => {
            if (e.target.nextElementSibling !== acc && acc.classList.contains('active')) {
                acc.classList.remove('active');
                acc_btn.forEach((btn) => btn.classList.remove('active'))
            }
        })
        const panel = btn.nextElementSibling;
        panel.classList.toggle('active')
        btn.classList.toggle('active');
    })
})




window.onclick = (e) => {
    if (!e.target.matches('.accordion-header')) {
        acc_btn.forEach((btn) => btn.classList.remove('active'))
        acc_contents.forEach((btn) => btn.classList.remove("active"));
    }
}





























tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tab.classList.add('underline')
        tabcontents.forEach(content => {
            content.classList.remove('active')
        })
        target.classList.add('active')
        target.classList.remove('underline')
    })
})