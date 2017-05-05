import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.returnSearch = this.returnSearch.bind(this);

    this.state = {
      date: "",
      description: ""
    };
  }

  componentDidMount() {
    const apiKey = '&api_key=f756f0c479cd4f73ea7a0b361c580cab';
    let baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&format=json&nojsoncallback=1';
    baseUrl = baseUrl + apiKey + `&photo_id=${this.props.image.id}`;

    fetch(baseUrl).then(response => response.json())
    .then(imageDetail => {
      const date = new Date(parseInt(imageDetail.photo.dateuploaded, 10)).toString();


      this.setState({
        date: date,
        description: imageDetail.photo.description._content});
    });
  }

  returnSearch() {
    this.props.updateFromChild('detail', false);
  }

  render() {
    const { image } = this.props;

    return (
      <div className="image-detail">
        <button onClick={this.returnSearch}> Return to search </button>
        <div className="detail-item">
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_z.jpg`}
            alt="No img"
            />
          <span>Title: {image.title}</span> <br/>
          <span>Date: {this.state.date}</span> <br/>
          <span>Description: {this.state.description}</span>

        </div>

      </div>
    );
  }
}

export default Detail;
