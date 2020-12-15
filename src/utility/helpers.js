export const typingAnimation = (setState, sentences, delay) => {
    let text = '';
    let loopNum = 0;
    let isDeleting = false;

    function tick() {
        let duration = 200 - Math.random() * 100;
        let i = loopNum % sentences.length;
        let currentSentence = sentences[i];

        if (isDeleting) {
            text = currentSentence.substring(0, (text.length - 1));
        } else {
            text = currentSentence.substring(0, text.length + 1);
        }
        setState((prev) => ({ ...prev, intro: text }));;

        if (!isDeleting && text === currentSentence) {
            duration = delay;
            isDeleting = true;
        } else if (isDeleting && text === '') {
            isDeleting = false;
            loopNum++;
            duration = 500;
        }
        return setTimeout(() => { tick() }, duration);
    }
    return tick();
}