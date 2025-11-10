import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function ContactPage(){
    return(
        <div>
            <Header/>
            <main>
                <h2>Contact</h2>
                <h4>Email:</h4>
                <address> radii@email.com</address>
                <h4>Mailing Address:</h4>
                <address>
                Radii <br />
                PO Box 101 <br />
                Anytown, PA 12345-6789
                </address>
                

            </main>
            <Footer/>
        </div>
    )
}