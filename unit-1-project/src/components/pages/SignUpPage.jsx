import logo from '../../assets/RadiiLogo.png'

export default function SignUp(){
    return(
        <div>
            <img src={logo} alt="Radii Logo" />
            <div>
                <form action="submit">
                    <label>Name:</label>
                    <input type="text" name="" id="" />
                    <label>Email:</label>
                    <input type="email" name="" id="" />
                    <label>Password:</label>
                    <input type="password" name="" id="" />
                    <label>Confirm Password:</label>
                    <input type="password" name="" id="" />
                </form>
                <button>Sign Up</button>
                <h6>Already have an account? <a href=""><strong>Log in</strong>.</a></h6>            </div>
        </div>
    )
}