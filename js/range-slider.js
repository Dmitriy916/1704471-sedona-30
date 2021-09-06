var rangeSlider = document.getElementById('range-slider');

if(rangeSlider){
noUiSlider.create(rangeSlider, {
    start: [0, 3000],
    connect: true,
    step: 1,
    range: {
        'min': [0],
        'max': [3000]
    }
});
}
