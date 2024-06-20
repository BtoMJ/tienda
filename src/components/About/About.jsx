import './About.css';

function About(){
    return(
        <div id='about' className='about-container centered'>
            <h2>Acerca de nosotros</h2>
            <p>
                Somos tu mejor opción de street shoes en línea, 
                con más de 50 modelos a escoger. Como amantes de la 
                cultura proveemos los mejores productos 100% 
                originales que hacen match contigo.
            </p>
            <div className='grid-images'>
                <div className='column-1'>
                    
                </div>
                <div className='column-2'>
                    <div className='sub-column-1'></div>
                    <div className='sub-column-2'></div>
                </div>
                <div className='column-3'>
                    <div className='sub-column-3'></div>
                    <div className='sub-column-4'></div>
                </div>
            </div>
        </div>
    )
}

export default About;