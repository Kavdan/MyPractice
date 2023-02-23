import { useContext } from "react"
import { AuthContext } from "../components/AuthoProvider"

export const UseAuth = () => {
    return useContext(AuthContext);
}