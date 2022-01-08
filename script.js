const leftArrowKey = 'ArrowLeft';
const rightArrowKey = 'ArrowRight';

function toggle(){
    const monthlyPrices = Array.from(document.getElementsByName('monthlyPrice'));
    const annualPrices = Array.from(document.getElementsByName('annualPrice')); 
    const checkbox = document.getElementById('switch');
    
    if(monthlyPrices[0].style.display === 'initial'){
        checkbox.checked = true;

        annualPrices.forEach(element => {
            element.style.display = 'initial';
        });

        monthlyPrices.forEach(element => {
            element.style.display = 'none';
        });

        return;
    }

    checkbox.checked = false;

    annualPrices.forEach(element => {
        element.style.display = 'none';
    });

    monthlyPrices.forEach(element => {
        element.style.display = 'initial';
    });
}

document.addEventListener('keydown', (event) => {
    if(event.defaultPrevented)
        return;

    if(event.key === leftArrowKey || event.key === rightArrowKey)
        toggle();
})
