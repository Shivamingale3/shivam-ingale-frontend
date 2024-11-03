import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserDetails } from "../../redux/slice/userDataSlice";
import { useEffect } from "react";
import axiosInstance from '../../utils/axiosInstance';
const AuthGuard = ({ children }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validateUser = async () => {
        try {
            const response = await axiosInstance.get("/user/validate-user");
            dispatch(setUserDetails(response.data))
        } catch (error) {
            navigate("/home");
        }
    }

    useEffect(() => {
        validateUser();
        // eslint-disable-next-line
    }, [])

    return <>{children}</>;
};

export default AuthGuard;
