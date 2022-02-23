import "../statics/Home.css"
import Products from "./Products"

function Home() {
  const randomStr =()=>{
   let randomString =(Math.random()*100000000).toString()
   return randomString
  }
    return (
        <div className="home">

            <img className="home_image" alt=" loading error" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            <div className="home__container">
                <div className="home_row">
                    <Products title = "Teddy bear, beautiful one"
                    price ={9459.99}
                    rating = {4}
                    key = "qwer"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                    id={randomStr()}
                     />
                      <Products title = "Teddy bear, beautiful one"
                   price ={945555459.99}
                    rating = {4}
                    id={randomStr()}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                     />
                   
                </div>
                <div className="home_row">
                <Products title = "Teddy bear, beautiful one"
                    price ={99.9923556}
                    rating = {4}
                    key = "qweddssdsdro"
                    id={randomStr()}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                     />
                      <Products title = "Teddy bear, beautiful one"
                    price ={99.99}
                    rating = {4}
                    key = "qwerj"
                    id={randomStr()}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                     />
                      <Products title = "Teddy bear, beautiful one"
                    price ={99.99}
                    rating = {4}
                    key = "qwerg"
                    id={randomStr()}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                     />
                      <Products title = "Teddy bear, beautiful one"
                    price ={99.99}
                    rating = {4}
                    key = "qwer99"
                    id={randomStr()}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                     />
                    
                </div>
                <div className="home_row">
                <Products title = "Teddy bear, beautiful one"
                    price ={99.99}
                    rating = {4}
                    key = "qwerjkh"
                    id={randomStr()}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                                      
                    />
                      <Products title = "Teddy bear, beautiful one"
                    price ={99.99}
                    rating = {4}
                    key = "qweruigygffg"
                    id={randomStr()}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                     />
                </div>
                <div className="home_row">
                <Products title = "Teddy bear, beautiful one"
                    price ={99.99}
                    rating = {4}
                    key = "qwer87y78"
                    id={randomStr()}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                     />
                    
                </div>
            </div>


        </div>
    )
}

export default Home;