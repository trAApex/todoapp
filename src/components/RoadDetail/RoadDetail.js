import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import RenderField from '../RenderField';
import { Field, reduxForm } from 'redux-form/immutable';

import './RoadDetail.css';

let WayEditForm = props => {
  const { handleSubmit } = props;
  return  <form onSubmit={handleSubmit}>
            <h4 className="reszletes-ut">Részletes út megadása:</h4>
              <span className="auto-tipus resz">Autó típusa:</span> <Field className="auto-tipus-ketto resz-egy" type="text" name="auto" placeholder="auto" component={RenderField}/>
              <span className="rendszam-tipus resz">Rendszám:</span> <Field className="rendszam-tipus-ketto resz-egy" type="text" name="rendszam" placeholder="rendszam" component={RenderField}/>
              <span className="honnan-tipus resz">Honnan:</span> <Field className="honnan-tipus-ketto resz-egy" type="text" name="honnan" placeholder="honnan" component={RenderField}/><br/>
              <span className="hova-tipus resz">Hova:</span> <Field className="hova-tipus-ketto resz-egy" type="text" name="hova" placeholder="hova" component={RenderField}/>
              <span className="km-tipus resz">Kilométer:</span> <Field className="km-tipus-ketto resz-egy" type="text" name="kilometer" placeholder="kilometer" component={RenderField}/>
              <span className="nap-tipus resz">Nap:</span> <Field className="nap-tipus-ketto resz-egy" type="text" name="date" placeholder="date" component={RenderField}/>
              <button className="gomb-tipus" type="submit">Add to Server</button>
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
    <div className="minden">
    <h2>Út részletes adatai</h2>
      <WayEditFormContainer initialValues={item} onSubmit={onWayChange} />
      {
        <div className="vegeredmeny">
          <hr className="hr"/>
          <h4>Az általad megadott út adatai:</h4>
          <span className="veg-honnan veg">Honnan: </span><span className="veg-honnan-egy veg-egy">{item.get('honnan')}</span><br /> 
          <span className="veg-hova veg">Hova: </span><span className="veg-hova-egy veg-egy">{item.get('hova')}</span><br /> 
          <span className="veg-mivel veg">Milyen járművel: </span><span className="veg-mivel-egy veg-egy">{item.get('auto')}</span><br /> 
          <span className="veg-rendszam veg">Rendszáma: </span><span className="veg-rendszam-egy veg-egy">{item.get('rendszam')}</span><br /> 
          <span className="veg-km veg">Hány kilóméter: </span><span className="veg-km-egy veg-egy">{item.get('kilometer')}</span><br /> 
          <span className="veg-nap veg"> Melyik nap: </span><span className="veg-nap-egy veg-egy">{item.get('date')}</span>
          <hr className="hr"/>
        </div>
        
      }
      <div className="fene"><Link className="back-gomb" to="/newway">Vissza</Link></div>
    </div>
  );
}

export default NewWay;