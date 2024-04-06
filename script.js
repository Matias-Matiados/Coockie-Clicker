const p = document.getElementById("target");

let clicks = 0;

function score() {
    clicks = clicks +1;
    p.innerHTML = clicks;
}

p.innerHTML = 5;