import React from 'react'


const CashSection = ({ cashRegistered }) => {

    const amount = [1, 5, 10, 20];

    return (
        <div className="btn-group2">
            {amount.map((amt) => (<button onClick={() => { cashRegistered(amt) }} >${amt}</button>))}
        </div>
    )
}

export default CashSection