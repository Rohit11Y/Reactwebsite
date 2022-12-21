import React from 'react'
import '../css/style.css';
import { HashLink as Link } from 'react-router-hash-link';
import $ from 'jquery';

const Faq = () => {
  return (
    <div className='faq-sec'>

<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 ">FAQ</h1>
    <p className="lead text-center">This is a Sample FAQ page.</p>
  </div>
</div>

<br/>
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingOne">
            <h4 className="panel-title">
              <Link data-toggle="collapse" data-parent="#accordion" to="/faq#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               What is Data Structure?
              </Link>
            </h4>

          </div>
          <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div className="panel-body">Data structure is a fundamental concept of any programming language, essential for algorithmic design.
</div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingTwo">
            <h4 className="panel-title">
              <Link className="collapsed" data-toggle="collapse" data-parent="#accordion" to="/faq#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Benefits of Learning Data Structures
              </Link>
            </h4>

          </div>
          <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div className="panel-body">Any given problem has constraints on how fast the problem should be solved (time) and how much less resources the problem consumes(space). That is, a problem is constrained by the space and time complexity within which it has to be solved efficiently.
</div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingThree">
            <h4 className="panel-title">
              <Link className="collapsed" data-toggle="collapse" data-parent="#accordion" to="/faq#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                What is an array?
              </Link>
            </h4>

          </div>
          <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <div className="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




   
  </div>


  )
}

$(function() {
  $("#headingOne").click(function(){
    $("#collapseOne").toggle();
    $("#headingOne").addClass("panel-titleicon");
  });


$("#headingTwo").click(function(){
  $("#collapseTwo").toggle();
  $("#headingOne").addClass("panel-titleicon");
});

$("#headingThree").click(function(){
  $("#collapseThree").toggle();
  $("#headingOne").addClass("panel-titleicon");
});

});

export default Faq