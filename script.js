
    let video = document.querySelector("video");

    // Pause the video by default
    video.pause();

    
    // Detect scroll event
    window.addEventListener("scroll", function () {
        // Play the video when the user has scrolled down by a certain amount
        if (window.scrollY > 100) { // Adjust the value as needed
            video.play();
        } else {
            video.pause();
        }
    });

    function getFileNameFromURL(url) {
        const parts = url.split("/");
        return parts[parts.length - 1];
    }

