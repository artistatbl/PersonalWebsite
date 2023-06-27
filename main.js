var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor.style.cssText = "left: " + e.clientX
    + "px; top: " + e.clientY + "px; ";
})

if(scrollButton){
    window.addEventListener('scroll', ()=> {
      if(pageYOffset > (window.innerHeight * 1.2)){
        scrollButton.style.display="flex";
      }else{
        scrollButton.style.display="none";
      }
    });
    scrollButton.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }

