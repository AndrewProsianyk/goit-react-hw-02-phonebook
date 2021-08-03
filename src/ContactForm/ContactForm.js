import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        name: '',
        number:''
    }


    inputChange = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    onSubmitForm = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.name, this.state.number);
        this.setState({
            name: '',
            number: ''
        })
    }
    render() {
        return (
        <form onSubmit={this.onSubmitForm}>
          <label>Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.inputChange}
              value={this.state.name}
            />
          </label>

          <label>Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.inputChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        )
    }
}
export default ContactForm;