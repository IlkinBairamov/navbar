$(document).ready(function(){

    $(".navbar-toggler").click(function(){
      $(".navList").slideToggle("slow")
      $(".navList").css({"display":"block","right":"20px","left":"260px"});
      $(".dropdown-menu").css({"left":"1%","top":"28px"})
    });

$(window).scroll(function () {
    let height=$(window).scrollTop()
    if( $("#navbar").hasClass("transparant")){
    if (height>0) {
        $("#navbar").css({"background-color":"white","position":"fixed","top":"0"})
    }
    else
    {
        $("#navbar").css({ "position": "absolute",
        "background-color": "transparent"})
    }
}})
$(window).scroll(function () {
    let height=$(window).scrollTop()
    if( $("#navbar").hasClass("none-background")){
    if (height>0) {
        $("#navbar").css({"background-color":"white","position":"fixed","top":"0"})
    }
}})


$(window).scroll(function () {
    let height=$(window).scrollTop()
    if (height>500) {
        $(".scroll-icon").addClass("scroll-active")
    }
    else{
        $(".scroll-icon").removeClass("scroll-active")
    }
})

$(".scroll-icon").click(function () {
    $(window).scrollTop(0)
})

  });

  let addBtn=document.querySelector(".add-buttom");
  let inputName=document.querySelector(".input-name");
  let inputTxt=document.querySelector(".input-txt");
  let error=document.querySelector(".error");
  let listComments=document.querySelector(".list-comments")
 

  addBtn.addEventListener("click",function(e){
      e.preventDefault();
      let username=inputName.value;
      let usercomment=inputTxt.value;

      let date= new Date();


      if(username=="" && usercomment==""){
           error.classList.remove("d-none")
      }
      else{
        error.classList.add("d-none")
      }

      if(localStorage.getItem("comments")==null){
        localStorage.setItem("comments",JSON.stringify([]));
      }
     
      let comments=JSON.parse(localStorage.getItem("comments"));

      let comment={
          userName:username,
          userComment:usercomment,
          date:date.toLocaleTimeString()
      }
      comments.push(comment);
      getcommentBody(comment);
      
      localStorage.setItem("comments",JSON.stringify(comments));
      inputName.value=" ";
      inputTxt.value=" ";
      commentCount();

  })

  getComment();

  function getComment(){
    let comments=JSON.parse(localStorage.getItem("comments"));
    comments.forEach(comment => {
        getcommentBody(comment)
    });
    
  }

  function getcommentBody(comment){
    listComments.innerHTML+=`
    <li>
    <div class="avatar">
        <img src="./assets/img/comment-avatar.png" alt="">
    </div>
    <div class="comment-content">
        <div class="comment">
            <strong>${comment.userName}</strong>
            <span>${comment.date}</span>
            <a href="#">
                <i class="fa fa-reply">
                    Reply
                </i>
            </a>
        </div>
        <p>${comment.userComment}</p>
    </div>
</li>`
  }
   

  commentCount();

  function commentCount(){
    let count=document.querySelector(".count")
    let comments=JSON.parse(localStorage.getItem("comments"));
    count.innerHTML=comments.length
  }


// popup js
let prevBtn = document.querySelector(".popup .arrows .prev");
let nextBtn = document.querySelector(".popup .arrows .next");
let popup = document.querySelector(".popup");
let closeIcon = document.querySelector(".popup .close-icon");
let bigImg = document.querySelector(".popup .inner img");

let images=document.querySelector("#blog-page .big-post .row a")




images.forEach((image)=>{
    e.addEventListener("click", (a)=>{
    a.preventDefault();
    doOpen();
    changableImage(image)
    image.classList.add("active-img");
    })
})

document.addEventListener("keydown", (e)=>{
    switch (e.code) {
        case "ArrowLeft":
         previousImage(document.querySelector(".active-img"))
         break;
        case "ArrowRight":
         nextImage(document.querySelector(".active-img"))
         break;
        case "Escape":
         galleryClose()
        default:
            break;
    }
 })


// nextBtn.addEventListener("click", function () {
//     let showSlide = document.querySelector(".showSlide");
//     nextElemSib(showSlide);
//   });
  
//   prevBtn.addEventListener("click", function () {
//     let showSlide = document.querySelector(".showSlide");
//     prevElemSib(showSlide);
//   });


  function doOpen() {
    popup.style.display = "flex";
  }
  
  function doClose() {
    popup.style.display = "none";
  }
  
  closeIcon.addEventListener("click", function () {
    doClose();
  });

  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
      doClose();
    }
  });

 

//   function nextElemSib(item) {
//     if (item.nextElementSibling !== null) {
//       item.nextElementSibling.classList.add("showSlide");
//       changableImage(item.nextElementSibling);
//     } else {
//       item.parentElement.children[0].classList.add("showSlide");
//       changableImage(item.parentElement.children[0]);
//     }
  
//     item.classList.remove("showSlide");
//   }
  
  
  function changableImage(item) {
    let imgSrc = item.getAttribute(".big-post .sekiller href");
   
    bigImg.setAttribute("src", imgSrc);
 
  }

//   function prevElemSib(item) {
//     let length = item.parentElement.children.length;
  
//     console.log(length);
//     if (item.previousElementSibling !== null) {
//       item.previousElementSibling.classList.add("showSlide");
//       changableImage(item.previousElementSibling);
//     } else {
//       item.parentElement.children[length - 1].classList.add("showSlide");
//       changableImage(item.parentElement.children[length - 1]);
//     }
//     item.classList.remove("showSlide");
//   }

//   function changeImg(image) {
//     largeImg.setAttribute("src", images.getAttribute("href"))
// }