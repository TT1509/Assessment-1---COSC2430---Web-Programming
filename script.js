
//   RMIT University Vietnam
//   Course: COSC2430 Web Programming
//   Semester: 2023A
//   Assessment: Assignment 1
//   Author: Tran Luu Quang Tung
//   ID: 3978481
//   Acknowledgement: 
//     -	Website logo: 
//         https://www.freepik.com/free-vector/collection-simple-flat-design-book-logo_12067423.htm#query=book%20logo&position=5&from_view=keyword&track=ais
//     -	Background pattern: https://heropatterns.com/ 
//     -	Book cover images: https://www.panmacmillan.com/ 
//     -	Book description (Detail page): https://www.goodreads.com/book/show/2767052-the-hunger-games 

//     -	Video source: https://www.youtube.com/embed/xqMozc4K4pg 
 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navi").forEach(n => n. 
addEventListener("click", () =>{
    hamburger.classList.remove("active");

}))