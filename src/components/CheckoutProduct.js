import React from 'react'
import '../statics/CheckoutProduct.css'
import {useStateValue} from '../StateProvider'

function CheckoutProduct({id,image,title,price,rating}) {
    const [state,dispatch] = useStateValue()
    const removeFromBasket =() =>{
       dispatch({
           type:'REMOVE_FROM_BASKET',
           id:id
       })
   }
    return (
        <div className ='checkoutProduct'>
            <img className='checkoutProduct_image' src={image}/>
            <div className='checkoutProduct_info'>
                <p className ='checkoutProduct_title'>
                    {title}
                </p>
                <p className ='checkoutProduct_price'>
                   <small>$</small>
                   <strong>{price}</strong>
                </p>
                <div className ='checkoutProduct_rating'>
                    {
                        Array(rating).fill().map((_,i)=><span key = {i}>&#11088;</span>)
                    }
                </div>
                <button className = 'removeProduct_button' onClick ={removeFromBasket}>
                Remove From Basket
            </button>
            </div>
           
            
        </div>
    )
}

export default CheckoutProduct
