import React from 'react';
import BusinessShowCSS from '../../stylesheets/business_show.css';

class BusinessShowPhotos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      modalPhoto: "",
      selectedPhoto: ''
    };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal(event) {
    this.setState({ showModal: true, modalPhoto: event.target.src, selectedPhoto: event.target.dataset.key })

    let selected = document.getElementsByClassName('show-right-photos-selected')
    if (selected.length > 0) {
    }
    event.target.className = 'show-right-photos-selected';

    const container = document.getElementsByClassName('business-show-container')
    if (container.length > 0) {
      container[0].className = 'business-show-container-hidden'
    }
  }

  closeModal() {
    this.setState({ showModal: false, modalPhoto: '', selectedPhoto: '' })
  }

  render() {
    let date = new Date(this.props.date).toString().split(" ");
    let dateStr = date[1] + ", " + date[2] + " " + date[3];

    const postModal = (
      <div className="show-full-modal-container">
        <div className="show-inner-modal-text-container">
          <div className="show-close-container">
            <div className="close-modal-text"><h3>Close</h3><span>X</span></div>
          </div>
          <div className="show-inner-modal-container">
            <div className="show-left-picture-container">
              <img src={this.state.modalPhoto} alt="uploaded-photo"/>
              <div className="show-left-text-container">
                <div className="left-text-container-positioning">
                  <p>{dateStr}</p>
                  <div className="show-left-divider-bar"></div>
                  <h3>Username</h3>
                </div>
              </div>
            </div>
            <div className="show-right-pictures-container">
              <div className="show-right-text-container">
                <h1>Photos for {this.props.business}</h1>
              </div>
                <ul className="show-right-photos-list">
                {this.props.allPhotos.map(photo => {
                  let imgClass;
                  photo._id === this.state.selectedPhoto ? imgClass = 'show-right-photos-selected' : imgClass = 'show-picture-holder'
                  return <li className="show-right-photos" key={photo._id}><img className={imgClass} src={photo.photoURL} data-key={photo._id} alt="photo-img" onClick={this.showModal} /></li>}
                )}
                </ul>
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <li className="business-show-photo-li">
        <img className="business-show-photo-img" data-key={this.props.photoD._id} src={this.props.photo} onClick={this.showModal}/>
        { this.state.showModal ? postModal : null } 
      </li>
    )
  }
}

export default BusinessShowPhotos