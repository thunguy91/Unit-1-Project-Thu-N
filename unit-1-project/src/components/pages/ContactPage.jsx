import './ContactPage.css'
import Header from "../layout/Header";

export default function ContactPage(){
    return(
        <div>
            <main className='contact-body'>
                <h2 className='page-title'>Contact</h2>
                <div className='contact-main'>
                <h4>Email:</h4>
                <address> radii@email.com</address>
                <h4>Mailing Address:</h4>
                <address>
                Radii <br />
                PO Box 101 <br />
                Anytown, PA 12345-6789
                </address>
                </div>
            </main>
        </div>
    )
}