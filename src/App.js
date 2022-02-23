import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Login from './components/Login'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {useEffect} from 'react'
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import Payment from './components/Payment'
function App() {
  const [{state},dispatch] = useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log('the  auth user is ',authUser)
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })

  },[])
  return (
    <Router>
      <Switch>
        <Route path ='/login'>
          <Login/>
        </Route>
      <Route path ='/checkout'>
       <Header />
        <Checkout/>
       </Route>
       <Route path='/payment'>
       <Header />
        <Payment/>
       </Route>
       <Route path ='/'>
       <Header />
        <Home />
       </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
