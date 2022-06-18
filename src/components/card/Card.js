import React from 'react'
import { Buttons } from '../button/Buttons'
import { BuyChamp } from '../../actions/champion'
import { useDispatch, useSelector } from 'react-redux';


export const Card = ({idC, nameC}) => {

  const {champions} = useSelector(state=>state.champions);
  const dispatch = useDispatch();

  const BuyingChamp = () =>{
   console.log('entre')
   dispatch(BuyChamp(champions[0].id)) //revisar esto
  }

  
  return (
    
      
    <div className='bg-slate-100 text-2xl mb-4'>
        <h1 className='mb-2'>id: {idC}</h1>
        <h1>name: {nameC}</h1> 
        <Buttons name="comprar" e={BuyingChamp}/>
      </div>
  )
}
