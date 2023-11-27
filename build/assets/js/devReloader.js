/*******************************************************************************
 * Copyright (c) 2023 Battle Road Consulting. All rights reserved.
 *******************************************************************************/

if (window.location.hostname === "localhost") {
    var devReloaderScript = document.createElement("script");
    devReloaderScript.src = "//localhost:35729/livereload.js";
    document.body.appendChild(devReloaderScript);
}
