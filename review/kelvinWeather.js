//A javacript project to perform temperture conversions
const kelvin=593;//temperature stored in kelvin and 293 assigned as constant variable
const celsius =kelvin-273;//converts kelvin to celsius
let Fahrenheit = celsius *(9/5) + 32;//calculate Fahrenheit
Fahrenheit = Math.floor(Fahrenheit);//round down 2dps
console.log(`${kelvin} Kelvin is about ${Fahrenheit} degrees Fahrenheit.`)

 let newton=celsius*(33/100)//converting temperature in celsius to Newton
 newton=Math.floor(newton)//round down to 2dps
 console.log(`${celsius} degree celsius is about ${newton} degrees newton.`);

