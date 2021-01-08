import { useEffect, useState } from 'react';
import { fectchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationdata, Product } from './types';

function Orders(){
    
    
    const[products, setProducts] = useState<Product[]>([]);
    const[orderLocation, setOrederLocation] = useState<OrderLocationdata>();
    console.log(products)
    useEffect(()=>{
        fectchProducts().then(response  => setProducts(response.data))
                         .catch(error =>   console.log(error));
                       
   },[]);

   return(
       <div className='orders-container'>

           <StepsHeader/>
           <ProductsList products = {products} />
           <OrderLocation onChangeLocation={location => setOrederLocation(location)}/>

       </div>

   );

}

export default Orders;