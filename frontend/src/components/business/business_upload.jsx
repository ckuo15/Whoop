import React from "react";
import FormData from 'form-data';
import NavBarContainer from "../nav/navbar_container";
import BusinessUploadCSS from '../../stylesheets/business_upload.css'
import { addBusinessPhoto } from "../../util/businesses_api_util";

class BusinessUpload extends React.Component {
  constructor(props) {
    super(props);

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(event) {
    event.preventDefault();
    let photoFile = new FormData(); // Make a new FormData object from our form-data npm package
    Array.from(event.target.files).forEach(file => { //  Turn our FileList from the input="file" into an array then iterate
      return photoFile.append('photoFile', file); // For each file give it a name of 'photoFile' so multer in businesses.js understands it, and append the file
    });
    photoFile.append('uploader', `${this.props.userId}`) // Append the userId to the req.body as uploader since user ID is required in our schema
    addBusinessPhoto(this.props.businessId, photoFile) // Dispatch our action 
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
                  name="photoFile"
                  onChange={this.handleUploadImage} // file handling of uploading image
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

