import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import RenderField from './RenderField';
import { Field, reduxForm } from 'redux-form/immutable';

let WayEditForm = props => {
  const { handleSubmit } = props;
  return  <form onSubmit={handleSubmit}>
            <h4>Részletes út megadása:</h4>
              Autó típusa: <Field type="text" name="auto" placeholder="auto" component={RenderField}/>
              Rendszám: <Field type="text" name="rendszam" placeholder="rendszam" component={RenderField}/>
              Honnan: <Field type="text" name="honnan" placeholder="honnan" component={RenderField}/><br/>
              Hova: <Field type="text" name="hova" placeholder="hova" component={RenderField}/>
              Kilométer: <Field type="text" name="kilometer" placeholder="kilometer" component={RenderField}/>
              Nap: <Field type="text" name="date" placeholder="date" component={RenderField}/>
              <button type="submit">Add to Server</button>
          </form>
}

let WayEditFormContainer = reduxForm({
  form: 'addWayForm' // a unique name for this form
})(WayEditForm);

function NewWay({item, onWayChange}){
  if(!item) {
    return (
      <Redirect to="/" />
    )
  }
  return(
    <div>
      <WayEditFormContainer initialValues={item} onSubmit={onWayChange} />
      <div><Link to="/newway">back</Link></div>
      {
        <div>
          <span>Az általad megadott út adatai:</span>
          <span>Honnan: {item.get('honnan')} - 
                Hova: {item.get('hova')} - 
                Milyen járművel: {item.get('auto')} - 
                Rendszáma: {item.get('rendszam')} -
                Hány kilóméter: {item.get('kilometer')} -
                Melyik nap: {item.get('date')}
          </span>
        </div>
      }
    </div>
  );
}

export default NewWay;