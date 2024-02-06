import React, { useId, useMemo, useState } from 'react';
import { nanoid } from 'nanoid'


function ToDoAdd({ handleAddTodo }){
  
  const id = useId();

  
  const [textoactual, setTextoactual] = useState('');

  const newTodo = useMemo(() => {
    if(textoactual){  
      return {
        id: nanoid(),
        text: textoactual,
        completed: false
      };
    }  
  },[textoactual]);

  
  
  const handleSubmit = e => {
    e.preventDefault();
    if (newTodo) {
      handleAddTodo(newTodo);
      setTextoactual('');
    }
  };
  return (
    <div className="container container-sm collapse" id='create-todo'>

      <form className='form-control mt-3' onSubmit={e => handleSubmit(e)}>
        <div className='form-floating text-start border-primary'>
          <input className='form-control' value={textoactual} onChange={e => { setTextoactual(e.target.value); }} type='text' id={`${id}-name`} placeholder='name' required autoComplete='off'></input>
          <label className='form-label' htmlFor={`${id}-name`}>Name</label>
        </div>

        <button className='btn btn-primary my-2'>Submit</button>
      </form>
    </div>

  );
}

    
