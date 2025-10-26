function List() {
    const fruits: string[] = ['Apple', 'Banana', 'Orange', 'Watermelon', 'Mango']

    return (
        <ul>
            {fruits.map((fruit: string, index: number) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    )
}

export default List;