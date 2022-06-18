import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {orderCake, reset} from '../actions/products';
import { Buttons } from './button/Buttons';
import { Card } from './card/Card';




export const HomePage = () => {

   const {numOfCakes, otherCounter} = useSelector(state => state.products);
   const {champions} = useSelector(state=>state.champions);
   const dispatch = useDispatch();



    const test = () =>{
        dispatch(orderCake())
    }

    const resetButton = () =>{
      dispatch(reset())
    }

 

  return (
    <div className='text-center mt-8'>
      <div className='bg-slate-100 text-2xl'>
        <h1 className='mb-2'>amount cakes: {numOfCakes}</h1>
        <h1>counter test: {otherCounter}</h1>
      </div>
       
       <div className='mt-4 grid gap-2 grid-cols-2 m-4'>
          <Buttons name="Order" e={test}/>
          <Buttons name="Reset counter" e={resetButton} />       
       </div>

        { 
            
          champions?.map(champion => (
            <Card 
              key={champion.id} 
              idC={champion.id} 
              nameC={champion.name} 
            />
          ))
      
          
          
        }

        
    </div>
  )
}





