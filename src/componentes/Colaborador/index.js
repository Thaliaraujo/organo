import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aofavoritar}) => {
    function favoritar() {
        aofavoritar(Colaborador.id);
    };

    return (<div className="colaborador">
        <AiFillCloseCircle 
            size={25} 
            className="deletar" 
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                    ? <AiFillHeart onClick={favoritar}/> 
                    : <AiOutlineHeart onClick={favoritar} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador