import React, { Component } from 'react';


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.update = this.update.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  fetchData() {
    // don't search if no term
    if(this.state.searchTerm === "") {
      return null;
    }

    let searchTerm;

    if(this.state.searchTerm.split(" ").length > 1) {
      searchTerm = this.state.searchTerm.split(" ").join("+");
    } else {
      searchTerm = this.state.searchTerm;
    }

    const apiKey = '&api_key=f756f0c479cd4f73ea7a0b361c580cab';
    let baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&nojsoncallback=1&format=json';
    baseUrl = baseUrl + apiKey + `&tags=${searchTerm}`;
    console.log(searchTerm);

    fetch(baseUrl).then(response => response.json())
      .then(images => {
      this.props.updateFromChild("images", images.photos.photo);
    })
    .then(() => this.setState({searchTerm: ""}) );

  }

  render() {
    return (
      <div className="search-comp">
        <input
          type="text"
          placeholder="Search Here!"
          value={this.state.searchTerm}
          onChange={this.update("searchTerm")}
        />

      <button onClick={this.fetchData}> Search</button>

      </div>
    );
  }
}




export default Search;
