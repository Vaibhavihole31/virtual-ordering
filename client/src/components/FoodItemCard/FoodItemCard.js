import React, { useState } from 'react'
import './FoodItemCard.css'

function FoodItemCard({ category, description, imgUrl, price, title }) {

  const [quantity, setQuantity] = useState(1)

  async function addToList() {
    const listObject = {
      name: title,
      price: price,
      quantity: quantity
    }

    const existingList = JSON.parse(localStorage.getItem('list')) || []

    existingList.push(listObject)

    localStorage.setItem('list', JSON.stringify(existingList))
  }

  return (
    <div className="food-item-card mb-5">
      <div className="row">
        <div className="col-md-12">
          <div>
            <img src={imgUrl} class="food-item-card-header-img" />
          </div>

          <h3 className='text-center'>{title}</h3>
          <p className='text-center'>{description || title}</p>
          <div className='price-btn-container'>
            <b>{price}/- Only</b>
            <b>{category}</b>
          </div>
          <div className='quantity-btn-container'>
            <span className='qnt-btn' onClick={(e) => { setQuantity(quantity - 1) }}><i class="fa-sharp fa-solid fa-minus"></i></span>
            <span className='qnt-text'>{quantity}</span>
            <span className='qnt-btn' onClick={(e) => { setQuantity(quantity + 1) }}><i class="fa-solid fa-plus"></i></span>
          </div>

          <div>
            <button type="button" className='text-center btn-add-to-list' onClick={addToList}><b><i class="fa-solid fa-cart-plus"></i> Add To List</b></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodItemCard