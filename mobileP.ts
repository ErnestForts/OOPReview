export class MobileP{
    private name : string
    private model: string
    private trademark: string
    private sdSize : number
    private color : string
    private is5G : boolean
    private cameraNumber : number
    private price : number

    constructor(name : string, model: string, trademark: string, sdSize : number, color : string, is5G : boolean, cameraNumber : number, price : number){
        this.name = name
        this.model = model
        this.trademark = trademark
        this.sdSize = sdSize
        this.color = color
        this.is5G = is5G
        this.cameraNumber = cameraNumber
        this.price = price
    }

    setName(newName:string){
        this.name = newName
    }
    setModel(newModel:string){
        this.model = newModel
    }
    setTrademark(newTrademark:string){
        this.trademark = newTrademark
    }
    setSDsize(newSDsize:number){
        this.sdSize = newSDsize
    }
    setColor(newColor:string){
        this.color = newColor
    }
    setIs5G(newIs5G:boolean){
        this.is5G = newIs5G
    }
    setCameraNum(newCameraNum:number){
        this.cameraNumber = newCameraNum
    }
    setPrice(newPrice:number){
        this.price = newPrice
    }
    getName():string{
        return this.name
    }
    getModel():string{
        return this.model
    }
    getTrademark():string{
        return this.trademark
    }
    getSDsize():number{
        return this.sdSize
    }
    getColor():string{
        return this.color
    }
    getIs5G():boolean{
        return this.is5G
    }
    getCameraNum():number{
        return this.cameraNumber
    }
    getPrice():number{
        return this.price
    }
    toString(){
        console.log("The caracteristics of the ${this.name} are:" +
                    "\nName : " + this.name,
                    "\nModel : " + this.model,
                    "\nTrademark : " + this.trademark,
                    "\nSD Size : " + this.sdSize,
                    "\nColor : " + this.color,
                    "\n Is 5G : " + this.is5G,
                    "\nNumber of cameras : " + this.cameraNumber)
    }

}
