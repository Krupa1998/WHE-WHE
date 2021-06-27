import React from 'react'
import '../assets/css/App.css';
import Header from './Header';
import CashSection from './CashSection';
import TicketSection from './TicketSection';
import DisplaySection from './DisplaySection';
import { useState } from 'react';

const App = () => {

  const MAX_BUTTON_CLICKED = 5;

  //states
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [totalCash, setTotalCash] = useState(0);

  //number selection state logic
  const numbersSelectedFunction = (number) => {

    if (selectedNumbers.length >= MAX_BUTTON_CLICKED) {
      alert("Only 5 numbers can be selected!");
      return 0;
    }

    const numbers = [...selectedNumbers, number];
    setSelectedNumbers(numbers);

  }

  //number unselecting logic
  const deSelectedNumber = (number) => {
    setSelectedNumbers(selectedNumbers.filter((num) => { return num !== number }));
  }

  //cash amount state logic
  const cashRegistered = (amt) => {
    if (totalCash === 0 && selectedNumbers.length === 0) {
      alert(`Sorry! Can't associate amount to nothing \nPlease select 5 numbers first`);
      return 0;
    }
    const cash = totalCash + amt;
    setTotalCash(cash);
  }

  //CLEAR Button 
  const clearButton = () => {
    setSelectedNumbers([]);
    setTotalCash(0);
  }

  //CASH Button
  const cashButton = () => {
    if (selectedNumbers.length < MAX_BUTTON_CLICKED) {
      alert(`Please select 5 Numbers `);
    }
    else if (totalCash === 0) {
      alert(`Please select Cash Value`);
    }
    else {
      alert(`Registration Successful!! \nNumbers : ${selectedNumbers} \nAssociated Cash Amount : $${totalCash}`);
    }
  }

  //RANDOM Button
  const randomButton = () => {
    let randomNumbers = [];
    let i = 0;
    while (i < MAX_BUTTON_CLICKED) {
      //generating random numbers between 1-20
      let number = Math.floor(Math.random() * 20 + 1);

      //pushing to the array only if does not already exist inside it
      if (randomNumbers.indexOf(number) === -1) {
        randomNumbers.push(number);
        i++;
      }
    }
    setSelectedNumbers(randomNumbers);
  }

  return (
    <div>
      <Header />
      <TicketSection deSelectedNumber={deSelectedNumber} selectedNumbers={selectedNumbers}
        numbersSelectedFunction={numbersSelectedFunction}
        clearButton={clearButton} cashButton={cashButton} randomButton={randomButton} />
      <CashSection cashRegistered={cashRegistered} />
      <DisplaySection selectedNumbers={selectedNumbers} totalCash={totalCash} />
    </div>
  )
}

export default App
