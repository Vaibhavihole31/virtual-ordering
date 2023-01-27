import React from 'react'
import './MyList.css'
import axios from 'axios';
import swal from 'sweetalert';
import { myFoodListItems } from './../../utils/myList';
import { virtualUser } from './../../utils/virtualUser';

function MyList() {

   async function placeColdOrder(){
        const response = await axios.post('/orderColdItems',{
            userId: virtualUser,
            items: myFoodListItems,
            tableNumber: localStorage.getItem("tableNumber") || 1,
        })

        // console.log(response.data);

        if(response.data.success){
            await swal("Order Placed",response.data.message, "success" )
            localStorage.removeItem("list")
            window.location.href = "/"
        }
    }

    return (
        <>
            <div>
                <h1 className='text-center heading mb-5'>🍟 MyList</h1>
                {
                    myFoodListItems.map((item, index) => {
                        return (
                            <div className='order-card'>
                                <h4>{item.name}</h4>
                                <b>Quantity: {item.quantity}</b> <b className='mb-2 order-card-price'>₹:{item.price}</b>
                                <img className='order-img' src={item.imgUrl}/>
                            </div>
                        )
                    })
                }
                <div className='text-center'>
                    <button className='btn btn-primary confirm-btn' onClick={placeColdOrder}><b>Confirm Orders</b> <i class="fa-solid fa-circle-check"></i></button>
                </div>
            </div>
        </>
    )
}

export default MyList