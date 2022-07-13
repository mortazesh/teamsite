import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../Componte/Form/Button/Button";
import Input from "../../Componte/Form/Input/Input";
import Text from "../../Componte/Form/Text";

import './Singin.css'

const Singin = () => {

    const [Token, SetToken] = useState([]);
    let valueInput;
    const navigate = useNavigate();
    const params = useParams();
    let model;

    const changeHandelInput = (event) => {
        valueInput = event.target.value
        model = {
            code : valueInput,
            mobilenumber : "09020410484"
        }
    }

    const changeHandelForm = (event) => {
        event.preventDefault();
        axios.post('https://localhost:44351/api/Account/login',JSON.stringify(model))
            .then((respons) => {
                console.log(respons)
                const { data } = respons
                console.log(data)
                const { result } = data
                console.log(respons)
            })
    }

    return (
        <div className="singin">
            <Text>
                کدتایید
            </Text>
            <form className="form" id="form">
                <Input type="text" name="mobileNumber" change={(event) => changeHandelInput(event)} placeholder="لطفا کد تایید را وارد کنید" />
                <Button click={(event) => changeHandelForm(event)}>
                    تایید کد
                </Button>
                <div className="line"></div>    
                <div className="time">
                    <div>
                        <p>
                            زمان
                        </p>
                    </div>
                    <div>
                        <p>
                            00:30
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Singin