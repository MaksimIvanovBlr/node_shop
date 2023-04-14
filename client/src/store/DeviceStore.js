import {makeAutoObservable} from 'mobx' 


export default class DeviceStore{
    constructor() {
        this._types = [
         // {id:1, name: 'Fridges'},
         // {id:2, name: 'Smartphones'},
         // {id:3, name: 'Smart'},
         // {id:4, name: 'phones'}
        ]
        this._brands = [
         // {id: 1, name: 'Samsung'},
         // {id: 2, name: 'Iphone' }
        ]
        this._devices = [
         // {id: 1, name: 'Iphone 12', price: 25000, rating:5, img: 'https://akket.com/wp-content/uploads/2017/04/iPhone-SE-display-1.jpg'},
         // {id: 2, name: 'Iphone 12', price: 25000, rating:5, img: 'https://akket.com/wp-content/uploads/2017/04/iPhone-SE-display-1.jpg'},
         // {id: 3, name: 'Iphone 12', price: 25000, rating:5, img: 'https://akket.com/wp-content/uploads/2017/04/iPhone-SE-display-1.jpg'},
         // {id: 4, name: 'Iphone 12', price: 25000, rating:5, img: 'https://akket.com/wp-content/uploads/2017/04/iPhone-SE-display-1.jpg'},
         // {id: 5, name: 'Iphone 12', price: 25000, rating:5, img: 'https://akket.com/wp-content/uploads/2017/04/iPhone-SE-display-1.jpg'},
         // {id: 6, name: 'Iphone 12', price: 25000, rating:5, img: 'https://akket.com/wp-content/uploads/2017/04/iPhone-SE-display-1.jpg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
     setBreands(brands){
        this._brands = brands
     }
     setDevices(devices){
        this._devices = devices
     }

     setSelectedType(type){
      this._selectedType = type
     }

     setSelectedBrand(brand){
      this._selectedBrand = brand
     }



     get types(){
        return this._types
     }

     get brands(){
        return this._brands
     }
     get devices(){
        return this._devices
     }

     get selectedType(){
      return this._selectedType
     }

     get selectedBrand(){
      return this._selectedBrand 
     }
}
