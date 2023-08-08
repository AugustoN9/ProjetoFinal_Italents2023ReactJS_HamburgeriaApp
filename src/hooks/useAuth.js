import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById, loginUserApi } from "../services/authService";
import api from "../services/api";

const useAuth = () => {
    const [ userLogged, setUserLogged ] = useState(true);
    const [loading, setLoading] = useState(true);
    const [ userId, setUserId ] = useState('');
    const [ userFull, setUserFull ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse( localStorage.getItem('userInfo'));

        if(userInfo){
            api.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`
            findUserById(userInfo.id);
            setUserLogged(true);
        }
        setLoading(false);
    
    }, [])

    const loginUser = async (inputValues) => {        
        const response = await loginUserApi(inputValues);
        const data = await response.data;
        setUserId(response.data.id);
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/');  
        setUserLogged(true);   
    }

    const logoutUser = () => {
        setUserLogged(false);
        localStorage.clear();
        navigate('/login');
    }

    const findUserById = async () => {
        const response = await getUserById(userId);
        setUserFull(response.data)
        console.log(userFull)
    }

    return { userLogged, loading, loginUser, logoutUser, findUserById }
   
}

export default useAuth;
