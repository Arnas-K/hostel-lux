import React from "react";
import carousel1 from "./images/slide/[1]_hostellux_01.jpg";
import carousel2 from "./images/slide/[1]_hostellux_02.jpg";
import ChairIcon from "@mui/icons-material/Chair";
import EuroIcon from "@mui/icons-material/Euro";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FloatyBoy from "./components/FloatyBoys.js";
import Navbar from "./components/Navbar.js";
import sampleImage from "./images/sample.jpg";
import Pricing from "./components/Pricing.js";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${sampleImage})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Hostel Lux
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    {t("description.part1")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <FloatyBoy
                  title="Vieta Kauno centre"
                  content="Hostelis yra įsikūręs pačiame Kauno centre, Laisvės alėjoje."
                />
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <FloatyBoy
                  title="Prieinama kaina"
                  content="Kambarių kaina nuo 19EUR"
                />
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <FloatyBoy
                  title="Privatūs kambariai"
                  content="Kambaryje negyvensite su nepažįstamais žmonėmis"
                />
              </div>
            </div>

            <div id="kambariai" className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <ChairIcon />
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  ></svg>
                </div>
                {/* TODO: Kambariai: Simplas, double, advanced, triple  */}
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Kambariai
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Kambariuose gali apsigyventi nuo 1 iki 3 žmonių.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"></p>
              </div>

              <div classNaame="w-full md:w-9/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <Carousel>
                    <div>
                      <img src={carousel1} alt="googoogaga" />
                    </div>
                    <div>
                      <img src={carousel2} alt="awooga" />
                    </div>
                  </Carousel>
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Kambarių nuotraukos
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Kambariai su visais patogumais
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div id="kainos" className="items-center flex flex-wrap">
              <div className="w-full ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <EuroIcon color="primary" />
                  </div>
                  <Pricing />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kontaktai" className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                {/* TODO: Viber, Whatsapp prie telefono
                TODO: Uzsakyti vietoj kontaktu
                TODO: Kaip mus rasti sekcija */}
                <h2 className="text-4xl font-semibold">Kontaktai</h2>
                <p className="text-2xl leading-relaxed m-4 text-blue-500">
                  <a href="tel:+370 696 02030"> +370 696 02030 </a>
                </p>
                <iframe
                  SameSite="Strict"
                  className="w-full h-full"
                  title="Hostelio lokacija"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAzLs8w8yWYOAk48IhJAA9Vw1USlkCTYro
    &q=Hostel+Lux, Kaunas"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
      </main>
    </>
  );
}
