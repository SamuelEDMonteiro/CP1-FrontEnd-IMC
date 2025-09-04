import '../css/resultado.css'
import TabelaImc from './TabelaImc'

//destruct - desestruturação- acessa os dados de outro componente
function Resultado({resultado}){
    return(
        <div className='container'>
            <div className='result'>
                <h2>Seu IMC é de: <span className='imc-span'>{resultado}</span></h2>
            </div>

            <table className='classification'>
                <thead className='tabelaHeader'>
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody className='tabelaBody'>
                    {TabelaImc(resultado)}
                </tbody>
            </table>

        </div>
    )
};
export default Resultado