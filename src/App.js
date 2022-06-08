import React from "react";
import deluxe_twin_pic1 from "./images/rooms/deluxe_twin/room.jpg";
import deluxe_twin_pic2 from "./images/rooms/deluxe_twin/room_2.jpg";
import deluxe_twin_pic3 from "./images/rooms/deluxe_twin/kitchenette.jpg";
import deluxe_twin_pic4 from "./images/rooms/deluxe_twin/kitchenette_2.jpg";
import deluxe_twin_pic5 from "./images/rooms/deluxe_twin/hallway.jpg";
import deluxe_twin_pic6 from "./images/rooms/deluxe_twin/shower.jpg";
import simple_twin_pic1 from "./images/rooms/simple_twin/room.jpg";
import simple_twin_pic2 from "./images/rooms/simple_twin/entrance.jpg";
import simple_twin_pic3 from "./images/rooms/simple_twin/bathroom.jpg";
import simple_twin_pic4 from "./images/rooms/simple_twin/bathroom_2.jpg";
import simple_twin_pic5 from "./images/rooms/simple_twin/shower.jpg";
import double_room_pic1 from "./images/rooms/Double/room.jpg";
import double_room_pic2 from "./images/rooms/Double/hallway.jpg";
import double_room_pic3 from "./images/rooms/Double/shower.jpg";
import double_room_pic4 from "./images/rooms/Double/shower_2.jpg";
import double_room_pic5 from "./images/rooms/Double/shower_3.jpg";
import triple_room_pic1 from "./images/rooms/Triple/room.jpg";
import triple_room_pic2 from "./images/rooms/Triple/room_2.jpg";
import triple_room_pic3 from "./images/rooms/Triple/room_3.jpg";
import triple_room_pic4 from "./images/rooms/Triple/room_4.jpg";
import ChairIcon from "@mui/icons-material/Chair";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import FloatyBoy from "./components/FloatyBoys.js";
import Navbar from "./components/Navbar.js";
import sampleImage from "./images/slide/hostellux_02.jpg";
import Pricing from "./components/Pricing.js";
import whatsappIcon from "./images/icons/whatsapp.png";
import viberIcon from "./images/icons/viber.png";
import { useTranslation } from "react-i18next";
import entranceImage from "./images/Entrance.jpg";
import RoomCarousel from "./components/RoomCarousel.js";
import { maxHeight } from "@mui/system";

export default function App() {
  const { t } = useTranslation();
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
                <div>
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
                  title={t("floatingSection.title1")}
                  content={t("floatingSection.description1")}
                />
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <FloatyBoy
                  title={t("floatingSection.title2")}
                  content={t("floatingSection.description2")}
                />
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <FloatyBoy
                  title={t("floatingSection.title3")}
                  content={t("floatingSection.description3")}
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
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {t("sectionContent.sectionTitles.rooms")}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  {t("sectionContent.sectionDescription.roomDescription")}
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"></p>
              </div>
              <div className="container flex flex-col md:flex-row px-4 mx-auto">
                <div className="max-w-50-percent">
                  <RoomCarousel
                    roomPicture={[
                      simple_twin_pic1,
                      simple_twin_pic2,
                      simple_twin_pic3,
                      simple_twin_pic4,
                      simple_twin_pic5,
                    ]}
                    title={t("roomContent.simpleTwinTitle")}
                    description={t("roomContent.simpleTwinDescription")}
                  />
                </div>
                <div className="max-w-50-percent">
                  <RoomCarousel
                    roomPicture={[
                      deluxe_twin_pic1,
                      deluxe_twin_pic2,
                      deluxe_twin_pic3,
                      deluxe_twin_pic4,
                      deluxe_twin_pic5,
                      deluxe_twin_pic6,
                    ]}
                    title={t("roomContent.deluxeTwinTitle")}
                    description={t("roomContent.deluxeTwinDescription")}
                  />
                </div>
              </div>
              <div className="container flex flex-col md:flex-row px-4 mx-auto">
                <div className="max-w-50-percent">
                  <RoomCarousel
                    roomPicture={[
                      double_room_pic1,
                      double_room_pic2,
                      double_room_pic3,
                      double_room_pic4,
                      double_room_pic5,
                    ]}
                    title={t("roomContent.doubleRoomTitle")}
                    description={t("roomContent.doubleRoomDescription")}
                  />
                </div>
                <div className="max-w-50-percent">
                  <RoomCarousel
                    roomPicture={[
                      triple_room_pic1,
                      triple_room_pic2,
                      triple_room_pic3,
                      triple_room_pic4,
                    ]}
                    title={t("roomContent.tripleRoomTitle")}
                    description={t("roomContent.tripleRoomDescription")}
                  />
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
                  <Pricing />
                </div>
              </div>
            </div>
          </div>
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
        </section>

        <section
          id="kontaktai"
          className="relative pt-10 pb-40 bg-blueGray-200"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white">
                  <LocalPhoneIcon />
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  ></svg>
                </div>
                <div className="flex justify-center gap-3 items-center m-4">
                  <div className="text-2xl md:text-4xl text-blue-500">
                    {/* TODO: didesni zenkliukai */}
                    {/* TODO: support viewport of 360 icons*/}
                    <a href="tel:+370 696 02030"> +37069602030 </a>
                  </div>
                  <div>
                    <a
                      href="https://wa.me/0037069602030"
                      target="_blank"
                      rel="noreferrer"
                      alt="whatsapp link"
                    >
                      <img src={whatsappIcon} alt="Whatsapp" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://msng.link/o/?0037069602030=vi"
                      target="_blank"
                      rel="noreferrer"
                      alt="viber link"
                    >
                      <img src={viberIcon} alt="Viber" />
                    </a>
                  </div>
                </div>
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
        </section>

        <section id="kaip-rasti" className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <FloatyBoy
                  title={t("sectionContent.sectionTitles.howToFindUs")}
                  content={t(
                    "sectionContent.sectionDescription.howToFindUsDescription"
                  )}
                />
              </div>
              <img
                src={entranceImage}
                alt="entrance"
                style={{ maxHeight: "500px", borderRadius: "10%" }}
              />
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
