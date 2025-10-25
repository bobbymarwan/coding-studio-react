function Button() {
    const buttonClick = ()=> {
        console.log('Button telah diklik');
    }

    const buttonOnMouseOut = ()=> {
        console.log('Button telah dihindari');
    }


    return(
        <>
            <button onMouseOver={buttonClick} onMouseOut={buttonOnMouseOut}>Click Me</button>
        </>
    );
}

export default Button;