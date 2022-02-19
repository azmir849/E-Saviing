import React from "react";

function FooterScreen() {
  return (
    <div className='container-fluid'>
      <footer id='footer'>
        <div class='footer-top'>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-sm-4'>
                <div class='companyinfo'>
                  <h2>
                    <span>e</span>-shopper
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='footer-widget'>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-sm-2'>
                <div class='single-widget'>
                  <h2>Service</h2>
                  <ul class=''>
                    <li>
                      <a href='#'>Online Help</a>
                    </li>
                    <li>
                      <a href='#'>Contact Us</a>
                    </li>
                    <li>
                      <a href='#'>Order Status</a>
                    </li>
                    <li>
                      <a href='#'>Change Location</a>
                    </li>
                    <li>
                      <a href='#'>FAQ’s</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-sm-2'>
                <div class='single-widget'>
                  <h2>Quock Shop</h2>
                  <ul class=''>
                    <li>
                      <a href='#'>T-Shirt</a>
                    </li>
                    <li>
                      <a href='#'>Mens</a>
                    </li>
                    <li>
                      <a href='#'>Womens</a>
                    </li>
                    <li>
                      <a href='#'>Gift Cards</a>
                    </li>
                    <li>
                      <a href='#'>Shoes</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-sm-2'>
                <div class='single-widget'>
                  <h2>Policies</h2>
                  <ul class=''>
                    <li>
                      <a href='#'>Terms of Use</a>
                    </li>
                    <li>
                      <a href='#'>Privecy Policy</a>
                    </li>
                    <li>
                      <a href='#'>Refund Policy</a>
                    </li>
                    <li>
                      <a href='#'>Billing System</a>
                    </li>
                    <li>
                      <a href='#'>Ticket System</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-sm-2'>
                <div class='single-widget'>
                  <h2>About Shopper</h2>
                  <ul class=''>
                    <li>
                      <a href='#'>Company Information</a>
                    </li>
                    <li>
                      <a href='#'>Careers</a>
                    </li>
                    <li>
                      <a href='#'>Store Location</a>
                    </li>
                    <li>
                      <a href='#'>Affillate Program</a>
                    </li>
                    <li>
                      <a href='#'>Copyright</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-sm-3 col-sm-offset-1'>
                <div class='single-widget'>
                  <h2>About Shopper</h2>
                  <form action='#' class='searchform'>
                    <input type='text' placeholder='Your email address' />
                    <button type='submit' class='btn btn-default'>
                      <i class='fa fa-arrow-circle-o-right'></i>
                    </button>
                    <p>
                      Get the most recent updates from <br />
                      our site and be updated your self...
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='footer-bottom'>
          <div class='container'>
            <div class='row'>
              <p className='pull-left'>
                <span className='text-muted'>
                  {" "}
                  © Copyright {new Date().getUTCFullYear()} MD.Azmir Hossen (AH
                  Naeem). All rights reserved.
                </span>
              </p>
              <p class='pull-right'>
                Develop by{" "}
                <span>
                  <a target='_blank' href='http://www.themeum.com'>
                    AH Naeem
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterScreen;
