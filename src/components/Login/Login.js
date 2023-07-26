
import LoginPart from "../LoginPart/LoginPart";
import './Login.css'
import InfoParts from "../InfoParts/InfoParts";
import Form from "../Form/Form";
import LoginFooter from '../LoginFooter/LoginFooter'
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../store/slices/users/usersSlice";
import { useEffect } from "react";
import { fetchUsers } from "../../store/slices/users/usersAPI";


function Login() {
    const { usersData } = useSelector(selectUsers)
    const dispatch = useDispatch()

    useEffect(() =>{ 
        if(!usersData.length){
            dispatch(fetchUsers())
        }
    },[])

    
    return(
        <div className="Login">
            <div className="formContainer">
                <div className="flexDiv">
                    <LoginPart/>
                    <div>
                    <Form/>
                    <InfoParts/>
                    </div>
                </div>
                <LoginFooter/>
            </div>
        </div>
    )
}

export default Login