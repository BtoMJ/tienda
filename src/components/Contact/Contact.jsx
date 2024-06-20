import './Contact.css';

function Contact(){
    return(
        <div id='contact' className='contact-container'>

            <div className='form-container'>
                <h2>Ponte en contacto con nosotros</h2>
                <p>
                    Cualquier duda que tengas por favor comunícate por medio del 
                    siguiente formulario y con gusto te apoyaremos.
                </p>
                <form className='form-contact'>
                    <input className='input-data input-form' type='text' placeholder='Nombre' required></input>
                    <input className='input-data input-form' type='email' placeholder='Email' required></input>
                    <input className='input-data input-form' type='text' placeholder='Asunto' required></input>
                    <textarea className='textarea-form' placeholder='Mensaje'></textarea>
                    <input className='btn-form' type='submit'></input>
                </form>

            </div>
            <div className='wallpaper-contact'></div>

        </div>
    )
}

export default Contact;