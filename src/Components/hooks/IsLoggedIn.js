import { useState } from "react"

const IsLoggedIn = () => {
    const [loginState, setLoginState] = useState(true);

    if (localStorage.getItem('token') == null) {
        setLoginState(false);
        return [loginState, setLoginState];
    }
    else {
        setLoginState(true);
        return [loginState, setLoginState];
    }
}

export default IsLoggedIn;