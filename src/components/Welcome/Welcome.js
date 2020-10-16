import React from "react";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { onLogout } from "../../redux/actions/index";
import {registerRequest} from './../../redux/actions/index'

const Welcome = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const register = useSelector(state => state.register.register)
    

    const onHandleAction = () => {

        dispatch(registerRequest())
       
    }

    useEffect(() => {
      const register = localStorage.getItem('register')
      console.log('register', register)

    })

    


  return (
    <>
      <div className="login-app welcome">
       Welcome guys.......

       <div className="popup">
            <p>Did u have account ?</p>

            <div className="option">
                <button onClick={onHandleAction}>No</button>
                <button>Yes</button>
            </div>

       </div>


      </div>
    </>
  );
};



export default Welcome;
