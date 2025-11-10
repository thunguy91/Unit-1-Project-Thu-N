import logo from '../../assets/RadiiLogo.png'
import Footer from '../layout/Footer'

export default function LogIn(){
    return(
        <div>
            <img src={logo} alt="" />
            <form action="submit">
                <label>Email:</label>
                <input type="email" name="" id="" />
                <label>Password:</label>
                <input type="password" />
                
            </form>
            <button>Sign In</button>
            <h6>Don't have an account? <a href=""><strong>Sign up</strong>.</a></h6> 
            <Footer/>
        </div>
    )
}