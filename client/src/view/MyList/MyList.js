import React from 'react'
import './MyList.css'
import { myFoodListItems } from './../../utils/myList';

function MyList() {
    return (
        <>
            <div>
                <h1 className='text-center heading mb-5'>🍟 MyList</h1>
                {
                    myFoodListItems.map((item, index) => {
                        return (
                            <div className='subject-card'>
                                <h4>{item.name}</h4>
                                <h6>Quantity: {item.quantity}</h6>
                                <h6 className='mb-2'>₹:{item.price}</h6>
                                <img className='order-img' src={item.imgUrl}/>
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