import {MobileP} from "./mobileP"

let mobile1:MobileP = new MobileP("Nokia3210","3210","Nokia",1,"Azul",false,0,55)
let mobile2:MobileP = new MobileP("iPhone3G","3G","Apple",8,"Negro",false,1,195)
let mobile3:MobileP = new MobileP("Samsung Galaxy 10","Galaxy 10","Samsung",16,"Verde",false,1,155)

console.log(mobile1,mobile2,mobile3)

mobile1.setIs5G(true)
mobile1.setCameraNum(4)

console.log(mobile1,mobile2,mobile3)

let mobileArr:MobileP[] = [mobile1,mobile2,mobile3]

mobileArr.toString()