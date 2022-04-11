const tabs = document.querySelectorAll('[data-tab-target]')
const tabcontents = document.querySelectorAll('[data-tab-content]')

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