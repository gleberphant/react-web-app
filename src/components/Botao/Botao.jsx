import './Botao.css'


function Botao(props){

return (
    <>
        <button className='botao' type={props.type}> {props.children} </button>
    </>
)
}


export default Botao