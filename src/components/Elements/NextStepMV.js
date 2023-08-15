import React from 'react'

export default function NextStepMV({className,stepCount,text,index}) {
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
                </div>
            </div>
    </div>
  )
}
