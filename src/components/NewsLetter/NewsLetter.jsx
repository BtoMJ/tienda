import './NewsLetter.css';

function NewsLetter(){
    return(
        <div className='news-letter-container centered'>
            <h2>Newsletter</h2>
            <p>
                Regístrate y recibe por mail promociones y entérate 
                antes de los nuevos productos.
            </p>
            <form className='centered'>
                <input className='input-data' type='email'required ></input>
                <input className='btn' type='submit' value="Registrar"></input>
            </form>
        </div>
    )
}

export default NewsLetter;