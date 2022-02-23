import '../statics/Products.css'
import React from 'react'
import {useStateValue} from '../StateProvider'

function Products({id, title,image, price, rating }) {
    const randomStr =()=>{
        let randomString =(Math.random()*100000000).toString()
        return randomString
       }
    const [state,dispatch] = useStateValue();
    const Rater = ({rating}) => {
        const rates = [];
        for (let i = 0; i < rating; i++) {
            rates.push(<span>&#11088;</span>)

        }

        return (
            <p>
                {
                    rates.map((values,index)=><span key ={index}>{values}</span>)
                }

            </p>
        )
    };

    const addToBasket = ()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:randomStr(),
                title,
                image,
                price,
                rating,
            }
        })

    }
    return (
        <div className="products">
            <div className="product_info">
                <p className="product_description">{title}
                </p>
                <p className="product_price">
                    <small>$</small>{price}

                </p>
                <div className="product_rating">
                  <Rater rating={rating}/>
                </div>

            </div>
            <div className="img_holder">
                <img className="product_img" src={image} alt="product" />

            </div>

            <button className="add_to_basket_btn" onClick = {addToBasket}><b>Add to basket</b></button>
        </div>
    )
}

export default Products
