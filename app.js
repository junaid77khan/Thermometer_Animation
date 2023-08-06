
const thermo = () =>{
    let thermo = document.getElementById('thermo');

    thermo.innerHTML = '&#xf2cb;';
        setTimeout(() => {
            thermo.innerHTML = '&#xf2ca;';
            thermo.style.color = '#f8b627'
        }, 1000);
    
        setTimeout(() => {
            thermo.innerHTML = '&#xf2c9;';
            thermo.style.color = 'orange';
        }, 2000);
    
        setTimeout(() => {
            thermo.innerHTML = '&#xf2c8;';
        }, 3000);
    
        setTimeout(() => {
            thermo.innerHTML = '&#xf2c7;';
            thermo.style.color = '#d63031';
        }, 4000);
}

thermo();

setInterval(() => {
    thermo();
}, 6000);

