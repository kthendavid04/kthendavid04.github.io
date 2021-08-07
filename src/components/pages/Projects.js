import React from 'react';

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    //var instances = M.ScrollSpy.init(elems, options);
  });

//   // Or with jQuery

//   $(document).ready(function(){
//     $('.scrollspy').scrollSpy();
//   });

export default function Project() {
  return (
    <div>
      <h1>Projects</h1>
      <p>
 
      </p>
    </div>
  );
}

<div className="row">
    <div className="col s12 m9 l10">
      <div id="introduction" className="section scrollspy">
        <p>Content </p>
      </div>

      <div id="structure" className="section scrollspy">
        <p>Content </p>
      </div>

      <div id="initialization" className="section scrollspy">
        <p>Content </p>
      </div>
    </div>
    <div className="col hide-on-small-only m3 l2">
      <ul className="section table-of-contents">
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#structure">Structure</a></li>
        <li><a href="#initialization">Intialization</a></li>
      </ul>
    </div>
  </div>