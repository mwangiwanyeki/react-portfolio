import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/map.png";
import address from "../../img/send.png";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';
const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_cl2wkvg',
            'template_4nyl9lt',
            formRef.current,
            'user_IJvE8xJeSnIQ3bgVDMvhb')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +254 700 010 886
                        </div>
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            contact@mwangiwanyeki.tech
                        </div>
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-icon" />
                            Moi Avenue, CBD Nairobi, Developer Plaza, Kenya.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input type="text" placeholder="Name" name="user_name" /><br />
                        <input type="text" placeholder="Subject" name="user_subject" /><br />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea name="message" cols="30" rows="10" placeholder="Message" />
                        <button>Submit</button>
                        {done && "Message Sent.."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
