import React, { createContext, useState, useContext } from 'react';

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <PopupContext.Provider value={{ isOpen, togglePopup }}>
            {children}
        </PopupContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(PopupContext);
    return authContextValue;
};
