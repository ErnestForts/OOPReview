import {MobileLibrary} from "./MobileLibrary"
import { MobileP } from "./mobileP"

let mobile1:MobileP = new MobileP("Nokia3210","3210","Nokia",1,"Azul",false,0,55)
let mobile2:MobileP = new MobileP("iPhone3G","3G","Apple",8,"Negro",false,1,195)
let mobile3:MobileP = new MobileP("Samsung Galaxy 10","Galaxy 10","Samsung",16,"Verde",false,1,155)
let mobile4:MobileP = new MobileP("Pocophone","X3","Xiaomi",128,"Amarillo",true,4,459)

let mobileArr:MobileP[] = [mobile1,mobile2,mobile3,mobile4]

let libraryMobile = new MobileLibrary ("MiMobil","Barcelona",mobileArr)

console.log(libraryMobile.getName())
console.log(libraryMobile.getLocation())
console.log(libraryMobile.getMobiles())

libraryMobile.setLocation("China")
libraryMobile.setName("One")

console.log(libraryMobile.getName())
console.log(libraryMobile.getLocation())

libraryMobile.totalPriceCalculation()
