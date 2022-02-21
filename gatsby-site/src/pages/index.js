import React from "react"
import { Helmet } from "react-helmet"

import "../styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";

export default function Home() {
  return (
    <>
  <Helmet>
    <meta charset="utf-8" />
    <title>Phamento</title>
    <meta name="description" content="Phamento Bubble-Tee" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no" />

    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/icon.png" />

  </Helmet>

    <main className="container-fluid wrapper p-0">
      <div className="container-fluid navbar-wrapper position-fixed">
        <nav className="container navbar navbar-expand-lg">
          <div className="logo" id="logo-nav">
            <img id="logo-img-nav" src="/phamento_logo.png"/>
            <a className="button d-lg-none" href="#menu">
              <button className="button-phamento" id="button-nav-menu">
                Menu
              </button>
            </a>
          </div>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#hero"
                  className="nav-item nav-link nav-link-active"
                  id="link-hero"
                  >HOME</a
                >
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-item nav-link" id="link-about"
                  >ABOUT</a
                >
              </li>
              <li className="nav-item">
                <a href="#menu" className="nav-item nav-link" id="link-menu">MENU</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-item nav-link" id="link-contact"
                  >CONTACT</a
                >
              </li>
              <li className="nav-item dropdown d-none d-lg-block">
                <a
                  className="nav-link dropdown-toggle justify-content-center"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ENG
                </a>
                <ul className="dropdown-menu" id="language-dropdown" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#" id="language2">GER</a></li>
                </ul>
              </li>
              <li className="nav-item nav-link-language d-xs-block d-lg-none">
                <a href="#" className="nav-item nav-link" id="eng">
                  ENG
                </a>
              </li>
              <li className="nav-item nav-link-language d-xs-block d-lg-none">
                <a href="#" className="nav-item nav-link" id="ger">
                  GER
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <section className="container-fluid section" id="hero">
        <div className="section-content" id="hero-content">
          <header>
            <h1
              className="hero-header"
              id="hero-header-main"
            >
              Good Ass Bubble Tea
            </h1>
            <h3
              className="hero-header"
            >
              <span id="hero-header-sub">This Bubble Tea is really good.</span>
              <br />
              <span id="hero-header-sub-2">No seriously. Try it.</span>
            </h3>
          </header>
          <a className="button" href="#menu"
            ><button className="button-phamento" id="button-hero">Menu</button></a
          >
        </div>
      </section>
      <section className="container-fluid section" id="about">
        <div className="container ps-lg-5 pe-lg-5 flex-column" id="about-content">
          <header>
            <h2 className="content-header" id="about-header">ABOUT</h2>
          </header>
          <div className="d-flex flex-sm-column flex-lg-row justify-content-between" id="about-layout">
            <div className="d-flex justify-content-center w-auto">
              <img src="/tea (1).jpg" alt="bubble tea" className="rounded" id="about-img"/>
            </div>
            <div id="about-content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid section" id="menu">
        <div className="container ps-lg-5 pe-lg-5 flex-column justify-content-center" id="menu-content">
          <header>
            <div className="menu-section">
              <h2 className="content-header menu-header" id="menu-header-drinks">
                DRINKS
              </h2>
              <h3 className="menu-price">
                <span className="menu-size">M</span> &nbsp;
                <span className="price">4,20€</span>
              </h3>
              <h3 className="menu-price price">·</h3>
              <h3 className="menu-price" id="menu-price-l">
                <span className="menu-size">L</span> &nbsp;
                <span className="price">4,80€</span>
              </h3>
            </div>
          </header>
          <div className="menu-grid" id="menu-grid-drinks">
            <div className="menu-grid-col">
              <div className="menu-drinks-type">
                <span id="drinks-milktea">Milchtee</span>
                <hr />
              </div>
              <div id="milktea-1">Schwarz</div>
              <div id="milktea-2">Grün</div>
              <div id="milktea-3">Karamell</div>
            </div>
            <div className="menu-grid-col">
              <div className="menu-drinks-type">
                <span id="drinks-fruittea">Frutchtetee</span>
                <hr />
              </div>
              <div id="fruittea-1">Wassermelone</div>
              <div id="fruittea-2">Zitrone</div>
              <div id="fruittea-3">Mango</div>
              <div id="fruittea-4">Honigmelone</div>
              <div id="fruittea-5">Litschi</div>
              <div id="fruittea-6">Pfirsich</div>
              <div id="fruittea-7">Maracuja</div>
              <div id="fruittea-8">Guave</div>
              <div id="fruittea-9">Apfel</div>
              <div id="fruittea-10">Erdbeer</div>
              <div id="fruittea-11">Himbeer</div>
              <div id="fruittea-12">Kiwi</div>
              <div id="fruittea-13">Ananas</div>
            </div>
            <div className="menu-grid-col">
              <div className="menu-drinks-type">
                <span id="drinks-latte">Latte</span>
                <hr />
              </div>
              <div id="latte-1">Matcha</div>
              <div id="latte-2">Taro</div>
              <div id="latte-3">Kokos</div>
              <div id="latte-4">Schokolade</div>
              <div id="latte-5">Vanille</div>
              <div id="latte-6">Brauner Zucker</div>
              <div id="latte-7">Espresso</div>
            </div>
            <div className="menu-grid-col">
              <div className="menu-drinks-type">
                <span id="drinks-specials">Spezialitaten</span>
                <hr />
              </div>
              <div id="specials-1">Seasalt Cheese</div>
              <div id="specials-2">Brown Sugar Bubble Latte</div>
            </div>
          </div>
          <header>
            <div className="menu-section">
              <h2 className="content-header menu-header" id="menu-header-toppings">
                EXTRA TOPPING
              </h2>
              <h3 className="menu-price"><span className="price">+ 0,50€</span></h3>
            </div>
          </header>
          <div className="menu-grid" id="menu-grid-toppings">
            <div className="menu-grid-col">
              <div className="menu-drinks-type">
                <span id="toppings-klassik">Klassik</span>
                <hr />
              </div>
              <div id="topping-classic-1">Tapioka</div>
            </div>
            <div className="menu-grid-col">
              <div className="menu-drinks-type">
                <span id="toppings-jelly">Jelly</span>
                <hr />
              </div>
              <div id="topping-jelly-1">Kokos</div>
              <div id="topping-jelly-2">Regenbogen</div>
              <div id="topping-jelly-3">Aloe Vera</div>
            </div>
            <div className="menu-grid-col">
              <div className="menu-drinks-type">
                <span id="toppings-boba">Boba</span>
                <hr />
              </div>
              <div id="topping-boba-1">Litschi</div>
              <div id="topping-boba-2">Maracuja</div>
              <div id="topping-boba-3">Joghurt</div>
              <div id="topping-boba-4">Mango</div>
              <div id="topping-boba-5">Erdbeer</div>
              <div id="topping-boba-6">Pfirsich</div>
              <div id="topping-boba-7">Apfel</div>
            </div>
          </div>
          <header>
            <div className="menu-section">
              <h2 className="content-header menu-header" id="menu-header-coffee">
                COFFEE
              </h2>
            </div>
          </header>
          <div className="container-fluid d-flex flex-column" id="menu-grid-coffee">
            <div>
              <div className="menu-drinks-type">
                <span id="coffee-vietnam">Made In Vietnam</span>
                <hr />
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-vietnam-1">Vietnamesischer Kaffee Traditioneller Art</p>
                <p className="price">4,00€</p>
              </div>
            </div>
            <div>
              <div className="menu-drinks-type">
                <span id="coffee-italy">Made In Italy</span>
                <hr />
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-italy-1">Espresso</p>
                <p className="price">2,60€</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-italy-2">Espresso Double</p>
                <p className="price">3,20€</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-italy-3">Kaffee S</p>
                <p className="price">2,80€</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-italy-4">Kaffee M</p>
                <p className="price">3,40€</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-italy-5">Cappuccino</p>
                <p className="price">3,60€</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-italy-6">Latte Macchiato</p>
                <p className="price">3,80€</p>
              </div>
            </div>
            <div>
              <div className="menu-drinks-type">
                <span id="coffee-latte">Hot Latte</span>
                <p className="price float-end">3,40€</p>
                <hr />
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-latte-1">Schokolade</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-latte-2">Vanille</p>
                
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-latte-3">Karamell</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-latte-4">Kokos</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-latte-5">Matcha</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name" id="coffee-latte-6">Taro</p>
              </div>
            </div>
            <div>
              <div className="menu-drinks-type">
                <span id="coffee-biotee">Bio Tee</span>
                <p className="price float-end">2,50€</p>
                <hr />
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name menu-biotee-type" id="coffee-biotee-chai">Chai Tee:</p>
                <p className="biotee-name" id="coffee-biotee-1">Zimt Ingwer</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name menu-biotee-type" id="coffee-biotee-rooibos">Rooibos Tee:</p>
                <p className="biotee-name" id="coffee-biotee-2">Bourbon Vanille</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name menu-biotee-type" id="coffee-biotee-black">Schwarzer Tee:</p>
                <p className="biotee-name" id="coffee-biotee-3">Earl Grey</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name menu-biotee-type" id="coffee-biotee-green">Grüner Tee:</p>
                <p className="biotee-name" id="coffee-biotee-4">Criss Cross</p>
              </div>
              <div className="menu-coffee-item d-flex justify-content-between">
                <p className="menu-coffee-name menu-biotee-type" id="coffee-biotee-herb">Kräutertee Tee:</p>
                <p className="biotee-name" id="coffee-biotee-5">Kamille | Pfefferminze</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid section" id="contact">
        <div className="container-lg ps-lg-5 pe-lg-5 flex-column flex-lg-row justify-content-evenly" id="contact-content">
          <div className="logo justify-content-center">
            <img src="/phamento_logo.png"/>
          </div>
          <div className="flex-grow-1 d-flex flex-row justify-content-evenly">
            <div>
              <h2 className="content-header contact-header" id="contact-header-hours">
                STD
              </h2>
              <h3 className="contact-line">
                <span className="phamento-bold" id="monday">Montag:</span>
                <span id="closed">Abgeschlossen</span>
              </h3>
              <h3 className="contact-line">
                <span className="phamento-bold" id="tuesday">Dienstag:</span> 12pm -
                6pm
              </h3>
              <h3 className="contact-line">
                <span className="phamento-bold" id="wednesday">Mittwoch:</span> 12pm -
                6pm
              </h3>
              <h3 className="contact-line">
                <span className="phamento-bold" id="thursday">Donnerstag:</span> 12pm
                - 6pm
              </h3>
              <h3 className="contact-line">
                <span className="phamento-bold" id="friday">Freitag:</span> 12pm - 6pm
              </h3>
              <h3 className="contact-line">
                <span className="phamento-bold" id="saturday">Samstag:</span> 12pm -
                7pm
              </h3>
              <h3 className="contact-line">
                <span className="phamento-bold" id="sunday">Sonntag:</span> 12pm - 7pm
              </h3>
            </div>
            <div>
              <h2
                className="content-header contact-header"
                id="contact-header-location"
              >
                LAGE
              </h2>
              <h3 className="contact-line phamento-bold">
                Am Strom 66 18119 Rostock
              </h3>
            </div>
          </div>
        </div>
      </section>
      <footer className="container-fluid section" id="footer">
        <div className="section-content" id="footer-content">
          <span id="footer-content-1">©2022 Phamento LLC.</span>
          <br />
          <span id="footer-content-2">Website created by Corbin Edwards</span>
        </div>
      </footer>
    </main>
</>
  )
}
