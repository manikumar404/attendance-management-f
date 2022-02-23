import React from 'react'
import '../statics/Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider'
function Checkout() {
    const randomStr = () => {
        let randomString = (Math.random() * 100000000).toString()
        return randomString
    }
    const [{ basket, user }, dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout_left">
                <h5>hello, {user ? user.email : "Guest"}</h5>
                <h2 className="checkout_title">
                    Checkout Basket
                    </h2>
                <div>

                    {
                        basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                key={randomStr()}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />

                        ))

                    }

                </div>
            </div>
            <div className="checkout_right">
                <h2 className="checkout_title">
                    Sub Total
                 </h2>
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
