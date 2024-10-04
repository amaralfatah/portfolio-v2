document.addEventListener("DOMContentLoaded", function () {
    const toRotate = [
        "Web Developer",
        "Mobile Developer",
        "Full-stack Engineer",
        "Informatics Engineer",
    ];
    const period = 2000;
    let txt = "";
    let loopNum = 0;
    let isDeleting = false;

    function tick() {
        const typewriter = document.getElementById("typewriter");
        if (!typewriter) {
            return;
        }

        const i = loopNum % toRotate.length;
        const fullTxt = toRotate[i];

        txt = isDeleting
            ? fullTxt.substring(0, txt.length - 1)
            : fullTxt.substring(0, txt.length + 1);
        typewriter.innerHTML = `<span class="wrap">${txt}</span>`;

        let delta = 200 - Math.random() * 100;

        if (isDeleting) {
            delta /= 2;
        }

        if (!isDeleting && txt === fullTxt) {
            delta = period;
            isDeleting = true;
        } else if (isDeleting && txt === "") {
            isDeleting = false;
            loopNum++;
            delta = 500;
        }

        setTimeout(tick, delta);
    }

    tick();
});
