import './colaborador.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = ({ colaborador, cor, deletarColaborador, favoritarColaborador }) => {

    const propsFavorito = {
        size: 40,
        onClick: () => favoritarColaborador(colaborador.id)
    }

    return (<div className="colaborador">
        <AiFillCloseCircle
            size={25}
            className="deletar"
            onClick={() => deletarColaborador(colaborador.id)}
        />


        <div className="cabecalho" style={{ backgroundColor: cor }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">

            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {(colaborador.favorito === true) ?
                    <AiFillHeart {...propsFavorito} color='red' /> : <AiOutlineHeart  {...propsFavorito} />}
            </div>
        </div>
    </div>)
}

export default Colaborador
