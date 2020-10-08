import React ,{Fragment,useEffect } from 'react'
import { Field,FieldArray, reduxForm } from 'redux-form'
import { connect } from "react-redux";
import { Input, FormFeedback, FormText,Button } from 'reactstrap';
import {editExhibitor} from '../../store/actions/dashboardActions'
const renderField = ({ input, label, type,custom,warning, meta: { touched, error } }) => (
    <div style={{marginBottom:'4px'}}>
      <label>{label}</label>
      {/* <div>
        <input {...input} type={type} placeholder={label} style={{width:'100%',borderRadius:'4px',border:'0.5px solid grey',height:'40px'}} />
        {touched && error && <span>{error}</span>}         
      </div> */}
      <Fragment>
          <Input {...(touched ? { valid: !error } : {})} {...input} {...custom} />
          {error && <FormFeedback>{error}</FormFeedback>}
          {!error && warning && <FormText>{warning}</FormText>}
      </Fragment>
    </div>
  );

const renderMedia = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul style={{listStyle:'none'}}>
    <li>
    <Button color="info" className="btn-round" size="sm" onClick={() => fields.push({})}>
        Add Media
      </Button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((media, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Media"
          onClick={() => fields.remove(index)}
        />
        <h4 style={{color:'white'}}>Media #{index + 1}</h4>
        <Field
          name={`${media}.name`}
          type="text"
          component={renderField}
          label="Name"
        />
        <Field
          name={`${media}.url`}
          type="text"
          component={renderField}
          label="URL"
        />
        <Field
          name={`${media}.type`}
          type="text"
          component={renderField}
          label="Type"
        />
        <Field
          name={`${media}.category`}
          type="text"
          component={renderField}
          label="Category"
        />
      </li>
    ))}
  </ul>
);

const renderAmenties = ({ fields, meta: { touched, error, submitFailed } }) => (
    <ul style={{listStyle:'none'}}>
      <li>
      <Button color="info" className="btn-round" size="sm" onClick={() => fields.push({})}>
        Add Spotlight
      </Button>
      {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
      {fields.map((media, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Amenity"
            onClick={() => fields.remove(index)}
          />
          <h4 style={{color:'white'}}>Amenity #{index + 1}</h4>
          <Field
            name={`${media}.name`}
            type="text"
            component={renderField}
            label="Name"
          />
          <Field
            name={`${media}.type`}
            type="text"
            component={renderField}
            label="Type"
          />
          <Field
            name={`${media}.source`}
            type="text"
            component={renderField}
            label="Source"
          />
        </li>
      ))}
    </ul>
  );
  


const renderBooths = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul style={{listStyle:'none'}}>
    <li>
    <Button color="info" className="btn-round" size="sm" onClick={() => fields.push({})}>
        Add Booth
      </Button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((media, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Booth"
          onClick={() => fields.remove(index)}
        />
        <h4 style={{color:'white'}}>Booth #{index + 1}</h4>
        <Field
          name={`${media}.id`}
          type="text"
          component={renderField}
          label="ID"
        />
        <Field
          name={`${media}.subvenue`}
          type="text"
          component={renderField}
          label="Sub Venue"
        />
        <Field
          name={`${media}.number`}
          type="text"
          component={renderField}
          label="number"
        />
        <Field
          name={`${media}.type`}
          type="text"
          component={renderField}
          label="Type"
        />
        <Field
          name={`${media}.model`}
          type="text"
          component={renderField}
          label="Model"
        />
              <FieldArray name="amenities" component={renderAmenties}/>

      </li>
    ))}
  </ul>
);

const EditExhibitor = props => {
  const { handleSubmit, pristine, reset, submitting,match:{params} ,editExhibitor} = props
    useEffect(()=>{
        console.log(params.exhibitorId)
        editExhibitor(params.exhibitorId)
    })
  return (
    <div className="content">
<form onSubmit={handleSubmit}>
      <Field
        name="name"
        type="text"
        component={renderField}
        label="Event Name"
      />
      <Field
        name="description"
        type="text"
        component={renderField}
        label="Description"
      />
      <Field
        name="eventId"
        type="text"
        component={renderField}
        label="Event ID"
      />
      <Field
        name="phoneNo"
        type="text"
        component={renderField}
        label="Phone Number"
      />
      <Field
        name="emailId"
        type="text"
        component={renderField}
        label="Email ID"
      />
      <Field
        name="logo"
        type="text"
        component={renderField}
        label="Logo URL"
      />
      <Field
        name="exhibitorId"
        type="text"
        component={renderField}
        label="Exhibitor Id"
      />
      <Field
        name="website"
        type="text"
        component={renderField}
        label="Website URL"
      />
      <Field
        name="logo"
        type="text"
        component={renderField}
        label="Logo"
      />
      <Field
        name="address.street"
        type="text"
        component={renderField}
        label="Address - Street"
      />
      <Field
        name="address.city"
        type="text"
        component={renderField}
        label="City"
      />
      <Field
        name="address.state"
        type="text"
        component={renderField}
        label="State"
      />
      <Field
        name="address.zipcode"
        type="text"
        component={renderField}
        label="Zipcode"
      />
      <FieldArray name="metadata.media" component={renderMedia}/>
      <FieldArray name="booths" component={renderBooths}/>
      <div>
      <Button className="btn-fill" color="primary" type="submit" disabled={pristine || submitting}>
                    Submit
      </Button>
        <Button
                            className="btn-fill"
                            color="success"
                            color="primary"
                            id="tooltip324367706"
                            disabled={pristine || submitting} onClick={reset}
                          >
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
      </div>
    </form>
   
    </div> 
  )
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
  initialValues : state.dashboard.initialValues
});
const exhibitorForm = reduxForm({
  form: 'exhibitor-form' ,
  enableReinitialize:true
})(EditExhibitor)

export default connect(mapStateToProps,{editExhibitor})(exhibitorForm)