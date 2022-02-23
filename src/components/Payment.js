import React from 'react'
import '../statics/Payment.css'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {Link} from 'react-router-dom'
function Payment() {
    const [{basket,user},dispatch]= useStateValue()
    const placeOrder = ()=>{

    }
    return (
        <div className ="payment">
            <div className='payment_container'>
                <h2>
                    checkout ( {
                        <Link to = '/checkout' style ={{textDecoration:'none'}}>
                            {
                                basket.length > 1 ? basket.length+' items': basket.length +' item'
                            }

                        </Link>
                    })
                </h2>
                <div className ='payment_section'>
                    <div className ='payment_title'>
                        <h3>
                            Delivery Address
                        </h3>
                    </div>
                    <div className ='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 react lane </p>
                        <p>los angles, ca</p>
                    </div>

                </div>
                <div className ='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className ='payment_items'>
                        {basket.map(item =>(
                            <CheckoutProduct
                            id ={item.id}
                            title = {item.title}
                            image ={item.image}
                            price = {item.price}
                            rating ={item.rating}/>
                        ))
                        }
                    </div>
                </div>
                <div className ='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className ='payment_details'>
                        <h3>
                            Cash on delivery 
                        </h3>
                        <h4>
                            Net Payable {Math.round(basket.reduce((sum, current)=>sum+current.price,0)*100)/100
                            }
                        </h4>
                        <button onClick ={placeOrder} className = 'place_order'>
                            <b>Place Order</b>
                        </button>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Payment
