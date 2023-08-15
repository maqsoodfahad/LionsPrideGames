import React from 'react';
import NextStep from './NextStep';

const Steps = ({ stepCount, text }) => {
    const StepsItems = [
        {text:'Start with email',
        className:'steps-ellipise-position'
       , stepcolor:''

    },
        {text:'Set your password',
        className:'steps-ellipise-position-2'
       , stepcolor:''

    },
        {text:'Basic info',
        className:'steps-ellipise-position-3'
       , stepcolor:''


    },
        {text:'Join the platform',
        className:'steps-ellipise-position-4 ',
        stepcolor:'join-platform'

    }, 
    ]
    
    
    return (
        <>
            <div className='step-box-main'>
                <div className='step-verticle-bar'>
                </div>
                  {StepsItems.map((item, i) => {
                    return (
                        <NextStep
                            text={item.text}
                            key={i}
                            stepCount={stepCount}
                            className={item.className}
                            index={i}
                            stepcolor={item.stepcolor}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Steps;
