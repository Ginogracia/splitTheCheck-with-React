import './Inputs.css'
import Button from './Button.jsx'
import { useState } from "react"







function Inputs() {
    


const [inputs, setInputs] = useState([
    { id: "Amount", value: "", label: "Amount", placeholder: "Kr", type:"number"},
    { id: "People", value: "", label: "People", placeholder: "st", type:"number"},
    { id: "Tips", value: "", label: "Tips", placeholder: "Kr", type:"number"}
]);



const handleInputChange = (id, event) => {
  const newInputs = inputs.map((input) =>
    input.id === id ? { ...input, value: event.target.value } : input
);
  setInputs(newInputs);
}

const [result, setResult] = useState("");


const checkValues = () => {


  console.log("Button clicked. ✅")

  const amount = Number(inputs.find(input => input.id === "Amount")?.value || "N/A")
  const people = Number(inputs.find(input => input.id === "People")?.value || "N/A")
  const tips = Number(inputs.find(input => input.id === "Tips")?.value || "N/A")

  if (people <= 1) {
    setResult("Enter atleast 2 people.")
    return;
  }

  const total = amount + tips
  
  
  setResult(`${total / people} per person.`)
}




    return (
        <section className="inputs-section">
          {inputs.map((input) => (
            <section key={input.id} className="input-container">
              <h2 className="input-header">{input.label}</h2>
              <input
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onChange={(e) => handleInputChange(input.id, e)}

              />
            </section>
          ))}

          <p className="results">{result}</p> 
          <Button onClick={checkValues} />
        </section>
      );
    }
    

export default Inputs