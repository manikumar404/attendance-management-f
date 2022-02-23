import React from 'react'
import '../statics/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../StateProvider'
import {useHistory} from 'react-router-dom'
function Subtotal() {
    const history = useHistory()
    const [{basket},dispatch] = useStateValue()
    let total = 0;
    basket.forEach(item => {
        total = item.price+total
        
    });
    return (
        <div className = 'subtotal'>
            <CurrencyFormat
            renderText = {(value)=>(
                <>
                    <p>
                        Subtotal ( { basket.length > 1 ? basket.length+' items': basket.length +' item'} ): <strong>{value}</strong>
                    </p>
                    <small className ='subtotal_gift'>
                        <input type = 'checkbox'/>This order
                        contains gift   
                    </small>
                    <button onClick = {
                        e=>history.push('/payment')
                    }>
                        Proceed to checkout
                    </button>
                </>
            )

            }
            decimalScale = {2}
            value ={total}
            displayType ={'text'}
            thousandSeparator ={true}
            prefix ={'$'}
            />
        </div>
    )
}

export default Subtotal
