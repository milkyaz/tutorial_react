import React from "react";
//Пробный коммит
class Form extends React.Component {
  state = {
    firstName: "",
    email: "",
  };
  //с помощью event я могу достать некое значение
  handleChange = (event) => {
    //Можно использовать одну и ту же функцию для разных секций, а ключ использовать динамический([event.target.name])
    this.setState({ [event.target.name]: event.target.value });
  };

  validateName = () => {
    if (this.state.firstName.length < 5) {
      alert("Your first name can't be less than 7");
    }
  };

  validateEmail = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.email
      )
    ) {
      alert("email is not valid");
    }
  };

  render() {
    const { firstName, email } = this.state;
    return (
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          onChange={this.handleChange}
          onBlur={this.validateName}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />
      </div>
    );
  }
}

export { Form };
