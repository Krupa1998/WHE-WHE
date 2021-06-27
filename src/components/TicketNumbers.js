import React from 'react'

const TicketNumbers = ({ numbersSelectedFunction, number, styleColor, deSelectedNumber }) => {

    const selectedNumberHandler = () => {
        numbersSelectedFunction(number);
    }

    const deSelectedNumberHandler = () => {
        deSelectedNumber(number);
    }

    const numberButtonHandler = () => {
        if (styleColor !== "#5e548e") {
            deSelectedNumberHandler();
        }
        else {
            selectedNumberHandler();
        }
    }

    return (

        <div className="btn-group">
            <button style={{ backgroundColor: styleColor }} onClick={numberButtonHandler} >{number}</button>
        </div >

    )
}

export default TicketNumbers
