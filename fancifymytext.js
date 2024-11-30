const element =  document.getElementById('userText');

// Button makes text bigger
document.querySelector('#BiggerBtn').onclick = () => {
    //alert('is this Button wokring?');
    element.style.fontSize = '24pt';
};

document.querySelector('#fancyShmancy').onchange = () => {
    //alert("Alerting you, this is bolding it");
    element.style.fontWeight = 'bold';
    element.style.color = 'blue';
    element.style.textDecoration = 'underline';
};

document.querySelector('#boringBetty').onchange = () => {
    //alert('this is changing back');
    element.style.fontWeight = 'normal';
    element.style.color = 'black';
    element.style.textDecoration = 'none';
};

document.querySelector('#MooBtn').onclick = () => {
    element.style.textTransform = 'uppercase';
    var text = element.value;
    var test = text.split('.');
    element.value = test.join('-Moo');
};
