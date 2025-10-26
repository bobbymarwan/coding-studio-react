type Fruit = {
    id: number,
    name: string
}

function Keys() {
    const fruits: Fruit[] = [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Banana'},
        {id: 3, name: 'Manggo'}
    ]

    return (
        <ol>
            {fruits.map(({id, name}) => (
                <li key={id}>{name}</li>
            ))}
        </ol>
    )
}

export default Keys;