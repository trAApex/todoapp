import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import RenderField from '../RenderField';
import { Field, reduxForm } from 'redux-form/immutable';

import './CarDetail.css';

let CarEditForm = props => {
  const { handleSubmit } = props;
  return  <form className="main-form" onSubmit={handleSubmit}>
            <h4 className="change-data">Autó adatainak megváltoztatása:</h4>
              <span className="car-name">Autó:</span><Field type="text" name="auto" placeholder="auto" component={RenderField} className="auto-input"/><br/>
              <span className="rendszam">Rendszám:</span> <Field type="text" name="rendszam" placeholder="rendszam" component={RenderField} className="rendszam-input"/>
              <button type="submit" className="submit">Add</button>
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
    <div className="main-content">
      <h1 className="auto">
        Autó: {item.get('auto')} - Rendszáma: {item.get('rendszam')}
      </h1>
      <CarEditFormContainer initialValues={item} onSubmit={onCarChange} />
      <div className="main-back"><Link to="/" className="back">Back</Link></div>
      <div className="main-next"><Link to='/newway' className="next">Tovább az útra</Link></div>
    </div>
  );
}

export default TodoDetail;
