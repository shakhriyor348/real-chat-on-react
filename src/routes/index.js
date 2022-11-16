import Chat from "../components/Chat/Chat";
import Login from "../components/Login/Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils";

export const globalRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]
export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]