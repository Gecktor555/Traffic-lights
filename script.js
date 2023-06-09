/*
const btnNode = document.querySelector('.js-btn');
const trafficLightNode = document.querySelector('.js-traffic-light');

initLight(trafficLightNode);

btnNode.addEventListener('click', function(){  
    switchLight(trafficLightNode);
});
*/

const lights = {
    red:'red',
    yellow0:'yellow',
    green:'green',
    yellow1:'yellow1'
};
const classesByLight = {
    [lights.red]:'traffic-light_red',
    [lights.yellow0]:'traffic-light_yellow-0',
    [lights.green]:'traffic-light_green',
    [lights.yellow1]:'traffic-light_yellow-1',
}
const nextLightByLight = {
    /*
    [lights.red]:lights.green,
    [lights.green]:lights.yellow,
    [lights.yellow]:lights.red,
    */
    
    [lights.red]:lights.yellow0,
    [lights.yellow0]:lights.green,
    [lights.green]:lights.yellow1,
    [lights.yellow1]:lights.red,
    
}

let currentLight = lights.red;

function switchLight(node) {
    const currentClass = classesByLight[currentLight];
    const nextLight = nextLightByLight[currentLight];
    const nextClass = classesByLight[nextLight];
    currentLight = nextLightByLight[currentLight];
    node.classList.replace(currentClass, nextClass);
    console.log(currentLight);
    
}

function initLight(node) {
    node.classList.add(classesByLight[currentLight]);
}

const btnNode = document.querySelector('.js-btn');
const trafficLightNode = document.querySelector('.js-traffic-light');

initLight(trafficLightNode);

btnNode.addEventListener('click', function() {
    switchLight(trafficLightNode);
});





