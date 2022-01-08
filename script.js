console.log("Script loaded");

function toggle(){
    const monthlyPrices = Array.from(document.getElementsByName('monthlyPrice'));
    const annualPrices = Array.from(document.getElementsByName('annualPrice')); 
    const checked = document.getElementById('switch').checked;
   
    if(!checked)
    {
        monthlyPrices.forEach(element => {
            element.style.display = 'initial';
         });
 
        annualPrices.forEach(element => {
         element.style.display = 'none';
         });

         return;
    }
    
    monthlyPrices.forEach(element => {
        element.style.display = 'none';
    });

    annualPrices.forEach(element => {
    element.style.display = 'initial';
    });
}
