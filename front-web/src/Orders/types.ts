import { type } from "os"
import { NumericLiteral } from "typescript"

export type Product ={

    id: number,
    name:string,
    description: string,
    price:number ,
    imageUri:string;

}
export type OrderLocationData = {
   
    latitude: number,
    longitude: number,
     address: string
}


type ProductId ={
    id:Number;

}

export type OrderPayload = {
    products: ProductId[];
}& OrderLocationData;