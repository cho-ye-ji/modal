window.onload = () => {
           //모달
           const modal = document.querySelector("#my-modal");
           const modalBtn = document.querySelector("#modal-btn");
           const closeBtn01 = document.querySelector(".close");
           const closeBtn02 = document.querySelector(".closeBtn");
           const modalContent = document.querySelector(".modal-content");
   
           //event
           modalBtn.addEventListener('click',openModal);
           closeBtn01.addEventListener('click', closeModal);
           closeBtn02.addEventListener('click', closeModal);
           //번외
           window.addEventListener('click',outsideClick);
   
           function openModal(){
               modal.style.display = 'block';
   
               //위치값으로 올라가게 하기위해
               // var Modaloffset = $('#my-modal').offset();
               var startModal = $('#start-modal').offset();
   
               $('html').animate({scrollTop:startModal.top},400);
               document.body.overflow = 'hidden'; //움직이지 않게
           }
           function closeModal(){
               modal.style.display = 'none';
               document.body.overflow = 'unset';
           }
   
           function outsideClick(e){
               if(e.target == modal){
                   modal.style.display = 'none';
                   document.body.style.overflow = 'unset';
               }
           }
   
}