import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastLogo from '../../../assets/images/logo.png'

const Toast = {
    success: (message) => {
        toast.success(<div>
            <img className="toastImageLogo" src={toastLogo} alt="toastLogo" />
            {message}
        </div>);
    },
    error: (message) => {
        toast.error(<div>
            <img className="toastImageLogo" src={toastLogo} alt="toastLogo" />
            {message}
        </div>);
    },
    warning: (message) => {
        toast.warning(<div>
            <img className="toastImageLogo" src={toastLogo} alt="toastLogo" />
            {message}
        </div>);
    },
    info: (message) => {
        toast.info(<div>
            <img className="toastImageLogo" src={toastLogo} alt="toastLogo" />
            {message}
        </div>);
    },
};

export default Toast;
