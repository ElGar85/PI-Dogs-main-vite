import React from 'react';
import { useState } from 'react';


function Form() {


    const [form, setForm] = useState({
        Nombre: " ",
        Altura: " ",
        Peso: " ",
        Años_de_vida: " ",
        Temperamentos: " "
    });

    const changeHandler = (event) =>{
      const property = event.target.name;
      const value = event.target.value;
      setForm({...form, [property]:value})
    }

  return (
    <form>
        
        <h1>Crear Perro</h1>

        <div>
            <label>Nombre: </label>
            <input type='text' value={form.nombre} onChange={changeHandler} name= 'Nombre'/> 
        </div>
        <div>
            <label>Altura: </label>
            <input type='text' value={form.Altura} onChange={changeHandler} name= 'Altura'/> 
        </div>
        <div>
            <label>Peso: </label>
            <input type='text' value={form.Peso} onChange={changeHandler} name= 'Peso'/> 
        </div>
        <div>
            <label>Años_de_vida: </label>
            <input type='text' value={form.Años_de_vida} onChange={changeHandler} name= 'Años_de_vida'/> 
        </div>
        <div>
            <label>Temperamentos: </label>
            <input type='text' value={form.Temperamentos} onChange={changeHandler} name= 'Temperamentos'/> 
        </div>
            <button>Crear</button>

        
    
    </form>
  )
}

export default Form;