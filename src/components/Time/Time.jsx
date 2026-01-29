import Colaborador from '../Colaborador/Colaborador'
import './Time.css'



function Time(props) {


    if (props.listaColaboradores.length > 0) return (  
        
            <section className='time' style={{ backgroundColor: props.time.corPrimaria }}>
                <h3 style={{ borderColor: props.time.corSecundaria }}> {props.time.nome} </h3>
                <div className='colaboradores'>{

                    props.listaColaboradores.map(
                        function (colaborador, index) {
                            // eslint-disable-next-line eqeqeq
                            if (colaborador.time == props.time.nome) {
                                return <Colaborador key={index} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.time.corPrimaria}></Colaborador>
                            } else {
                                console.log("colaborador invalido")
                                return null
                            }

                        }

                    )}</div>
            </section>
    )

}

export default Time