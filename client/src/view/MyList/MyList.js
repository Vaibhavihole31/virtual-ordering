import React from 'react'
import './MyList.css'
import {myFoodListItems} from './../../utils/myList';
import FoodItemCard from '../../components/FoodItemCard/FoodItemCard';

function MyList() {
  return (
   <>
    <div>
        <h1 className='text-center heading' >🍟 MyList</h1>
        {
            myFoodListItems.map((item, index)=>{
                return(
                    <div>
                        <h6>Name: {item.name}</h6>
                        <h6>Quantity: {item.quantity}</h6>
                        <h6>Price: {item.price}</h6>
                        <hr/>
                    </div>
                ) 
            })
        }
       <div className='text-center'>
       <button className='btn btn-primary confirm-btn'><b>Confirm Orders</b> <i class="fa-solid fa-circle-check"></i></button>
       </div>
    </div>
   </>
  )
}

export default MyList