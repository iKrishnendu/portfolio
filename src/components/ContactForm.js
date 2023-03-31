import React, { useRef} from 'react'
import './ContactForm.css'

function ContactForm() {


    const fullNameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef =  useRef(null)

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            Name: fullNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        alert("tadaaa !  \n\n" + JSON.stringify(data) + "\n\n Your data 😎")
    }

    return (
        <>

        <h1 className='head'>Contact Me</h1>

        <div  className="container">
            
            <form onSubmit={handleSubmit} className="form">
                <br/>
                <div className="name">
                    
                    <label for="fullName" id="nameLabel">Full Name</label>
                    <input
                     
                        type="text" 
                        id="fullName" 
                        name="fullName"
                        className="fullName" 
                        placeholder="Enter Your Name.."
                        ref={fullNameRef} 
                        tabindex="1" 
                    />
                    
                </div>

                <div className='email-div'>
                    <label for="email">Email</label>
                    <input 
                    type="email" 
                    name="email"
                    id="email"
                    className="email"
                    placeholder="example@corp.com"
                    ref={emailRef}
                    tabindex="3" 
                    />
                </div>
                <div className='message--div'>
                    <label for="message">Message</label>
                    <textarea 
                    placeholder="Start typing..." 
                    className="message" 
                    name="message"
                    ref={messageRef}
                    >
                    </textarea>
                </div>
                <button type="submit" className="send">Send</button>
            </form>
        </div>
        </>
    )
}

export default ContactForm