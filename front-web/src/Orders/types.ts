import { type } from "os"

export type Product ={

    id: number,
    name:string,
    description: string,
    price:number ,
    imageUri:string;

}
export type OrderLocationdata = {
   
    latitude: number,
    longitude: number,
     address: string
}
