var init = function () {
    var testButton = document.querySelector('#test-button');
    var divToFill = document.querySelector('#to-be-filled');
    testButton.addEventListener('click', function () {
        divToFill.innerHTML = '';
        var p = document.createElement('p');
        p.innerHTML = 'I am a dynamically created text';
        divToFill.appendChild(p);
    });
};
document.addEventListener('DOMContentLoaded', init);
