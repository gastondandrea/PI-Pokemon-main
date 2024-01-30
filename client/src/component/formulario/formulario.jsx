import './formulario.css';
import ash from '../../assets/images/ash.png'
import { useState } from 'react';

function Formulario() {
    const [input, setInput] = useState({
        name:"",
        image:"",
        life:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:""
    });

    const [error, setError] = useState({
        name:"Completa el campo",
        image:"",
        life:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:""
    });

    const validate = (input) =>{
        if(input.name !== "hola"){
            setError({...error, error:"Formato invalido"})
            return;
        }
        setError({...error, error:""})
    }

    const handleChange = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        validate({
            ...input,
            [e.target.name]:e.target.value
        })
    }


    const [data, setData] = useState(0);

    const getValue=()=>{};

  return (
    <div className='formulario-container'>
      <div className='formulario-img'>
        <img src={ash} alt="ash"/>
      </div>
      <div className='formulario-form'>
        <form className="form-container" onSubmit={""}>

          <div>
            <h3>Complete with the data of the new pokémon:</h3>
          </div>
            {/*NAME:*/}
            <div className="form-name">
                <label htmlFor="name">NAME: </label>
                <input type="text" key="name" name="name" onChange={handleChange}/>
                <span>{error.name}</span>
            </div>      
            {/*LIFE:*/}
            <div className="form-life">
                <label htmlFor="life">LIFE: </label>
                <input type="range" min="0" max="100" step="10" key="life" name="life" value={data} onChange={handleChange}/>                
            </div>
            {/*ATTACK:*/}
            <div className="form-attack">
                <label htmlFor="attack">ATTACK: </label>
                <input type="range" min="0" max="100" key = "attack" name="attack" onChange={handleChange}/>               
            </div>
            {/*DEFENSE:*/}
            <div className="form-defense">
                <label htmlFor="defense">DEFENSE: </label>
                <input type="range" min="0" max="100" key = "defense" name="defense" onChange={handleChange}/>               
            </div>
            {/*SPEED:*/}
            <div className="form-speed">
                <label htmlFor="speed">SPEED: </label>
                <input type="range" min="0" max="100" key = "speed" name="speed" onChange={handleChange}/>                
            </div>
            {/*HEIGHT:*/}
            <div className="form-height">
                <label htmlFor="height">HEIGHT: </label>
                <input type="text" key = "height" name="height" onChange={handleChange}/>                
            </div>
            {/*WEIGTH:*/}
            <div className="form-weigth">
                <label htmlFor="weigth">WEIGTH: </label>
                <input type="text" key = "weigth" name="weigth" onChange={handleChange}/>                
            </div>
            {/*TYPES:*/}
            <div className="form-types">
                <label htmlFor="types">TYPES: </label>
                <select name="types" key= "types">
                  <option value="Elictric">Elictric</option>
                  <option value="Fire">Fire</option>
                  <option value="Normal">Normal</option>
                  <option value="Water">Water</option>
                </select>  
            </div>
            {/*IMAGE:*/}
            <div className="form-image">
                <label htmlFor="image">IMAGE: </label>
                <input type="text" key = "image" name="image" onChange={handleChange}/>
            </div>
            {/*ADD!*/}
            <button className="form-button-sumit" type="Submit" >ADD!</button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;