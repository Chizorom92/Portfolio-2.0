
import {useEffect} from "react";
import $ from "jquery";
import "../CSS/Top.css"






const Top = () => {
    
    //  scroll top
    useEffect (() => {

       $(window).on( "scroll", () => {
    if ($(window).scrollTop() > 100) {
      $("#scroll-top").fadeIn();

    } else{ $('#scroll-top').fadeOut();
    }
  })

  $('#scroll-top').on("click", () => {
    $('html, body').animate({scrollTop: 0}, 500)
  })

  return () => {
    $(window).off("scroll");
    $("#scroll-top").off("click")
  };

}, []);
     
  return (
   <> 

   <button id="scroll-top"><i className="fa-solid fa-arrow-up"></i></button>
   
   
   </>
  )
}


export default Top; 