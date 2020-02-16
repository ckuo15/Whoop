import React from "react";
import NavBarContainer from "../nav/navbar_container";
import BusinessUploadCSS from '../../stylesheets/business_upload.css'

class BusinessUpload extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUploadImage(event) {
    event.preventDefault();
    console.log(event.target.files)
  }

  render() {
    return (
      <div className="business-upload-container">
        <NavBarContainer />
        <div className="business-upload-text-file-container">
          <div className="business-upload-centering-div">
            <div className="business-upload-text-container">
              <div className="business-upload-add-photo-text">
                <a href="#">Business title:</a>
                <span> Add Photos</span>
              </div>
              <a href="#">View all photos</a>
            </div>
            <div className="business-file-upload-container">
              <h1>Upload your photos here</h1>
              <div className="business-file-upload-container-line"></div>
              <form className="business-upload-form">
                <input
                  type="file"
                  id="file"
                  className="business-upload-inputfile"
                  onChange={this.handleUploadImage}
                />
                <label htmlFor="file">Browse Files</label>
              </form>
            </div>
            <div className="business-upload-image-container">
              <div className="business-upload-img-cont-1">
                <img src="/static/images/shaky.png" alt="shaky-phone" />
                <p>Refrain from posting shaky or out of focus photos.</p>
              </div>
              <div className="business-upload-img-cont-2">
                <img src="/static/images/camera-flash.png" alt="camera-flash" />
                <p>
                  Your photos should be well lit and bright. Don’t be afraid to
                  use the flash on your camera.
                </p>
              </div>
              <div className="business-upload-img-cont-3">
                <img src="/static/images/filters.png" alt="filter-image" />
                <p>
                  If you’re applying filters, don’t overdo them. Subtlety is
                  key.
                </p>
              </div>
              <div className="business-upload-img-cont-4">
                <img
                  src="/static/images/biz-photos.png"
                  alt="business-only-photo"
                />
                <p>Lastly, please only post photos of the business.</p>
              </div>
            </div>
          </div>
          <div className="business-upload-bottom">
            <img className="building" src="/static/images/footer.png" />
          </div>
        </div>
      </div>
    );
  }
};

export default BusinessUpload;

