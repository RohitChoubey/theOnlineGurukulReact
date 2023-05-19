import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation  } from 'react-router-dom';
// import { AuthContext } from  '../../context/context'
import axios from 'axios';
import '../../css/forms/loginStyle.css';

const styled = {
    eyecursor: {
        cursor: "Pointer",
    }
}
const LoginForm = () => {

    // const { signIn } = React.useContext(AuthContext);
    const [passwordshow, setPasswordShow] = useState(false);
    const [eyeIconshow, setEyeIconShow] = useState(false);

    const togglePassword = () => {
        setPasswordShow(!passwordshow);
        setEyeIconShow(!eyeIconshow);
    }
        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || "/Student/dashboard";

        const userRef = useRef();
        const errRef = useRef();

        const [user, setEmail] = useState('');
        const [pwd, setPassword] = useState('');
        const [errMsg, setErrMsg] = useState('');

        useEffect(() => {
            userRef.current.focus();
        }, [])

        useEffect(() => {
            setErrMsg('');
        }, [user, pwd])

        const HandleSubmit = async (e) => {
            e.preventDefault();
            try {
                 const response = await axios.get('/checkuser/'+user+'/'+pwd)
                    // console.log(response);
                    const accessToken = response?.data[0]?.tokens?.token;
                    localStorage.setItem('togtoken',accessToken);
                    // setEmail(''); setPassword('');
                    // const roles = response?.data[0]?.role;
                    // const userid = response?.data[0]?.Userinformation?._id;
                    // signIn({userId:userid,userToken:accessToken,userRole:roles});
                    setEmail(''); setPassword('');
                   navigate(from, { replace: true });
                // })
            } catch (error) {
                if (!error?.response) {
                    setErrMsg('No Server Response');
                } else if (error.response?.status === 400) {
                    setErrMsg('Missing Username or Password');
                } else if (error.response?.status === 401) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Login Failed');
                }
                errRef.current.focus();

            }
        }

  return (
    <>
        <div className="container-fluid login-container">
                    <div className="row main-content bg-success text-center">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <div className="col-md-4 text-center company__info">
                            <span className="company__logo">
                                <img src="assets/images/logo.png" className="logo_image dropbtn" alt="logo img" />
                            </span>
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                            <div className="container-fluid">
                                <div className="row">
                                    <h2>Log In</h2>
                                </div>
                                <div className="login-form-box">
                                    <form onSubmit={HandleSubmit} className="form-group" method="post">
                                        <div className="col-12">
                                            <label htmlFor="stemail" className="text-left">UserId</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="inputGroupPrepend"><i className="fa fa-user" ></i></span>
                                                <input type="text"  className="form-control" placeholder="example@gmail.com"
                                                        ref={userRef}
                                                        id="email"
                                                        onChange= {(e) => setEmail(e.target.value) }
                                                        value = {user}
                                                        required
                                                />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="col-12">
                                            <label htmlFor="stemail" className="text-left">Password</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="inputGroupPrepend"><i className="fa fa-key" ></i></span>
                                                <input type={passwordshow ? "text" : "password"} className="form-control" placeholder="Password"
                                                     id="password"
                                                     onChange={(e) => setPassword(e.target.value)}
                                                     value= {pwd}
                                                     required/>
                                                <span className="input-group-text" onClick={togglePassword}  style={styled.eyecursor} id="inputGroupPrepend"><i className={eyeIconshow ? "fa fa-eye-slash" : "fa fa-eye"} ></i></span>
                                            </div>
                                        </div>
                                         <br />
                                        <div className="row">
                                            <div className="col-8 text-left" style={{padding: "0px 3px 0 13px",textAlign: "left"}}>
                                                <input type="checkbox" name="remember_me" id="remember_me" /> &nbsp;
                                                <label htmlFor="remember_me" style={{padding: "0",display:"inline-block"}} > Remember Me!</label>
                                            </div>
                                            <div className="col-4 text-right"style={{padding: "0"}}>
                                                <a href="/" className="forgot-pass-link">Forgot password</a>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* <button onClick={loginuse()} className="btn" >Submit </button> */}
                                            <button  className="btn" >Submit </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="row">
                                    <p>Don't have an account? Register <Link className="linkColor" to="/register-type">Here</Link> </p>
                                    {/* <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left" style={{padding: "0"}}>
                                            <input type="checkbox" name="iAmStudent"  /> &nbsp;
                                            <b>Student</b>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right"style={{padding: "0"}}>
                                            <input type="checkbox" name="iAmTeacher"  /> &nbsp;
                                            <b>Teacher</b>
                                    </div> */}
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>

    </>
  )
}

export default LoginForm
