const lottieUpper = bodymovin.loadAnimation({
    container: document.getElementById('DwaleUpper'), // Required
    path: 'https://assets3.lottiefiles.com/packages/lf20_e67tr3zc.json', // Required
    renderer: 'svg', // Required
    loop: true,
    autoplay: false, // Optional
    renderConfig: {
        viewBoxOnly: true
    }
})

const lottieLower = bodymovin.loadAnimation({
    container: document.getElementById('DwaleLower'), // Required
    path: 'https://assets9.lottiefiles.com/packages/lf20_dbn86igr.json', // Required
    renderer: 'svg', // Required
    autoplay: false,
    loop: false
})

const dwalePlay = document.querySelector('#DwaleLower');

dwalePlay.addEventListener('click', toggleDwale)

var dwaleIsPlaying = false;
let curr_track = document.querySelector('#track');

function toggleDwale() {
    curr_track.src = "music/Dwale.wav";
    if (!dwaleIsPlaying) {
        lottieLower.setDirection(1);
        lottieLower.play();
        lottieUpper.play();
        curr_track.play();
    }

    if (dwaleIsPlaying) {
        lottieLower.setDirection(-1);
        lottieLower.play();
        lottieUpper.stop();
        curr_track.pause();
    }

    dwaleIsPlaying = !dwaleIsPlaying;

}
