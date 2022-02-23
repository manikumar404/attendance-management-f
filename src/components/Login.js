import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import '../statics/Login.css'
import {auth} from '../firebase'

function Login() {
    const history = useHistory()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signIn = e =>{
        e.preventDefault()
        auth.
        signInWithEmailAndPassword(email,password)
        .then(auth =>{
            if(auth){
                history.push('/')
               //alert("success!")
            }
        }).catch(error => alert(error.message))
         
    }
    const register = e =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.push('/')
               //alert("success!")
            }
           
        }).catch(error =>alert(error.message))
         
    }
    return (
        <div className='login'>
          <div>
          <Link to='/' style={{ textDecoration: 'none' }}>
           <div className="header_logo">
                <h1> ONeShoP</h1>                
            </div>
           </Link>
           <div className='login_container'>
               <h2>sign-in</h2>
               <form>
                   <h5>E-Mail</h5>
                   <input type = 'text' value = {email} 
                   onChange = {e => setEmail(e.target.value)
                   }
                   />
                   <h5>password</h5>
                   <input type ='password' value ={password} 
                   onChange ={e => setPassword(e.target.value)}
                   />
                   <br/>
                   <button className="login_btn" type ='submit'
                    onClick={signIn}>
                        Sign In
                    </button>
                    <p>
                   by signing in, you agree the terms<br/>s and 
                   conditions of oneshop 
               </p>
               <button className ='signin_btn'
               onClick = {register}
               >
                   create an account
               </button>

               </form>
           </div>
          </div>
        </div>
    )
}

export default Login
