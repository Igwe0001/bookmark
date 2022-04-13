const tabs = document.querySelectorAll('[data-tab-target]')
const tabcontents = document.querySelectorAll('[data-tab-content]')

const acc_btn = document.querySelectorAll('.accordion-header');
const acc_contents = document.querySelectorAll('.accordion-body');

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const closed = document.querySelector('.close')
const logo = document.querySelector('.logo')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-toggle')
    closed.classList.toggle('nav-toggle')
    hamburger.classList.toggle('nav-toggle')
    logo.classList.add('nav-toggle')
    
})

closed.addEventListener('click', () => {
    closed.classList.remove('nav-toggle')
    hamburger.classList.remove('nav-toggle')
    nav.classList.toggle('nav-toggle')
    logo.classList.remove('nav-toggle')
})


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