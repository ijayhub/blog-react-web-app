import { useState, useEffect } from 'react';

const UseFetch = (url) => {

    const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error('blogs cant be fetched check the address');
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                })
                 .catch((err) => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 700);
    }, [url]) 
    return { data, isPending, error }
        
    
}

export default UseFetch
