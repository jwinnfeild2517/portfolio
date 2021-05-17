

import React from 'react';
import BEMHelper from "react-bem-helper";


const classes = new BEMHelper('magazine');

export default class MagazineCutout extends React.Component {

  state = {
    selectedFile: null
  }

  // allows us to generate class names using nav
  // classes = new BEMHelper('magazine');
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) });

  };


  render() {
    const changedClips = document.querySelectorAll(".magazine__image-container > img:nth-child(-n+5)");

    const back_image = document.querySelector(".magazine__image-container > img:nth-child(6)");

    const clipPathMaker = () => {
      return `${getRand(0, 100)}% ${getRand(0, 100)}%`;
    }

    const changeClip = () => {
      back_image.style.display = "block"
      changedClips.forEach(item => {
        item.style.display = "block";
        item.style.clipPath = `polygon(${clipPathMaker()}, ${clipPathMaker()}, ${clipPathMaker()}`;
      });
    }

    const getRand = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }

    changedClips.forEach(image => {
      image.src = this.state.selectedFile;
      back_image.src = this.state.selectedFile
    });


    return(
      <div {...classes()}>
        <div {...classes('input-container')} >
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={this.onFileChange}
          />
        </div>
        <a {...classes('image-container')} onClick={changeClip}>
          <h5>Upload And Click Image</h5>
          <img alt="uploaded item" />
          <img alt="uploaded item"/>
          <img alt="uploaded item"/>
          <img alt="uploaded item"/>
          <img alt="uploaded item"/>
          <img alt="uploaded item"/>
        </a>
      </div>
    )
  }

}