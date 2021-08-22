import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './styles.css';
import { Logo } from '@components/icons';
import TopNav from '@components/top-nav';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function signUp() {
        let item = {name, email, password};
        await fetch("https://tuongtacmaytinh-server.herokuapp.com/v1/auth/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }).then(res => {
          console.log(res);
          if(res.ok) {
            history.push('/login')
          } else {
            throw Error(res.status)
          }

        }).then(result => {
          console.log(result)
        }).catch(error => {
          console.log('error', error)
          alert("Error: Chua nhap thong tin")
        })
    }

    return (

        <main className="register-page">
            {/* <TopNav/> */}
            <section className="section-register">
              <h2 className="mt-5">Register Page</h2>
              <form className="mt-4">
                <div className="form-group row register-form">
                  <label  className="col-sm-3 col-form-label col-form-label-sm">Name:</label>
                  <div className="col-sm-9 input-form">
                    <input

                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
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
                <button className="btn btn-register" type="button" onClick={signUp}>Sign Up</button>
              </form>
            </section>
        </main>

    )
}

export default Register;