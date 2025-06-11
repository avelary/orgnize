import { Navigate } from "react-router"
import { useAuth } from "../../context/auth"

export const PrivateRoute = ({children}: {children: React.ReactNode}) => {
    const {currentUser} = useAuth()

    if(!currentUser){
        return <Navigate to={"/login"} />
    }

    return children
}