import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ colaboradores, time, aoDeletar, mudarCor, favoritarColaborador }) => {

    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input value={time.cor} onChange={e => mudarCor(e.target.value, time.id)} type='color' className='input-cor'></input>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador
                        key={indice}
                        colaborador={colaborador}
                        cor={time.cor}
                        deletarColaborador={aoDeletar} 
                        favoritarColaborador={favoritarColaborador}/>
                })}
            </div>
        </section>

    )
}

export default Time