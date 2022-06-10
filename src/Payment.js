import React,{useState} from "react";
import CreditCardInput from 'react-credit-card-input';

export default function Payment() {

    const [number,setNumber] = useState()
    const [expiry,setExpiry] = useState()
    const [cvc,setCvc] = useState()
    const handleCardNumberChange = (e) => {
        setNumber(e.target.value)
        console.log("number",e.target.value);
    }
    const handleCardExpiryChange = (e) => {
        setExpiry(e.target.value)
        console.log("expiry",e.target.value);
    }
    const handleCardCVCChange = (e) => {
        setCvc(e.target.value)
        console.log("cvc",e.target.value);
    }

  return (
    <>
      <div>Hello</div>
      <CreditCardInput
        // onError={({ inputName, err }) => console.log(`credit card input error in ${inputName}: ${err}`)}
        // cardNumberInputProps={{ value: number, onChange: handleCardNumberChange, onError: (err) => console.log(err) }}
        cardNumberInputProps={{ value: number, onChange: handleCardNumberChange }}
        cardExpiryInputProps={{ value: expiry, onChange: handleCardExpiryChange }}
        cardCVCInputProps={{ value: cvc, onChange: handleCardCVCChange }}
        fieldClassName="input"
        customTextLabels={{
        expiryError: {
            invalidExpiryDate: 'La fecha de expiración es inválida',
            monthOutOfRange: 'El mes de expiración debe estar entre 01 y 12',
            yearOutOfRange: 'Year expired',
            dateOutOfRange: 'La fecha de expiración no puede estar en el pasado'
          }
        }}
        />
    </>
  );
}
