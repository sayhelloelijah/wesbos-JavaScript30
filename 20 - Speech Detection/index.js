document.addEventListener('DOMContentLoaded', () => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    const words = document.querySelector('.words');
    let p = document.createElement('p');

    recognition.interimResults = true;
    recognition.addEventListener('result', (e) => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        console.log(transcript);

        p.textContent = transcript;
        if (e.results[0].isFinal) {
            p = document.createElement('p');
            words.appendChild(p);
        }
    });
    recognition.addEventListener('end', recognition.start);
    recognition.start();
    words.appendChild(p);
});