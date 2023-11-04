const header = document.quearySelector("header");


window.addEventListener("scroll",function(){

    header.classList.toggle("sticky",window.scrollY >120);
});

let menu=document.quearySelector('#menu-icon');
let navlist=document.quearySelector('.navlist');

menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x')
    navlist.classList.remove('active');
}






// Get the GitHub logo element
// const githubLogo = document.querySelector('.logo');

// // Function to open GitHub profile in a new tab
// function openGitHubProfile() {
//     const githubProfileURL = 'https://github.com/Shivaksh01'; // Replace with your GitHub profile URL
//     window.open(githubProfileURL, '_blank');
// }

// // Attach click event listener to the GitHub logo
// githubLogo.addEventListener('click', openGitHubProfile);
