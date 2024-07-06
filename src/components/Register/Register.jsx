import { Form, Field, ErrorMessage, Formik } from 'formik';
import logo from '../../assets/LogoBco.png';
import './Register.css';

function Register(){
    return(
        <div className='register-container centered'>
            <div className='form-container'>
                <Formik className="form"
                    initialValues={{ name: '',lastname:'', email: '', password: '' }}
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
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className='form'> 
                    <img src={logo} alt='Logo Blanco' />
                    <h1>Registro</h1>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="name"
                        className='input-form'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        />
                    {errors.name && touched.name && errors.name}
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="lastname"
                        className='input-form'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        />
                    {errors.lastname && touched.lastname && errors.lastname}
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className='input-form'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        />
                    {errors.email && touched.email && errors.email}
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        className='input-form'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                        Registrar
                    </button>
                   
                </form>
                )}
                </Formik>

            </div>
        </div>
    )
}

export default Register;