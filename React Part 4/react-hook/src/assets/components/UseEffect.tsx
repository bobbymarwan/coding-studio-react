import { useEffect, useRef, useState } from "react"

export interface User {
    gender: string
    name: {
        title: string
        first: string
        last: string
    }
    location: {
        street: {
            number: number
            name: string
        }
        city: string
        state: string
        country: string
        postcode: string | number
        coordinates: {
            latitude: string
            longitude: string
        }
        timezone: {
            offset: string
            description: string
        }
    }
    email: string
    login: {
        uuid: string
        username: string
        password: string
        salt: string
        md5: string
        sha1: string
        sha256: string
    }
    dob: {
        date: string
        age: number
    }
    registered: {
        date: string
        age: number
    }
    phone: string
    cell: string
    id: {
        name: string
        value: string | null
    }
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
    nat: string
}

export interface UserApiResponse {
    results: User[]
    info: {
        seed: string
        results: number
        page: number
        version: string
    }
}

function UseEffect() {
    const [data, setData] = useState<User | null>(null);
    const fetchRef = useRef(false)

    useEffect(() => {
        if (fetchRef.current) return
        fetchRef.current = true
        const fetchData = async () => {
            const res = await fetch("https://randomuser.me/api/");
            const json: UserApiResponse = await res.json();
            setData(json.results[0]);
        };

        fetchData();
    }, [])

    return (
        <div>
            {data ? (
                <div>
                    <p>Name: {data?.name.first} {data?.name.last}</p>
                    <img src={data?.picture.large} alt={data?.name?.first} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default UseEffect