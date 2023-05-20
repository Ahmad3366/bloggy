import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setdata] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("could not fetch the data")
                    }
                    return res.json()
                })
                .then(data => {
                    setdata(data)
                    setIsLoading(false)
                    setError(null)
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setError(err.message)
                        setIsLoading(false)
                    }
                })
        }, 500);

        return () => abortCont.abort();
    }, [url])

    return { data, isLoading, error };
}

export default useFetch;