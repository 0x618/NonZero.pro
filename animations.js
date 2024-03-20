let busy = false;
function logoAnimation(text) {
    if (!busy) {
    busy = true;
    event.target.innerHTML = '&lt;/&gt;';
    innerText = ''
    for (let i = 0; i < text.length; i++) {
        setTimeout((e) => {
        innerText += text[i];
        e.innerHTML = '&lt;/' + innerText + '&gt;';
        }, i * 100, event.target);
    }
    setTimeout(() => {
        busy = false;
    }, 600, busy);
    }
}
function logoReset(text) {
    setTimeout((e) => {
        e.target.innerHTML = '&lt;/&gt;';
    }, 500, event);
}