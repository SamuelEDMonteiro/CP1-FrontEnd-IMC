import './css/style.css'
import { useState } from "react"
import Header from "./components/Header"
import Resultado from "./components/Resultado";
import Footer from "./components/Footer";

function App() {

  // HOOK- useState - Manipula o estado da variável
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [resultado, setResultado] = useState();
  const [mostrarResultado, setMostrarResultado] = useState(false);

  //CRIANDO A FUNÇAO CALCULAR IMC
  const calcularImc = (e) => {
    e.preventDefault(); //evita o recarregamento da página
    if (altura > 0 && peso > 0) {
      const imc = peso / (altura * altura);
      setResultado(imc.toFixed(2)); //arrendonda para 2 casas decimais
      setMostrarResultado(true);
    } else {
      alert("Por favor digite valores valídos");
      setMostrarResultado(false);
    }
  }


  return (
    <>
      <Header />
      <div className="hero">
        <div className="apresentacao">
          <h1>Descubra se está no peso ideal!</h1>
          <h2>A Calculadora de IMC (Índice de Massa Corporal) é uma ferramenta prática e eficiente que permite avaliar rapidamente se o seu peso está dentro da faixa considerada saudável para a sua altura. Ao inserir seus dados, você recebe em segundos uma análise do seu IMC, com a classificação de baixo peso, peso normal, sobrepeso ou obesidade. Esse índice é um importante ponto de partida para você entender melhor sua saúde e tomar decisões conscientes sobre cuidados com o corpo e bem-estar.</h2>
        </div>
        <div className="cards">
          <form>
            <div className="box-height">
              <label htmlFor="altura"><span>Sua altura:</span></label>
              <input
                type="number"
                id="altura"
                placeholder="Ex: 1,70m"
                value={altura}
                onChange={(e) => setAltura(parseFloat(e.target.value))}
              />
            </div>

            <div className="box-width">
              <label htmlFor="peso"><span>Seu peso:</span></label>
              <input
                type="number"
                id="peso"
                placeholder="Ex: 60Kg"
                value={peso}
                onChange={(e) => setPeso(parseFloat(e.target.value))}
              />
            </div>
            <button onClick={calcularImc}>Calcular</button>
          </form>
        {mostrarResultado && (
          <Resultado resultado={resultado} />
        )}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
