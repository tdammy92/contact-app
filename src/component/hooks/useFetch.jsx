import { useState, useEffect } from "react"


function useFetch(url) {

    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {


        setTimeout(() => {
            fetchData()
        }, 1000);

    }, [url])

    async function fetchData() {

        fetch(url)
            .then(res => {
                setIsloading(true)
                if (!res.ok) {
                    throw Error("you can not reach this specific service")
                }

                return res.json();
            })

        .then(data => {

            setData(data);
            setError(null)
            setIsloading(false)
        })

        .catch((err) => {

                setIsloading(false);
                console.log(err.message);
                setError(err.message);
            }

        )
    }

    return { data, isLoading, error }
}

export default useFetch;