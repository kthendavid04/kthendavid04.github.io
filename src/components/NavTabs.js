/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    //<!-- Navigation bar for full screen -->
    <div className="containter">
      <nav className="nav-extended">
        <div class="nav-wrapper cyan lighten-2">
            
            <a className="center brand-logo">KS Development</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="tel:+16144045481"><i className="material-icons">phone</i></a></li>
              <li><a href="mailto:kthendavid04@gmail.com"><i className="material-icons">mail</i></a></li>
              <li><a href="https://github.com/kthendavid04"><i className="fa fa-github" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/in/kthenfishsandwich/"><i className="fab fa-linkedin"></i></a></li>
            </ul>
            
            <a href="#" className="sidenav-trigger" data-target="mobile-links">
                <i className="material-icons">view_headline
                </i>
            </a>
      
      <ul className="sidenav" id="mobile-links">
        <li><a href="tel:+16144045481"><i className="material-icons">phone</i>Call or Text</a></li>
        <li><a href="mailto:kthendavid04@gmail.com"><i className="material-icons">mail</i>Email</a></li>
        <li><a href="https://github.com/kthendavid04"><i className="fa fa-github" aria-hidden="true"></i>GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/kthenfishsandwich/"><i class="fab fa-linkedin"></i>Linkedin</a></li>
      </ul>
      </div>
      </nav>
    </div>

    //       href="#home"
    //       onClick={() => handlePageChange('Home')}
    //       // This is a conditional (ternary) operator that checks to see if the current page is "Home"
    //       // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
    //       className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Home
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#about"
    //       onClick={() => handlePageChange('About')}
    //       // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#blog"
    //       onClick={() => handlePageChange('Projects')}
    //       // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Projects
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#contact"
    //       onClick={() => handlePageChange('Contact')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </a>
    //   </li>
    // </ul>
  );
}

export default NavTabs;
