import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const AlertMessageComponent = ({ message, status, onClose = null }) => {
    const [isVisible, setIsVisible] = useState(true);

    // Determine border color based on status
    const getBorderColor = () => {
        switch (status) {
            case "success":
                return "green";
            case "warning":
                return "orange";
            case "error":
                return "red";
            default:
                return "white";
        }
    };

    // Auto-hide after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onClose) onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    // Close alert manually
    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    if (!isVisible) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "black",
                color: `${getBorderColor()}`,
                border: `2px solid ${getBorderColor()}`,
                borderRadius: "8px",
                padding: "16px 24px",
                zIndex: 1000,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minWidth: "300px",
                maxWidth: "500px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
            }}
        >
            <span>{message}</span>
            <button
                onClick={handleClose}
                style={{
                    background: "transparent",
                    color: `${getBorderColor()}`,
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                ✖
            </button>
        </div>
    );
};

AlertMessageComponent.propTypes = {
    message: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["success", "warning", "error"]).isRequired,
    onClose: PropTypes.func,
};

export default AlertMessageComponent;
