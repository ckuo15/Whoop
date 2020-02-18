import React from "react";

class SearchItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: null
    };
  }

  componentDidMount() {
    this.props.fetchPhotos(this.props.store._id)
      .then(photo => {
        if (photo.businessPhotos.data.length > 0) {
          return this.setState({ photo: photo.businessPhotos.data[0].photoURL})
        } else {
          return this.setState({ photo: "static/images/nobusinessphoto.png" })
        }
      })
  }
  
  render() {
    return (
      <div className="stores" onClick={() => this.props.history.push(`/businesses/${this.props.store._id}`)}>
        <div className="store">
          <div className="middle-content">
            <div className="store-picture">
              <img
                className="business-pic"
                src={this.state.photo}
              />
            </div>
            <div className="store-description">
              <p className="store-name">{this.props.store.name}</p>
              <img
                className="store-stars"
                src="/static/images/review-stars.png"
              />
              <p className="store-price">{this.props.store.price_range}</p>
              <p className="store-number">{this.props.store.phone}</p>
              <p className="store-address">{this.props.store.address}</p>
              <p className="store-city">{this.props.store.city + ", " + this.props.store.state + " " + this.props.store.zipcode}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchItem;