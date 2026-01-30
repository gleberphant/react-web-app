import './campo-cor.css'

const CampoCor = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className='campo-cor'>
        <label>{label}</label>
        <input type='color' value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export default CampoCor