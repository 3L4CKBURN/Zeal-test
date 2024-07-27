import React from 'react';

const Header = () => {
  return (
    <header className="header-area shadow bg-white">
      <div className="container mx-auto">
        <div className="header-top border-b border-gray-200">
          <div className="flex items-center justify-between py-4">
            <a href="index.html" className="logo">
              <img src="assets/img/logo.jpg" className="h-8 w-auto" alt="Logo" />
            </a>
            <div className="hidden lg:flex space-x-4">
              <a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/FacebookLogo.png" alt="Facebook" className="h-6 w-6" /></a>
              <a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/InstagramLogo.png" alt="Instagram" className="h-6 w-6" /></a>
              <a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/TwitterLogo.png" alt="Twitter" className="h-6 w-6" /></a>
              <a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/WhatsappLogo.png" alt="WhatsApp" className="h-6 w-6" /></a>
              <a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/YoutubeLogo.png" alt="YouTube" className="h-6 w-6" /></a>
              <a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/LinkedinLogo.png" alt="LinkedIn" className="h-6 w-6" /></a>
              <a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/PinterestLogo.png" alt="Pinterest" className="h-6 w-6" /></a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="nav-link dropdown-toggle flex items-center space-x-2" id="dropdown09">
                  <img src="assets/img/flag/united-arab-emirates.png" alt="UAE Flag" className="h-4 w-4" /> <span>AED</span> <i className="fa-solid fa-angle-down"></i>
                </button>
                <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <a className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#fr"><img src="assets/img/flag/USD.png" alt="USD" className="h-4 w-4 mr-2 inline-block" />USD</a>
                  <a className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#it"><img src="assets/img/flag/IND.png" alt="INR" className="h-4 w-4 mr-2 inline-block" />INR</a>
                </div>
              </div>
              <a className="nav-link hidden lg:block" href="javascript:void(0);" id="LogIn">
                <img src="assets/img/No_user.png" alt="No User" className="h-6 w-6 mr-2 inline-block" />Login
              </a>
              <div className="relative">
                <button className="nav-link" id="waht-call">
                  <img src="assets/img/Icons/WhtsaapCall.png" alt="WhatsApp Call" className="h-6 w-6" />
                </button>
                <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <a className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100" href="tel:+9719876543210">+971 9876 543 210</a>
                  <a className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100" href="tel:+9719876543211">+971 9876 543 211</a>
                </div>
              </div>
              <button className="navbar-toggler lg:hidden" type="button">
                <i className="fa-solid fa-bars"></i>
                <img className="close-img hidden" src="assets/img/Icons/close.png" alt="Close" />
              </button>
            </div>
          </div>
        </div>
        <div className="main-menu">
          <nav className="navbar navbar-expand-lg lg:fixed-top-onlymob">
            <div className="collapse navbar-collapse justify-center" id="navbarNavAltMarkup">
              <ul className="navbar-nav flex space-x-4">
                <li className="lg:hidden user-account dropdown">
                  <button className="nav-link dropdown-toggle" id="userpic">
                    <i className="fa-duotone fa-user-large"></i> Login
                  </button>
                </li>
                <li className="nav-item">
                  <a href="index.html" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="Tours_grid.html" className="nav-link">Delightful Tours</a>
                </li>
                <li className="nav-item">
                  <a href="Holyday_grid_view.html" className="nav-link">Exciting Holidays</a>
                </li>
                <li className="nav-item">
                  <a href="Hotels_grid_view.html" className="nav-link">Best Hotels</a>
                </li>
                <li className="nav-item">
                  <a href="Customize_holidays.html" className="nav-link">Customize Holidays</a>
                </li>
                <li className="nav-item">
                  <a href="Umrah_grid_view.html" className="nav-link">Umrah For All</a>
                </li>
                <li className="nav-item">
                  <a href="Transfers_grid_view.html" className="nav-link">Transfer</a>
                </li>
                <li className="nav-item">
                  <a href="Special_Deals.html" className="nav-link">Special Deals</a>
                </li>
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink">
                    Visa <i className="fa-solid fa-angle-down"></i>
                  </button>
                  <div className="dropdown-menu bg-white border border-gray-200 rounded-md shadow-lg">
                    <a className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100" href="Visa.html">Global Visa Services</a>
                    <a className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100" href="Visa_Change-.html">Visa Change – UAE</a>
                    <a className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100" href="Visa_review.html">Check Visa Status</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="Traval_Insurance.html" className="nav-link">Insurance</a>
                </li>
                <li className="nav-item">
                  <a href="Forex.html" className="nav-link">Forex</a>
                </li>
                <li className="nav-item dropdown hidden lg:flex">
                  <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink">
                    <i className="fas fa-bars"></i>
                  </button>
                  <div className="dropdown-menu bg-white border border-gray-200 rounded-md shadow-lg">
                    <a className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100" href="About_us.html">About Us</a>
                    <a className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100" href="contact_us.html">Contact Us</a>
                    <a className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100" href="Branches.html">Branches</a>
                    <a className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100" href="blog.html">Blog</a>
                    <a className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-100" href="Careers.html">Careers</a>
                  </div>
                </li>
                <li className="nav-item hidden lg:flex">
                  <a href="About_us.html" className="nav-link">About Us</a>
                </li>
                <li className="nav-item hidden lg:flex">
                  <a href="contact_us.html" className="nav-link">Contact Us</a>
                </li>
                <li className="nav-item hidden lg:flex">
                  <a href="Branches.html" className="nav-link">Branches</a>
                </li>
                <li className="nav-item hidden lg:flex">
                  <a href="blog.html" className="nav-link">Blog</a>
                </li>
                <li className="nav-item hidden lg:flex">
                  <a href="Careers.html" className="nav-link">Careers</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
