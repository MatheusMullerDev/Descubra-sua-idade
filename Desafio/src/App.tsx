import { useState } from 'react'
import './App.css'

function App() {

  const [inputNome, setInputNome] = useState("")
  const [inputAno, setInputAno] = useState("")
  const [result, setResult] = useState<number | null> (null)

  const calcularIdade = () => {
    const anoAtual = new Date().getFullYear()
    const calculoIdade = anoAtual - parseInt(inputAno)
    setResult(calculoIdade)
  }

  function handleClick(){
    calcularIdade()
  }

  return (
    <div className='container'>
      <h1>Descubra sua idade</h1>

      <form className='forms'>
        <label>Digite seu nome</label>
        <input
          placeholder='Digite seu nome...'
          className='dado-nome'
          value={inputNome}
          onChange={(e) => setInputNome(e.target.value)}
        />

        <label>Digite o seu ano de nascimento</label>
        <input
        type='number'
          placeholder='Digite seu ano de nascimento...'
          className='dado-ano'
          value={inputAno}
          onChange={(e) => setInputAno(e.target.value)}
        />
      </form>
      <button onClick={() => handleClick()}>Descobrir idade</button>

      {result !== null && <p className='Result'>{`${inputNome} sua idade é ${result}`}</p>}

      
    </div>
  )
}

export default App
