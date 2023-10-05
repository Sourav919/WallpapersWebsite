document.addEventListener("DOMContentLoaded", function () {
    const downloadButtons = document.querySelectorAll(".download-btn");
    let video = document.querySelector("video");

    // Pause the video by default
    video.pause();

    downloadButtons.forEach(button => {
        button.addEventListener("click", async function (event) {
            event.preventDefault(); // Prevent default link behavior
            
            const imgUrl = this.getAttribute("data-img-url");
            const fileName = getFileNameFromURL(imgUrl);

            const response = await fetch(imgUrl);
            const blob = await response.blob();

            // Create a temporary anchor element to trigger the download
            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = fileName;
            downloadLink.click();
            URL.revokeObjectURL(downloadLink.href);
        });
    });

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
});
