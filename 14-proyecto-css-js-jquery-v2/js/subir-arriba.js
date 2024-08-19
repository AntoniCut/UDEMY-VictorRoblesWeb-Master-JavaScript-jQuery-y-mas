//  ******************************************
//  **********  js/subir-arriba.js  **********
//  ******************************************

$(document).ready(function () {

    $(".subir").click(function (e) {
        
        e.preventDefault();
        
        let startY = window.pageYOffset;
        let targetY = 0;
        let distance = startY - targetY;
        let duration = 500;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let run = ease(timeElapsed, startY, -distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    });

});











