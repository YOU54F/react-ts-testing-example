import * as React from 'react';

import { Field, Form, Formik, FormikActions } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export class FormPage extends React.Component<{}> {
  public render() {
    return (
      <div className='container'>
        <h3>sample form</h3>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: ''
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikActions<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
          render={() => (
            <Form>
              <p>
                <label htmlFor='firstName'>First Name:- </label>
                <Field
                  id='firstName'
                  name='firstName'
                  placeholder='John'
                  type='text'
                />
              </p>

              <p>
                <label htmlFor='lastName'>Last Name:- </label>
                <Field
                  id='lastName'
                  name='lastName'
                  placeholder='Doe'
                  type='text'
                />
              </p>

              <p>
                <label htmlFor='email'>Email:- </label>
                <Field
                  id='email'
                  name='email'
                  placeholder='john@acme.com'
                  type='email'
                />
              </p>
              <p>
                <button type='submit' style={{ display: 'block' }}>
                  Submit
                </button>
              </p>
            </Form>
          )}
        />
      </div>
    );
  }
}
