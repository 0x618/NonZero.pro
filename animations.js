let logoBusy = false;
let termFired = false;
function logoAnimation(text) {
    if (!logoBusy) {
        logoBusy = true;
        event.target.innerHTML = '&lt;/&gt;';
        innerText = ''
        for (let i = 0; i < text.length; i++) {
            setTimeout((e) => {
                innerText += text[i];
                e.innerHTML = '&lt;/' + innerText + '&gt;';
            }, i * 100, event.target);
        }
        setTimeout(() => {
            logoBusy = false;
        }, 600, logoBusy);
    }
}
function logoReset(text) {
    setTimeout((e) => {
        e.target.innerHTML = '&lt;/&gt;';
    }, 500, event);
}
function terminalAnimation(text) {
    if (!termFired) {
        termFired = true;
        term = document.getElementsByClassName('terminal')[0];
        prefix = term.innerHTML;
        for (let i = 0; i < text.length; i++) {
            setTimeout((term) => {
                prefix += text[i];
                term.innerHTML = prefix;
            }, i * 75, term);
        }
    }
}