import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FoodItemCard from '../../components/FoodItemCard/FoodItemCard';
import { loginRequired } from '../../utils/loginRequired';
import homePageImg from './home-page-icecream.jpg'
import './Home.css'

function Home() {

  const [searchText, setSearchText] = useState("");
  const [currentFoodItems, setAllFoodItems] = useState([])

  async function fetchAllItems() {
    const response = await axios.get('/allFoodItems')
    setAllFoodItems(response.data.data)
  }

  async function fetchSpecificItems() {
    const response = await axios.get(`/foodItems?title=${searchText}`)
    setAllFoodItems(response.data.data)
  }
  useEffect(() => {
    if (searchText.length > 0) {
      fetchSpecificItems()
    }
    else {
      fetchAllItems()
    }
  }, [searchText])

  useEffect(() => {
    loginRequired()
  }, [])

  return (
    <>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 item'>
             <h1 className='text-center'>Ice cream is perfection!</h1>

             <h4 className='text-center mt-5'>And so are all the delicious recipes that contain it. Start here with the Perfect Affogato!</h4>
             
             <div className='text-center mt-5'>
             <button className="flavor-btn text-center"><b>Try Our Flavor 🍧</b></button>
             </div>
          </div>
          <div className='col-md-6'>
            <div> 
              <img className='home-page-img' src={homePageImg}/>
            </div>
          </div>
        </div>
      </div>
      
      <div className='search-container text-center mt-5'>
        <input type="text" placeholder='Search' className='input-search search-box'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} />
      </div>

      <div className='food-items-result'>
        <div class="row">
          {
            currentFoodItems?.map((foodItem, index) => {
              return (<FoodItemCard description={foodItem.description} category={foodItem.category} title={foodItem.title} price={foodItem.price} imgUrl={foodItem.imgUrl} key={index} />)
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home