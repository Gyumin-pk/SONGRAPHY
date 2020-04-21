import React, {Component} from 'react';

class  Songname extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  SearchName = (event) => {
    if(event.key === 'Enter'){
      alert("Can't found data about '"+this.state.name+"' Sorry!");
    }
  }
          
  render() {
    return (
      <form>
        <input
          className = "searchbox"
          placeholder="Search"
          value={this.state.name}
          onChange={this.handleChange}
          onKeyPress={this.SearchName}
        />
      </form>
    );
  }
}

export default Songname;