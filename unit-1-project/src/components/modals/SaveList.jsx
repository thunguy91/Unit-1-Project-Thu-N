import Button from '/src/components/Button/Button.jsx';
import './SaveList.css'

export default function SaveList({onClose}){

    return(
        <div className='modal-overlay' onClick={onClose}>
            <div className='save-modal' onClick={e => e.stopPropagation()}>
                <h3>
                    Your list is saved!
                </h3>
                <p>✅️</p>
                <Button onClick={onClose}>Return</Button> 
            </div>
        </div>
    )
}