
    let video = document.querySelector("video");
    video.pause();
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) 
        {
            video.play();
        }
        else
        {
            video.pause();
        }
    });


