const init = () => {
    const testButton = document.querySelector('#test-button');
    const divToFill = document.querySelector('#to-be-filled');
    testButton.addEventListener('click', () => {
        divToFill.innerHTML = '';
        const p = document.createElement('p');
        p.innerHTML = 'I am a dynamically created text';
        divToFill.appendChild(p);
    });
};

document.addEventListener('DOMContentLoaded', init);
