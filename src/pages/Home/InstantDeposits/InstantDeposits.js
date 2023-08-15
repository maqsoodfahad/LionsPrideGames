import React from 'react' 
import SkrillPayment from '../../../assets/HomeAssets/assets/images/skrillPayment.png'
import NetellerPayment from '../../../assets/HomeAssets/assets/images/netellerPayment.png'
import { Link } from 'react-router-dom'
const InstantDeposits = () => {
  return (
    <>
      {/* Instant deposits */}
      <section className="Instant-deposits">
        <div className="theme-container">
          <div className="Instant-content">
            <h1 className="f64 mb-24">Instant deposits. Instant payouts</h1>
            <p className="f20">
              We cover endless events and markets in top speed. Fast settlements and
              instant payouts guarenteed.
            </p>
            <div className="brand-logo">
              <Link>
                <img
                  src={SkrillPayment}
                  alt="skrillPayment"
                  className="img-fluid skrillPayment"
                />
              </Link>
              <Link>
                <img
                  src={NetellerPayment}
                  alt="netellerPayment"
                  className="img-fluid netellerPayment"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InstantDeposits