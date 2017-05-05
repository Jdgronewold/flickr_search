import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.returnSearch = this.returnSearch.bind(this);
  }

  returnSearch() {
    this.props.updateFromChild('detail', false);
  }

  render() {
    const { image } = this.props;
    return (
      <div className="image-detail">
        <button onClick={this.returnSearch}> Return to search </button>
        <div className="image-item">
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            alt="No img"
            />
          <span>{image.title}</span>
        </div>

      </div>
    );
  }
}

export default Detail;
