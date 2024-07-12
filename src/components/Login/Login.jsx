import React, { useState } from 'react';
import { useLocation } from "wouter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import {
    getUserId,
    userForgotPass,
    userLogin,
} from '../../redux/users/userActions';
import logo from '../../assets/LogoBco.png';

import './Login.css';

function Login() {
  const dispatch = useDispatch();
  const [logeado, setLogeado] = useState({
    msg: "",
    state: false,
  });
  const [user, setUser] = useState();
  const [mail, setMail] = useState({ mail: "" });
  const [forgot, setForgot] = useState({
    msg: "",
    auth: false,
  });
  const [acc, setAcc] = useState(0);
  const [location, setLocation] = useLocation();

  const toastId = React.useRef(null);

  const notify = () => {
    toast.success("¡¡ Bienvenido !!", { position: "bottom-center"});
  } 

  const notifyWarn = ( msg ) => {
    // toast.warn( msg , { position: "bottom-center"});
    if(! toast.isActive(toastId.current)) {
      toastId.current = toast.warn(msg,{ position: "bottom-center"});
    }
  } 
  

  const forgotClick = async () => {
    await userForgotPass(mail);
    console.log("esta es la data del user ", user);
    dispatch(getUserId(user));
    localStorage.setItem("userId", user);
    setForgot({
      msg: "Se ha enviado un correo electrónico para seguir con la recuperación. Por favor revisa la casilla de spam ",
      auth: true,
    });
  };
  return (
    <div className="login-container centered">
      <div className="form-container">
      
        <Formik 
          className="form"
          initialValues={{
            mail: "",
            password: "",
          }}
          onSubmit={async (body) => {

            


            const check = await userLogin(body);
            setUser(check.id);
            setMail({ mail: body.mail });
            if (check.msg) {
              setLogeado({
                state: false,
                msg: check.msg,
              });
              // setTimeout(() => {
              //   setLogeado({
              //     msg: "",
              //   });
              // }, 4000);
              setAcc(acc + 1);
            }
            // if (acc >= 5) {
            //   return setLogeado({
            //     state: false,
            //     msg: "a ver probando",
            //   });
            // }
            if (check.auth === true) {
              notify();
              setTimeout(()=>{
                setLocation("/profile")
              },2400)
            }
          }}

          // validate={(values) => {
          //   let errors = {};
          //   if (!values.mail) {
          //     // errors.mail = "Ingrese un email";
          //     notifyWarn("Ingrese un email");
          //     return;
          //   } else if (
          //     !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
          //       values.mail
          //     )
          //   ) {
          //     errors.mail = "Dirección de correo inválida";
          //   }
          //   if (!values.password) {
          //     // errors.password = "Ingrese una contraseña";
          //     notifyWarn("Ingrese una contraseña")
          //   }
          //   return errors;
          // }}
        >
          {({ errors }) => (
            <Form className='form'>
              
              <img src={logo} alt='Logo Blanco' />
              <h1>Login</h1>
                  <Field
                    className="field"
                    name="mail"
                    type="email"
                    placeholder="Email"
                    autoComplete= "off"
                  />

                  <ErrorMessage
                    name="mail"
                    component={() => ( 
                      <div className="log-error-mail">{errors.mail}</div>
                    )}
                  />
                
                <div className="data-field">
                  <Field
                    className="field"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component={() => ( 
                      <div className="log-error-pass">{errors.password}</div>
                    )}
                  />
                </div>
              
                <button className="btn-sub" type="submit">
                  Login
                </button>
              
                <div className="data-field">
                  {
                  // logeado && acc >= 5 ? (
                  //   <div>
                  //     No recuerdas tu contraseña haz{" "}
                  //     <span className="forgot-log" onClick={forgotClick}>
                  //       Click aqui
                  //     </span>
                  //   </div>
                  // ) : (
                    logeado.msg ="No has ingresado ningún dato" ? notifyWarn(logeado.msg) : notifyWarn(logeado.msg)
                    // <p className="log-error">{logeado.msg}</p>
                  // )
                  }
                  {forgot.auth ? <div className ="forgot-msg">{forgot.msg}</div> : ""}
                </div>
                <div className="register">
                    Aún no tienes una cuenta? <br />
                    <a href="/register">Registrate aquí</a>
                </div>
               
            </Form>
            
          )}
        </Formik>
      </div>
      <ToastContainer autoClose={1500}/>
    </div>
  );
}

export default Login;