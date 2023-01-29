import React, { useState } from 'react'
import './ColdItemCard.css'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'

function ColdItemCard({ category, description, imgUrl, price, title }) {

  const [quantity, setQuantity] = useState(1)

  const setCount = () => {
    if(quantity <= 0) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  }

  async function addToList() {
    const listObject = {
      name: title,
      price: price,
      quantity: quantity,
      imgUrl: imgUrl,
    }

    const existingList = JSON.parse(localStorage.getItem('list')) || []

    existingList.push(listObject)

    localStorage.setItem('list', JSON.stringify(existingList))

    await swal({
      title: "Added to List 🍟",
      icon: "success",
    })

    window.location.reload()
  }

  return (
    <div className="food-item-card mb-5">
      <div className="row">
        <div className="col-md-12">
          <div>
            <img src={imgUrl} class="food-item-card-header-img mb-2" />
          </div>

          <h3 className='text-center'>{title}</h3>
          <p className='text-center'>{description || title}</p>
          <div className='price-btn-container'>
            <b>{price}/- Only</b>
            <b>{category}</b>
          </div>
          <div className='quantity-btn-container'>
            <span className='qnt-btn' onClick={setCount }><i class="fa-sharp fa-solid fa-minus"></i></span>
            <span className='qnt-text'>{quantity}</span>
            <span className='qnt-btn' onClick={(e) => { setQuantity(quantity + 1) }}><i class="fa-solid fa-plus"></i></span>
          </div>

          <div>
            <Link to="/mylist">
            <button type="button" className='text-center btn-add-to-list mb-2' onClick={addToList}><b><i class="fa-solid fa-cart-plus"></i> Add To List</b></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColdItemCard