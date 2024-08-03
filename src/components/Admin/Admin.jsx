import { Formik } from 'formik';
import logo from '../../assets/LogoBco.png';
import './Admin.css';

function Login(){
    return(
        <div className='admin-container centered'>
            <div className='form-container'>
                <Formik className="form"
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} className='form'> 
                        <img src={logo} alt='Logo Blanco' />
                        <h1>Administración</h1>
                        <input
                            type="email"
                            name="email"
                            className="field"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Email"
                            />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            // className='input-form'
                            className="field"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Contraseña"
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Entrar
                        </button>
                        
                    </form>
                )}
                </Formik>

            </div>
        </div>
    )
}

export default Login;