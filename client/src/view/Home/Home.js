
import homePageImg from './home-page-icecream.jpg'
import './Home.css'

function Home() {
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
    
    </>
  )
}

export default Home