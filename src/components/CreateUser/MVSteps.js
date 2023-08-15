import React from 'react'
import Div from '../Elements/Div'
export default function MVSteps({ stepCount }) {
    return (
        <div className='steps-box-mv-process'>
            {
                stepCount === 4 ?
                    <>
                        <Div className={`${stepCount >= 2 ? 'steps-mbl-w steps-mbl-w-active step-mble-w-last-step' : 'steps-mbl-w'}`}>
                            <Div className='step-horzi-hr'>
                                <Div className={`d-flex-sb next-step-hz-first next-step-hz-first-state-four`}>
                                    <Div className='step-ellipise'>
                                        <Div>
                                            <Div className='step-ellipise-eli'>
                                                <Div className={`${stepCount >= 1 ? 'step-ellipise-round ' : 'step-ellipise-round-gray'}`}></Div>
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                                {
                                    stepCount === 4 && (
                                        <>
                                            <Div className={`d-flex-sb next-step-hz-fourth d-flex-sb next-step-hz-fourth-laststep`}>
                                                <Div className='step-ellipise'>
                                                    <Div>
                                                        <Div className='step-ellipise-eli'>
                                                            <img className='creation-last-step-img' src='https://i.postimg.cc/DwTM1KzK/Group-63.png' alt='create-logo' />
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </>
                                    )
                                }
                            </Div>
                        </Div>
                    </> : <>
                        <Div className={`${stepCount >= 2 ? 'steps-mbl-w steps-mbl-w-active' : 'steps-mbl-w'}`}>
                            <Div className='step-horzi-hr'>
                                <Div className={`d-flex-sb next-step-hz-first ${stepCount >= 2 && 'next-step-hz-first-move'} ${stepCount == 3 && 'next-step-hz-first-move-basic' } `}>
                                    <Div className='step-ellipise'>
                                        <Div>
                                            <Div className='step-ellipise-eli'>
                                                <Div className={`${stepCount >= 1 ? 'step-ellipise-round ' : 'step-ellipise-round-gray'}`}></Div>
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                                {
                                    stepCount >= 2 ? " " :
                                        <>
                                            <Div className={`d-flex-sb next-step-hz-secound`}>
                                                <Div className='step-ellipise'>
                                                    <Div>
                                                        <Div className='step-ellipise-eli'>
                                                            <Div className={`${stepCount >= 2 ? 'step-ellipise-round  ' : 'step-ellipise-round-gray'}`}></Div>
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </>
                                }
                                {
                                    stepCount >= 3 ?
                                        <>
                                            <Div className={`d-flex-sb next-step-hz-third`}>
                                                <Div className='step-ellipise'>
                                                    <Div>
                                                        <Div className='step-ellipise-eli'>
                                                            <Div className={`${stepCount >= 4 ? 'step-ellipise-round ' : 'step-ellipise-round-gray'}`}></Div>
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </> :
                                        <>
                                            <Div className={`d-flex-sb next-step-hz-third`}>
                                                <Div className='step-ellipise'>
                                                    <Div>
                                                        <Div className='step-ellipise-eli'>
                                                            <Div className={`${stepCount >= 3 ? 'step-ellipise-round ' : 'step-ellipise-round-gray'}`}></Div>
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </>
                                }
                                {
                                    stepCount === 4 ?
                                        <>
                                            <Div className={`d-flex-sb next-step-hz-fourth`}>
                                                <Div className='step-ellipise'>
                                                    <Div>
                                                        <Div className='step-ellipise-eli'>
                                                            <img className='creation-last-step-img' src='https://i.postimg.cc/DwTM1KzK/Group-63.png' alt='create-logo' />
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </>
                                        :
                                        <>
                                            <Div className={`d-flex-sb next-step-hz-fourth`}>
                                                <Div className='step-ellipise'>
                                                    <Div>
                                                        <Div className='step-ellipise-eli'>
                                                            <Div className={`${stepCount >= 4 ? 'step-ellipise-round ' : 'step-ellipise-round-gray'}`}></Div>
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </>
                                }

                            </Div>

                        </Div>
                    </>}
            <span className="step-title-mv">
                {stepCount === 1 ? <div> Start with email</div> :
                    stepCount === 2 ? "Set your password" :
                        stepCount === 3 ? <div className='basic-info'> Basic info </div> :
                            stepCount === 4 && "Accept our terms"}
            </span>
        </div>
    )
}
