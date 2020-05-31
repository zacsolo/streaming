import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export class StreamCreate extends Component {
  renderInput({ input, label }) {
    return (
      <div className='field'>
        <label htmlFor={label}>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues) {}

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form'
      >
        <Field label='Enter Title' name='title' component={this.renderInput} />
        <Field
          label='Enter Description'
          name='description'
          component={this.renderInput}
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
