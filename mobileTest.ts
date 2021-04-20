import {Mobile} from "./mobile"

let mobile1:Mobile = new Mobile("Nokia3210","3210","Nokia",1,"Azul",false,0,55)
let mobile2:Mobile = new Mobile("iPhone3G","3G","Apple",8,"Negro",false,1,195)
let mobile3:Mobile = new Mobile("Samsung Galaxy 10","Galaxy 10","Samsung",16,"Verde",false,1,155)

console.log(mobile1,mobile2,mobile3)

mobile1.is5G = true
mobile1.cameraNumber = 4

