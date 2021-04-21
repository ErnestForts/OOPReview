import { MobileP } from "./mobileP"

export class MobileLibrary{
    private name : string
    private location : string
    private mobiles : MobileP[]
    private totalPrice : number

    constructor(name:string,location:string,mobiles:MobileP[]){
        this.name = name
        this.location = location
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()
    }

    setName(newName:string){
        this.name = newName
    }
    setLocation(newLocation:string){
        this.location = newLocation
    }
    setMobiles(newMobiles:MobileP[]){
        this.mobiles = newMobiles
    }
    setTotalPrice(newTotalPrice:number){
        this.totalPrice = newTotalPrice
    }
    getName():string{
        return this.name
    }
    getLocation():string{
        return this.location
    }
    getMobiles():MobileP[]{
        return this.mobiles
    }
    getTotalPrice():number{
        return this.totalPrice
    }
    private totalPriceCalculation():number{
        let priceTotal : number = 0
        for(let i = 0; i<this.mobiles.length; i++){
            priceTotal = priceTotal + this.mobiles[i].getPrice()
        }
        return priceTotal
    }
    printLibrary(){
        console.log("This is all my mobiles:")
        for(let i = 0; i<this.mobiles.length; i++){
            console.log(
                    "The caracteristics of the mobile ${this.mobiles[i].getName()} are:" +
                    "\nName : " + this.mobiles[i].getName(),
                    "\nModel : " + this.mobiles[i].getModel(),
                    "\nTrademark : " + this.mobiles[i].getTrademark(),
                    "\nSD Size : " + this.mobiles[i].getSDsize(),
                    "\nColor : " + this.mobiles[i].getColor(),
                    "\nIs 5G : " + this.mobiles[i].getIs5G(),
                    "\nNumber of cameras : " + this.mobiles[i].getCameraNum())
        }
        console.log("Price overall: " + this.totalPrice)
    }
}

let mobile1:MobileP = new MobileP("Nokia3210","3210","Nokia",1,"Azul",false,0,55)
let mobile2:MobileP = new MobileP("iPhone3G","3G","Apple",8,"Negro",false,1,195)
let mobile3:MobileP = new MobileP("Samsung Galaxy 10","Galaxy 10","Samsung",16,"Verde",false,1,155)
let mobile4:MobileP = new MobileP("Pocophone","X3","Xiaomi",128,"Amarillo",true,4,459)

let mobileArr:MobileP[] = [mobile1,mobile2,mobile3,mobile4]

let libraryMobile = new MobileLibrary ("MiMobil","Barcelona",mobileArr)

libraryMobile.printLibrary()