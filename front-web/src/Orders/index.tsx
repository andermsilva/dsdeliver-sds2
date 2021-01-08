import {toast} from 'react-toastify';
import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import { fectchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import { OrderLocationData, Product } from './types';
import { chekIsSelected } from './helpers';
import StepsHeader from './StepsHeader';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import './styles.css';


function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrederLocation] = useState<OrderLocationData>();

    const totalPrice = selectedProducts.reduce((sum,item)=>{
        return sum+item.price
    },0);

    console.log(products)
    useEffect(() => {
        fectchProducts().then(response => setProducts(response.data))
            .catch(() => {
                toast.warning('Erro ao carregar produtos');
            });

    }, []);


    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = chekIsSelected(selectedProducts,product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }
    
    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
         
           saveOrder(payload).then((response) => {
             toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}` );
             setSelectedProducts([]);
                           
             toast.error(`Endereço: ${response.data.address}` );
             setSelectedProducts([]);
           })
             .catch(() => {
               toast.warning('Erro ao enviar pedido');
             })
         
       }


    return (
        <>

            <div className='orders-container'>
                <StepsHeader />
                <ProductsList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation onChangeLocation={location => setOrederLocation(location)} />

                <OrderSummary 
                amount={selectedProducts.length} 
                totalPrice={totalPrice} 
                onSubmit={handleSubmit}
                />
                
            </div>
            <Footer />
        </>

    );

}

export default Orders;