import { Link, BrowserRouter } from 'react-router'
import mapWithPin from '../../assets/MapWithPin.jpeg'
import Footer from '../layout/Footer'
import Radii from '../../assets/RADII.png'
import droppin from '../../assets/DropPin.png'


export default function LogIn(){
    
    return(
        <div>
            <main>
            <div className='login-wrapper'>
                {/* <img src={Radii} alt="Radii logo with phrase" className='login-img'/> */}
                <div className='login-img-container'>
                    <img src={droppin} alt="drop-pin icon" className='droppin-img'/>
                    <h1>Radii</h1>
                    <p>Small Circle.</p>
                    <p>Big Discoveries.</p>
                    <p>Powered by curiosity</p>
                </div>
                <form className= 'login-form' onSubmit = {(e) => e.preventDefault()}>
                    <label>Email:</label>
                    <input type="email" name="" id="" />
                    <label>Password:</label>
                    <input type="password" />
                    <button ><Link to = '/home'>Sign In</Link></button> 
                    <h5>Don't have an account? <Link to="/signup"><strong>Sign up</strong>.</Link></h5> 

                </form>
            </div>

            <div className='form-container'>


                
            </div>
            </main>
        </div>
    )
}