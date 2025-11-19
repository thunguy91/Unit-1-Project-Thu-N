import './ContactPage.css'


export default function ContactPage(){
    return(
        <div className='main-container'>
            <main className='main-content'>
                <h2 className='page-title'>
                    Contact
                </h2>
                <div className='contact-main'>
                    <h4>
                        <em>Email:</em>
                    </h4>
                    <address> 
                        radii@email.com
                    </address>
                    <h4>
                        <em>Mailing Address:</em>
                    </h4>
                    <address>
                        Radii <br />
                        PO Box 101 <br />
                        Anytown, PA 12345-6789
                    </address>
                </div>
            </main>
        </div>
    )
};