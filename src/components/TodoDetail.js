import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import RenderField from './RenderField';
import { Field, reduxForm } from 'redux-form/immutable';

let CarEditForm = props => {
  const { handleSubmit } = props;
  return  <form onSubmit={handleSubmit}>
            <h4>Autó adatainak megváltoztatása:</h4>
              Autó: <Field type="text" name="auto" placeholder="auto" component={RenderField}/><br/>
              Rendszám: <Field type="text" name="rendszam" placeholder="rendszam" component={RenderField}/>
              <button type="submit">Add</button>
          </form>
}

let CarEditFormContainer = reduxForm({
  form: 'addCarForm' // a unique name for this form
})(CarEditForm);

function TodoDetail({item, onCarChange}){
  if(!item) {
    return (
      <Redirect to="/" />
    )
  }
  return(
    <div>
      <h1>
        Autó: {item.get('auto')} - Rendszáma: {item.get('rendszam')}
      </h1>
      <CarEditFormContainer initialValues={item} onSubmit={onCarChange} />
      <div><Link to="/">Back</Link></div>
      <div><Link to='/newway'>Tovább az útra</Link></div>
    </div>
  );
}

export default TodoDetail;
