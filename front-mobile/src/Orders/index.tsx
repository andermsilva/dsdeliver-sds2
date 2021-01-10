import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet ,ScrollView, Alert,Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fectchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

 function Orders() {
    
    const [orders,setOrders] = useState<Order[]>([]);
    const [isLoadeng, setIsloading] =useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
     
    const fetchData = ()=>{
      setIsloading(true);
      fectchOrders()
      .then(response =>setOrders(response.data))
      .catch(()=> Alert.alert('Houve um erro ao buscar os pedidos!'))
      .finally(()=> setIsloading(false));   
    }

    useEffect(()=>{
       if(isFocused){
         fetchData();
       }
    },[isFocused] );

    const handleOnPress = (order:Order)=>{
      navigation.navigate('OrderDatails',{

            order
      });
  }
    
  return (
    <>
     <Header/>
    <ScrollView style={styles.container}> 
       {isLoadeng ? (
            <Text>Buscando pedidos...</Text>
       ):(
          orders.map(order => (
            <TouchableWithoutFeedback key={order.id}
            onPress={() =>handleOnPress(order)} >
              
              
               <OrderCard order={order}/>
            </TouchableWithoutFeedback>
           ))
        )}
    </ScrollView>
    </>
  );
          }

const styles = StyleSheet.create({
  container:{
    paddingRight:'5%',
    paddingLeft:'5%',
  }

});

export default Orders;