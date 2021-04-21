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
    totalPriceCalculation(){
        let priceTotal : number = 0
        for(let i = 0; i<this.mobiles.length; i++){
            priceTotal = priceTotal + this.mobiles[i].getPrice()
        }
        console.log(priceTotal)
    }
}