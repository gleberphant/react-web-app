import Banner from './components/Banner/Banner'
import Formulario from './components/Formulario/Formulario'
import Time from './components/Time/Time'
import Rodape from './components/Rodape/Rodape'

import './App.css'
import { useState } from 'react';

const listaTimes = [
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

function App() {



  console.log(listaTimes)

  const [getColaboradores, setColaboradores] = useState([])
  //setColaboradores({nome:'', cargo:'', imagem:''}  )

  const cadastrarColaborador = function (novoColaborador) {
    console.log("Novo cadastro: ", novoColaborador)

    const novoArray = [...getColaboradores, novoColaborador]
    console.log("Banco de Dados ", novoArray)

    setColaboradores(novoArray)

  }

  return (
    <div className='App'>
      <Banner />
      <Formulario nomeTimes={listaTimes.map(function (time) { return time.nome })} callbackCadastrarColaborador={cadastrarColaborador} />

      {listaTimes.map(
        function (time) {
          return <Time key={time.nome} time={time} listaColaboradores={getColaboradores.filter((colaborador) => colaborador.time === time.nome)} />
        })}
      <Rodape />
    </div>
  );
}

export default App;
