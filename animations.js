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
async function terminalAnimation(text) {
    if (!termFired) {
        termFired = true;
        const term = document.getElementsByClassName('terminal')[0];
        let prefix = term.innerHTML;

        // Return a promise that resolves when the last timeout runs
        return new Promise(resolve => {
            for (let i = 0; i < text.length; i++) {
                setTimeout(() => {
                    prefix += text[i];
                    term.innerHTML = prefix;
                    // resolve when the final character has been written, after 75ms delay
                    if (i === text.length - 1) {
                        setTimeout(resolve, 500);
                    }
                }, i * 75);
            }
        });
    }

    // If the animation already fired, resolve immediately
    return Promise.resolve();
}