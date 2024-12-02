import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/slice/userDataSlice";
import axiosInstance from "../../utils/axiosInstance";
const AuthGuard = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const validateUser = async () => {
        try {
            const response = await axiosInstance.get("/user/validate-user");
            if (response.data && response.data.isAuthenticated) {
                dispatch(setUserData(response.data));
            } else {
                throw new Error("Not authenticated");
            }
        } catch (error) {
            console.error("User is not authenticated", error);
            navigate("/auth/login");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        validateUser();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default AuthGuard;
