import React from 'react';
import $ from 'jquery';

export default class PictureUploader extends React.Component {
  constructor(props) {
   super(props);

  this.state = {
   picture: false,
    src: false
  }
}

handlePictureSelected(event) {
 var picture = event.target.files[0];
var src     = URL.createObjectURL(picture);

this.setState({
  picture: picture,
  src: src });
}

  renderPreview() {
   if(this.state.src) {
return (
  <img src={this.state.src}/>
  );
  } else {
         return (
       <p>
        No Preview
      </p>
    );
  }
 }

 upload() {
  var formData = new FormData();

 formData.append("file", this.state.picture);

   $.ajax({
   url: "http://localhost:1234/user/61ea57eae6a5be4e7d9fe54b",
   method: "POST",
   data: formData,
   cache: false,
      contentType: false,
 processData: false,
success: function(response) {
    console.log("response", response)
    // Code to handle a succesful upload
   }
  });
 }

render() {
  return (
     <div>
       <h5>Picture Uploader</h5>

       <input
        type="file"
       onChange={this.handlePictureSelected.bind(this)}
     />
       <br/>
       <div>
       {this.renderPreview()}
      </div>
      <hr/>
      <button
        onClick={this.upload.bind(this)}
       >
       Upload
        </button>
      </div>
        );
      }
     }