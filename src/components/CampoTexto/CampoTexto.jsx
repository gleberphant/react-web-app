import './CampoTexto.css'

function CampoTexto(props) {

    return (
        <>
            <div className="campo-texto">
                <label> {props.label} </label>
                <input value={props.valor} onChange={e => props.callbackAlterarValor(e.target.value) }  required={props.required} placeholder={ `Digite o seu ${props.label} ...`} ></input>
            </div>
        </>
    )
}

export default CampoTexto