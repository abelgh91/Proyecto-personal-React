import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvide = ({children}) => {
    const [user, setUser] = useState(() => {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    });
    const [deleteUser, setDeleteUser] = useState(false);

    const [allUser, setAllUser] = useState({
        data: {
            confirmationCode: "",
            user: {
                password: "",
                email: "",
            },
        },
    })

    //funcion puente por si tenemos problemas de asincronia

    const bridgeData = (state) => {
        const data = localStorage.getItem("data"); //cogemos los datos y lo parseamos
        const dataJson = JSON.parse(data);
        switch (state) {
            case "ALLUSER":
                setAllUser(dataJson)
                localStorage.removeItem("data")
                
                break;
        
            default:
                break;
        }
    };

    const login = (data) => {
        localStorage.setItem("user", data);
        const parseUser = JSON.parse(data);
        setUser(parseUser);
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null); // reseteamos 
    };

    const value = useMemo(() => ({
        user,
        setUser,
        login,
        logout,
        allUser,
        setAllUser,
        bridgeData,
        deleteUser, 
        setDeleteUser,
    }),
    [user, allUser, deleteUser]); // cada vez que se modifique el user o el allUser o el deleteUser (que es unc uando me he registrado pero no logado) se ejecuta la funcion value

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
export const useAuth = () => useContext(AuthContext) // creamos useAuth para poder utilizar con el useContext la funcion AuthContext
