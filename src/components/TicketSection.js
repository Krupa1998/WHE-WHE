import React from 'react'
import TicketNumbers from './TicketNumbers';

const TicketSection = ({ numbersSelectedFunction, clearButton, cashButton, randomButton, selectedNumbers, deSelectedNumber }) => {

    //generating numbers 1-20 and storing it in an array 
    const numbers = [...Array(21).keys()].slice(1);

    const clearButtonHandler = () => {
        clearButton();
    }

    const cashButtonHandler = () => {
        cashButton();
    }

    const randomButtonHandler = () => {
        randomButton();
    }

    return (
        <>
            <div>
                {numbers.map((num) => (
                    <div className="col">
                        <TicketNumbers styleColor={selectedNumbers.indexOf(num) !== -1 ? "#ea7af4" : "#5e548e"}
                            numbersSelectedFunction={numbersSelectedFunction} number={num}
                            deSelectedNumber={deSelectedNumber} />
                    </div>
                ))}
            </div>
            <br />
            <br />
            <div className="btns">
                <button onClick={cashButtonHandler}>CASH</button>
                <button onClick={clearButtonHandler}>CLEAR</button>
                <br />
                <button className="random" onClick={randomButtonHandler}>RANDOM</button>
            </div>
        </>
    )
}

export default TicketSection
