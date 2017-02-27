import React from 'react';

export default class LookupStock extends React.Component {
  constructor() {
    super();

    this.state = { stock: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ stock: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.stock);
  }

  fetchStock() {
    return 'data swag'
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Lookup Stock</label>
          <input
            type="text"
            name="stock"
            value={this.state.stock}
            onChange={this.handleChange}
            placeholder="AAPL"
          />
        </div>

        <button className="ui button teal" type="submit">Submit</button>
      </form>
    )
  }
}
