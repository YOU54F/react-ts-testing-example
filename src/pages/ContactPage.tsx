import * as React from 'react';

export class Contact extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='contact-page-container'>
        <div className='form-message'>
          <p className='fade-out fade-in'>
            An example form that doesn't submit anything
          </p>
          <p className='fade-out fade-in' style={{ animationDelay: '0.755s' }}>
            Click{' '}
            <a href='mailto:yousafn@gmail.com' rel='noopener noreferrer'>
              here
            </a>{' '}
            to send me an email.
          </p>
        </div>
        <form className='contact-form'>
          <div
            className='input-container fade-out fade-in'
            style={{ animationDelay: '1.5s' }}>
            <input type='text' id='Name' className='input' placeholder='Name' />
          </div>
          <div
            className='input-container fade-out fade-in'
            style={{ animationDelay: '2.25s' }}>
            <input
              type='email'
              id='Email'
              className='input'
              placeholder='Email'
            />
          </div>
          <div
            className='input-container fade-out fade-in'
            style={{ animationDelay: '3s' }}>
            <textarea className='input' id='Message' placeholder='Message' />
          </div>
          <button
            type='button'
            id='Submit'
            className='button fade-out fade-in'
            style={{ animationDelay: '3.75s' }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
