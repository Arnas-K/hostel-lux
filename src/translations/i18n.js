import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "lt",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Best place to stay in Kaunas centre",
          },
          navbar: {
            rooms: "Rooms",
            prices: "Prices",
            contacts: "Contacts",
            location: "How to find us",
          },
          floatingSection: {
            title1: "Located in the centre of Kaunas",
            title2: "Affordable prices",
            title3: "Private rooms",
            description1:
              "The hostel is located in the heart of Kaunas, on the street of Laisvės alėja.",
            description2: "Prices of rooms from 20EUR.",
            description3: "You will not share the room with strangers.",
          },

          sectionContent: {
            sectionTitles: {
              rooms: "Rooms",
              prices: "Prices",
              howToFindUs: "How to find us",
            },
            sectionDescription: {
              roomDescription: "The rooms can accommodate 1-3 people.",
              pricesDescription: "Best prices in Kaunas.",
              onePersonPrice: "1 person",
              twoPersonPrice: "2 people",
              threePersonPrice: "3 people",
              forOneNight: "per night",
              howToFindUsDescription:
                "When arriving by car, please leave your car in A.Mickevičiaus street, closer to Laisvės alėja Parking is paid (I-V from 8 am to 8 pm 2,00 EUR/hour) Walk along Laisvės alėja from A.Mickevičiaus street towards S.Daukanto street (the cathedral remains behind). After 60 m, on the right-hand side, there is an entrance to the courtyard (alley), go into it. Just inside the entrance, there is a brown door on the left, go through it and go up to the second floor.",
            },
          },
          roomContent: {
            simpleTwinTitle: "Simple twin room",
            deluxeTwinTitle: "Deluxe twin room",
            doubleRoomTitle: "Double room",
            tripleRoomTitle: "Triple room",
            simpleTwinDescription:
              "This twin room features a electric kettle, toaster and microwave.",
            deluxeTwinDescription:
              "This room includes a carpet, table and chairs. Bathroom facilities are shared.",
            doubleRoomDescription:
              "Classically decorated room with high ceilings and a view of the Laisves Avenue. There is a table with chairs, as well as bathroom facilities that are shared between two rooms. There is possibility to use extra bed in this room.",
            tripleRoomDescription:
              "Carpeted room with table and chairs. The bathroom shared with the other triple room is in the hall.",
          },
        },
      },

      lt: {
        translation: {
          description: {
            part1: "Geriausia vieta nakvynei Kauno centre",
          },
          navbar: {
            rooms: "Kambariai",
            prices: "Kainos",
            contacts: "Kontaktai",
            location: "Kaip mus rasti",
          },
          floatingSection: {
            title1: "Vieta Kauno centre",
            title2: "Prieinama kaina",
            title3: "Privatūs kambariai",
            description1:
              "Hostelis yra įsikūręs pačiame Kauno centre, Laisvės alėjoje.",
            description2: "Kambarių kaina nuo 20EUR",
            description3: "Kambaryje negyvensite su nepažįstamais žmonėmis",
          },

          sectionContent: {
            sectionTitles: {
              rooms: "Kambariai",
              prices: "Kainos",
              howToFindUs: "Kaip mus rasti",
            },
            sectionDescription: {
              roomDescription:
                "Kambariuose gali apsigyventi nuo 1 iki 3 žmonių.",
              pricesDescription: "Geriausios kainos Kaune",
              onePersonPrice: "1 asmuo",
              twoPersonPrice: "2 asmenys",
              threePersonPrice: "3 asmenys",
              forOneNight: "už naktį",
              howToFindUsDescription:
                "Atvykstant automobiliu mašiną palikite A.Mickevičiaus gatvėje, arčiau Laisvės alėjos Parkavimas mokamas ( I-V nuo 8 val. iki 20 val. 2,00 EUR/val.) Eikite Laisvės alėja nuo A.Mickevičiaus gatvės link S.Daukanto gatvės (soboras lieka už nugaros). Už 60 m, dešinėje pusėje yra įėjimas į kiemą (broma), eikte į jį. Pačiame įėjime, kairėje rudos durys, užeikite pro jas ir pakilkite į antrą aukštą.",
            },
          },
          roomContent: {
            simpleTwinTitle: "Dviejų lovų numeris",
            deluxeTwinTitle: "Ištaigingas dviejų lovų numeris",
            doubleRoomTitle: "Dvivietis numeris",
            tripleRoomTitle: "Trivietis numeris",
            simpleTwinDescription:
              "Šiame dviejų lovų numeryje yra elektrinis virdulys, skrudintuvas ir mikrobangų krosnelė.",
            deluxeTwinDescription:
              "Šiame numeryje grindys išklotos kilimine danga, yra stalas su kėdėmis. Vonios kambarys - bendras.",
            doubleRoomDescription:
              "Šiame klasikinio stiliaus numeryje su aukštomis lubomis pastatytas stalas su kėdėmis, o pro langus atsiveria Laisvės alėjos vaizdai. Vonios kambariu dalinasi dviejų numerių svečiai. Numeryje galima pristatyti papildomą lovą.",
            tripleRoomDescription:
              "Šiame numeryje su kilimine danga išklotomis grindimis pastatytas stalas su kėdėmis. Koridoriuje įrengtu vonios kambariu naudojasi dar vieno triviečio numerio svečiai.",
          },
        },
      },
    },
  });

export default i18n;
