import './SignUpSuccess.css'
import Button from '/src/components/Button/Button.jsx';

export default function SignUpSuccess({ show, onClose }) {
    if (!show) return null;

    return(
        <div className='modal-overlay'>
            <div className='modal-content'>
                <h2>
                    ⭐Successfully signed up!⭐
                </h2>
                <p>
                    Welcome aboard!
                </p>
                <p>
                    Discover and enjoy the journey!
                </p>
                <Button onClick={onClose}>Go explore!</Button> 

            </div>

        </div>
    )
}