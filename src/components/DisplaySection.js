import React from 'react'

const DisplaySection = ({ selectedNumbers, totalCash }) => {
    return (
        <div className="rectangle">
            <h3>Numbers Selected : </h3>
            {selectedNumbers.map((number) => (<p className="text">Mark: {number}</p>))}
            <h3 id="bottom">Total: ${totalCash} </h3>
        </div >
    )
}

export default DisplaySection
