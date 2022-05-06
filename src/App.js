import './App.css';
import { useState } from "react";

function App() {
  const [numero, setNumber] = useState();
  const [numero1, setNumber1] = useState();
  const [comida, setSelection1] = useState(''); 
  const [comida1, setSelection2] = useState('');
  const [alunosEM, setInput2] = useState('');
  const [alunosEF, setinput3] = useState('');

    function comidas (){
      if (comida === "macarrão" || comida === "carne bovina" || comida === "carne suína" || comida === "arroz" || comida === "frango"){             //prato principal / mistura
        setNumber(alunosEM*63 + alunosEF*50)
      }
      if (comida === "atum"){                  
        setNumber((Number(alunosEM) + Number(alunosEM))*50)
      }
      if (comida === "molhos"){
        setNumber(alunosEM*38 + alunosEF*30)
      }
      if (comida1 === "macarrão" || comida1 === "carne bovina" || comida1 === "carne suína" || comida1 === "arroz" || comida1 === "frango"){             //prato principal / mistura
        setNumber1(alunosEM*63 + alunosEF*50)
      }
      if (comida1 === "atum"){                  
        setNumber1((Number(alunosEM) + Number(alunosEM))*50)
      }
      if (comida1 === "molhos"){
        setNumber1(alunosEM*38 + alunosEF*30)
      }
    }
    return (
    <>
      <div class="container">
        <p>Qual a comida a ser feita?</p>
        <div class="center2">
        <label for="comidas">comidas a serem feitas: </label>
         <select id="name" onChange={a => setSelection1(a.target.value)}>
            <option value=""></option>
            <option value="macarrão">macarrão</option>
            <option value="arroz">arroz</option>
            <option value="frango">frango</option>
            <option value="carne bovina">carne bovina</option>
            <option value="carne suína">carne suína</option>
            <option value="atum">atum</option>
            <option value="molhos">molhos em geral</option>
         </select>
         <select id="name1" onChange={d => setSelection2(d.target.value)}>
            <option value=""></option>
            <option value="macarrão">macarrão</option>
            <option value="arroz">arroz</option>
            <option value="frango">frango</option>
            <option value="carne bovina">carne bovina</option>
            <option value="carne suína">carne suína</option>
            <option value="atum">atum</option>
            <option value="molhos">molhos em geral</option>
         </select>
         </div>
        <h4>Quantos alunos do Ensimo Médio temos na escola?</h4>
        <input type="number" id="name2" onChange={b => setInput2(b.target.value)}/>
          <h4>Quantos alunos do Ensino Fundamental temos na escola</h4>
        <input type="number" id="name3" onChange={c => setinput3(c.target.value)}/>
        <div class="center">
             <button class="button" onClick={comidas}>calcular</button>
        </div>
        <div class="center1">
            <h3>Deverá ser preparado {numero} kg de {comida} e {numero1}kg de {comida1}</h3>
            </div>
      </div>
    </>
   );
}

export default App;