import './ListaSuspensa.css'

function ListaSuspensa(props) {
   
    return (
        <>
            <div className='lista-suspensa'>
                <label>{props.label}</label>
                <select value={props.valor} onChange={e => props.callbackAlterarValor(e.target.value) }  required={props.required} placeholder={ `Digite o seu ${props.label} ...`}>
                    {/* <option defaultValue={true}>Selecione um item</option> */}
                    { props.itens.map((item, index) => <option key={index} > {item} </option>) }
                </select>
            </div>
        </>
    )

}

export default ListaSuspensa