import "../statics/Header.css"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import PageviewIcon from '@material-ui/icons/Pageview'
import {Link} from 'react-router-dom'
import {useStateValue} from '../StateProvider'
import {auth} from '../firebase'
const Header = () => {
    const [{basket,user},dispatch]= useStateValue()
   const handleAuthentication = ()=>{
       if(user){
           auth.signOut()
       }
   }
    return (
        <div className="header">
            <div className="header_logo">
                <Link className ='home_link' to ='/'>
                <h1> ONeShoP</h1>
                </Link>
                
            </div>
            <div className="header_search">
                <input className="search" type="text" />
                <PageviewIcon className="search_icon" />

            </div>

            <div className="header_nav">
               <Link to ={!user && '/login'} style={{textDecoration:'none'}}>
               <div className="header_options" onClick = {handleAuthentication}>
                    <span className="opt1">hello, {user? user.email:"guest"}</span>
                    <span className="opt2">{user? 'sign Out':'Sign In'} </span>
                </div>
               </Link>
                <div className="header_options">
                    <span className="opt1">returns</span>
                    <span className="opt2">&amp; order</span>
                </div>
                <div className="header_options">
                    <span className="opt1">your</span>
                    <span className="opt2">prime</span>
                </div>
               <Link to ='/checkout'>
               <div className="shopping_basket">
                    <ShoppingBasketIcon className="basket_icon" />
                    <span className="opt2 basket_count">{basket?.length}</span>
                </div>
               </Link>
            </div>
        </div> 
    )
}

export default Header;