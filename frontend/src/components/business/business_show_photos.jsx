import React from 'react';

class BusinessShowPhotos extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="business-show-photo-li">
        <img className="business-show-photo-img" src={this.props.src}/>
      </li>
    )
  }
}

export default BusinessShowPhotos