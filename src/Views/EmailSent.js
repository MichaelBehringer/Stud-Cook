import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

function EmailSent() {
  const navigate = useNavigate();

  useEffect(() => {
    toast.success('Erfolgreich gesendet', { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined});
    navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 
  return (
    <div>
     
    </div>
  );
}

export default EmailSent;
