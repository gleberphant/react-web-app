import { useState } from 'react'
import './Formulario.css'

import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'


function Formulario(props) {

    const times = props.listaTimes

    // dados do formulário
    const [getNome, setNome] = useState('nome')
    const [getCargo, setCargo] = useState('cargo')
    const [getImagem, setImagem] = useState('imagem')
    const [getTime, setTime] = useState('programação')

    //evento de submit
    const aoSalvar = (e) => {
        e.preventDefault()

        const colaborador = {
            nome: getNome,
            cargo: getCargo,
            imagem: getImagem,
            time: getTime
        }

        // verificar se item esta vazio
        for (const [chave, valor] of Object.entries(colaborador)) {
            if (valor === '') {
                alert(`O campo ${chave} não pode ser vazio, selecione um valor !`);
                return;
            }
        }

        props.callbackCadastrarColaborador(colaborador)
    }

    return (
        <><section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o Card</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    valor={getNome}
                    callbackAlterarValor={setNome} />

                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    valor={getCargo}
                    callbackAlterarValor={setCargo} />

                <CampoTexto
                    obrigatorio={false}
                    label="Imagem"
                    valor={getImagem}
                    callbackAlterarValor={setImagem} />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={getTime}
                    callbackAlterarValor={setTime} />

                <Botao type='submit'> Criar Card</Botao>
            </form>
        </section>
        </>
    )
}

export default Formulario