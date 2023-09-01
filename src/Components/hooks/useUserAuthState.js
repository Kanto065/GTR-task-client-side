import { useEffect, useState } from "react"

const useUserAuthState = () => {
    const [user, setUserState] = useState('');

    // useEffect(() => {
    //     fetch('https://localhost:44389/api/isVaidUser', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': localStorage.getItem('token'),
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => { setUserState(data); console.log("user name", data) })
    // }, [])

    // return [user, setUserState];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:44389/api/isVaidUser', {
                    method: 'GET',
                    headers: {
                        'Authorization': localStorage.getItem('token'),
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserState(data);
                    console.log("user name", data);
                } else {
                    // Handle error
                    console.error('Error fetching user data');
                }
            } catch (error) {
                // Handle error
                console.error('An error occurred', error);
            }
        };

        fetchData();
    }, []);

    return [user, setUserState];
}

export default useUserAuthState;