import React, { Component } from 'react';
import '../styles/registrationForm.css';

class RegistrationForm extends Component {

  render() {

    return (
      <div className="registration-form-container">
        <form className="registration-form">
          <label htmlFor="loginInput">
            Логин
          </label>
          <input id="loginInput" />

          <label htmlFor="EmailInput">
            Почта
          </label>
          <input id="EmailInput" />

          <label htmlFor="PasswordInput">
            Пароль
          </label>
          <input id="PasswordInput" />

          <label htmlFor="PasswordAccessInput">
            Подтвердите пароль
          </label>
          <input id="PasswordAccessInput" />
        </form>
      </div>
    );
  }
}

export default RegistrationForm;