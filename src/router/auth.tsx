import { Navigate, useLocation } from "react-router-dom"
import { useAuthStore } from "@/store/auth.ts"
import {searchRoute} from "@/utils";
import {router} from "@/router/index.tsx"

const Auth = ({children} : {children : JSX.Element}) => {
    const token = useAuthStore((state) => state.token);
    const location = useLocation();
    console.log(location, "location");
    const route = searchRoute(location.pathname,router);
    if(token && location.pathname === "/login") return <Navigate to="/home" replace />;
    if(route.meta?.noVerificationRequired) return children;
    if (!token) return <Navigate to="/login" replace />;
    return children
}
export default Auth