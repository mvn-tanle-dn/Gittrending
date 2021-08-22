import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import TopNav from '@components/top-nav';
import './styles.css';

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    // useEffect(() => {
    //     if(localStorage.getItem('user-info')){
    //         history.push("/");
    //     }
    // }, [])

     function login() {
        let item = {email, password};
          fetch("https://tuongtacmaytinh-server.herokuapp.com/v1/auth/login", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
            }
        }).then(res => {
          if(res.ok) {
            history.push('/home')
          } else {
            throw Error(res.status)
          }
        }).then(result => {
          console.log(JSON.stringify(result))
        }).catch(error => {
          alert("Email, password are wrong")
          console.log('error', error)
        })
    }

    function signUp() {
      history.push('/register')
    }
    return (
      <main className="register-page">
      {/* <TopNav/> */}
      <section className="section-register">
        <h2 className="mt-5">Login Page</h2>
        <form className="mt-4">
          <div className="form-group row register-form">
            <label  className="col-sm-3 col-form-label col-form-label-sm">Email:</label>
            <div className="col-sm-9 input-form">
              <input

                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row register-form">
            <label className="col-sm-3 col-form-label col-form-label-sm">Password:</label>
            <div className="col-sm-9 input-form">
              <input
                  type="password"
                  className="form-control form-control-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="row header-left">
            <div className="col-sm-3"></div>
            <div className="col-sm-9 form-btn">
              <button className="btn btn-register mr-4" type="button" onClick={login}>Login</button>
              <button className="btn btn-register" type="button" onClick={signUp}>Sign Up</button>
            </div>
          </div>
        </form>
      </section>
      </main>
    )

}

export default Login;