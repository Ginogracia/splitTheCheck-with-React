import './Button.css'


function Button({ onClick }) {





    return (
        <>
        
        <button onClick={onClick} className="submit-button">Calculate</button>
        
        </>
    )
}

export default Button