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
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export { Form };
