import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../Componte/Form/Button/Button";
import Input from "../../Componte/Form/Input/Input";
import Text from "../../Componte/Form/Text";

import './Login.css'

const Login = () => {

    const [Login,SetLogin] = useState([]);
    let valueInput;
    const navigate = useNavigate();

    const changeHandelInput = (event) => {
        valueInput = event.target.value
    }

    const changeHandelForm = (event) => {
        event.preventDefault();
        axios.get(`https://localhost:44351/api/Account/GetSmsCode?mobileNumber=${valueInput}`)
        .then((respons) => {
            const { data } = respons
            const { result } = data 
            SetLogin(result)
            navigate('/Singin',result)
        })
    }

    return (
        <div className="login">
            <Text>
                ورود
            </Text>
            <form className="form" id="form">
                <Input type="text" name="mobileNumber" change={(event) => changeHandelInput(event)} placeholder="لطفا شماره تلفن خود را وارد کنید"/>
                <Button click={(event) => changeHandelForm(event)}>
                    ارسال کد
                </Button>
                <div className="line"></div>
                <div className="google">
                    <Button click={(event) => changeHandelForm(event)}>
                        گوگل
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login