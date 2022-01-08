const fs = require("fs");
const React = require("react");
const axios = require("axios");
const {logger} = require("@storybook/node-logger");

const CDN_URL = "https://cdn.adventist.org/alps/3/3.9.3";
const STYLES_URL = CDN_URL + "/css/main.css";

// const IMAGES_LIST = [
//     //SVG
//     "/images/icons/o-icon__language.svg",
//     "/images/icons/o-icon__gallery.svg",
//     "/images/icons/o-icon__video.svg",
//     "/images/icons/o-icon__audio.svg",
//     "/images/icons/icon-play.svg",
//     "/images/icons/o-arrow__short--down.svg",
//     "/images/icons/o-arrow--down.svg",
//     "/images/icons/o-arrow__bracket--left.svg",
//     "/images/background-grid.svg",
//
//     //PNG
//     "/images/background-pattern.png",
//     "/images/background-grid.png"
// ];

logger.info("STYLES Data VERSION: " + process.env.ALPS_LIBRARY_STYLES_VERSION +
    "\nSTYLES Data URL: " + STYLES_URL);

axios({
    url: STYLES_URL,
    method: "GET",
    responseType: "blob"
}).then((response) => {
    logger.info("Getting main.css data from CDN finish successfully!")

    fs.writeFile('./src/styles/main/main.css', response.data, (err) => {
        if (err) throw err;
        logger.info('The file has been saved!');
    });

    logger.info("Finish download script!");
}).catch((err) => {
    logger.error("Downloading or saving failed! ERROR: " + err);
})
