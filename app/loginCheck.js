const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

const loggedOutDivs = document.querySelectorAll('.log-out')
const loggedInDivs = document.querySelectorAll('.log-in')



export const loginCheck = user => {
    if (user){
        loggedOutLinks.forEach(link => link.style.display = 'none')
        loggedInLinks.forEach(link => link.style.display = 'block')
        loggedOutDivs.forEach(div => div.style.display = 'block')
        loggedInDivs.forEach(div => div.style.display = 'none')
    } else {
        loggedInDivs.forEach(div => div.style.display = 'block')
        loggedOutDivs.forEach(div => div.style.display = 'none')
        loggedOutLinks.forEach(link => link.style.display = 'block')
        loggedInLinks.forEach(link => link.style.display = 'none')

    }
}