import Child from "./Child";

function Parent() {
    return (
        <>
            <Child nama="Bobby" umur={34} />
            <Child nama="Mawan" umur={30} />
        </>
    )
}

export default Parent;