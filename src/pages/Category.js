import React from 'react';
import '../css/style.css';
import $ from 'jquery';

const Category = () => {
  return (
  
<>
<div id="wrapper" className='container category-sec'>
  <h1>My Works</h1>
<div class="toggles">
   <button className="brand-btn" id="showall">Show All</button> 
  <button className="brand-btn" id="web">Web Design</button>
  <button className="brand-btn" id="ux">UX Design</button>
  <button className="brand-btn" id="graphic">Graphic Design</button>
  <button className="brand-btn" id="motion">Motion Graphic</button>
</div>

<div class="posts">
     <div className="motion post p1">Motion Design</div>
    <div className="web post p2">Web Design</div>
    <div className="ux post p3" >UX Design</div>
    <div className="graphic post p4" >Graphic Design</div>
    <div className="web post p5" >Web Design</div>
    <div className="ux post p6">UX Design</div>
    <div className="web post p7" >Web Design</div>
    <div className="motion post p8" >Motion Design</div>
    <div className="graphic post p9" >Graphic Design</div>
  </div> 

</div>
</>

  )
}

$(function() {

  $('.toggles button').click(function(){
    var get_id = this.id;
    var get_current = $('.posts .' + get_id);

      $('.post').not( get_current ).hide(500);
      get_current.show(500);
  });
  
  
  $('#showall').click(function() {
      $('.post').show(500);
  });


}); 

export default Category