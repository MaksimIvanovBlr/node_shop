import {makeAutoObservable} from 'mobx' 


export default class DeviceStore{
    constructor() {
        this._types = [
         {id:1, name: 'Fridges'},
         {id:2, name: 'Smartphones'}
        ]
        this._brands = [
         {id: 1, name: 'Samsung'},
         {id: 2, name: 'Iphone' }
        ]
        this._devices = [
         {id: 1, name: 'Iphone 12', price: 25000, rating:5, img: 'https://yandex.by/images/search?img_url=http%3A%2F%2Faks-store.by%2Fimage%2Fcache%2Fcatalog%2Fiphonevitaliy%2Fiphobe%252012%2Fiphone%252012%2520purple-1200x800.jpeg&lr=157&noreask=1&pos=2&rpt=simage&source=qa&stype=image&text=Apple%20iPhone%2012'},
         {id: 2, name: 'Iphone 12', price: 25000, rating:5, img: 'https://yandex.by/images/search?img_url=http%3A%2F%2Faks-store.by%2Fimage%2Fcache%2Fcatalog%2Fiphonevitaliy%2Fiphobe%252012%2Fiphone%252012%2520purple-1200x800.jpeg&lr=157&noreask=1&pos=2&rpt=simage&source=qa&stype=image&text=Apple%20iPhone%2012'},
         {id: 3, name: 'Iphone 12', price: 25000, rating:5, img: 'https://yandex.by/images/search?img_url=http%3A%2F%2Faks-store.by%2Fimage%2Fcache%2Fcatalog%2Fiphonevitaliy%2Fiphobe%252012%2Fiphone%252012%2520purple-1200x800.jpeg&lr=157&noreask=1&pos=2&rpt=simage&source=qa&stype=image&text=Apple%20iPhone%2012'},
         {id: 4, name: 'Iphone 12', price: 25000, rating:5, img: 'https://yandex.by/images/search?img_url=http%3A%2F%2Faks-store.by%2Fimage%2Fcache%2Fcatalog%2Fiphonevitaliy%2Fiphobe%252012%2Fiphone%252012%2520purple-1200x800.jpeg&lr=157&noreask=1&pos=2&rpt=simage&source=qa&stype=image&text=Apple%20iPhone%2012'},
         {id: 5, name: 'Iphone 12', price: 25000, rating:5, img: 'https://yandex.by/images/search?img_url=http%3A%2F%2Faks-store.by%2Fimage%2Fcache%2Fcatalog%2Fiphonevitaliy%2Fiphobe%252012%2Fiphone%252012%2520purple-1200x800.jpeg&lr=157&noreask=1&pos=2&rpt=simage&source=qa&stype=image&text=Apple%20iPhone%2012'},
         {id: 6, name: 'Iphone 12', price: 25000, rating:5, img: 'https://yandex.by/images/search?img_url=http%3A%2F%2Faks-store.by%2Fimage%2Fcache%2Fcatalog%2Fiphonevitaliy%2Fiphobe%252012%2Fiphone%252012%2520purple-1200x800.jpeg&lr=157&noreask=1&pos=2&rpt=simage&source=qa&stype=image&text=Apple%20iPhone%2012'},
        ]
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



     get types(){
        return this._types
     }

     get brands(){
        return this._brands
     }
     get device(){
        return this._devices
     }
}
