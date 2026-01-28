import Banner from './components/Banner/Banner'
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time'
import './App.css'
import { useState } from 'react';


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]


  const listaTimes = [
    "programação",
    "Front end",
    "Data Science",
    "DevOps",
    "Ux e Design",
    "Mobile",
    "Inovação e Gestão"
  ]


  const [getColaboradores, setColaboradores] = useState([])

  const cadastrarColaborador = function (novoColaborador) {
    console.log("Novo cadastro: ", novoColaborador)

    const novoArray = [...getColaboradores, novoColaborador]
    console.log("Banco de Dados ", novoArray)

    setColaboradores(novoArray)

  }





  return (
    <div className='App'>
      <Banner />
      <Formulario listaTimes={listaTimes} callbackCadastrarColaborador={cadastrarColaborador} />

      {listaTimes.map((time) => (<Time nome={time} />))}

    </div>
  );
}

export default App;
