import React from 'react'

export default function NextStep({className,stepCount,text,index,stepcolor}) {
  return (
    <div>
        <div className={`d-flex-sb steps-ellipise-position || ${className}`}>
                <div className='step-ellipise'>
                    <div>
                        <div className='step-ellipise-eli'>
                        {/* <div className={`${stepCount === index + 1 ? 'step-ellipise-round ' : 'step-ellipise-round-gray'}`}></div> */}
                        <div className={`${stepCount >  index ? 'step-ellipise-round ' : 'step-ellipise-round-gray'}`}></div>
                        </div>
                    </div>
                    <div>
                    <span className={`f-16-font-medium ${stepcolor} step-ellipise-text`}>{text}</span>
                    </div>
                </div>
            </div>
    </div>
  )
}
