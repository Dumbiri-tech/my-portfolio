import React from "react";
import "./Mywork.css";
import MyWorkData from "./MyWorkData";
import MyDesign from "./MyDesign";
import { useState } from "react";

const MyWork = () => {
  // State to keep track of the currently selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal with the selected image
  const openImage = (img) => {
    setSelectedImage(img);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Function to navigate to the next image
  const nextImage = () => {
    const currentIndex = MyDesign.findIndex(
      (design) => design.img === selectedImage
    );
    const nextIndex = (currentIndex + 1) % MyDesign.length; // Loops back to first image
    setSelectedImage(MyDesign[nextIndex].img);
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    const currentIndex = MyDesign.findIndex(
      (design) => design.img === selectedImage
    );
    const prevIndex = (currentIndex - 1 + MyDesign.length) % MyDesign.length; // Loops back to last image
    setSelectedImage(MyDesign[prevIndex].img);
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h2>What We Do</h2>
        <p className="splash">💦</p>
      </div>

      <div className="mywork-container">
        <h3>Graphic Designs 👉</h3>
        {MyDesign.map((design, index) => (
          <img
            key={index}
            src={design.img}
            alt={`Graphic design ${index + 1}`}
            onClick={() => openImage(design.img)} // Open image in modal on click
            className="thumbnail"
          />
        ))}
      </div>

      <div className="mywork-container">
        <h3>Web Designs 👉</h3>
        {MyWorkData.map((work, index) => (
          <img
            key={index}
            src={work.img}
            alt={`Web design ${index + 1}`}
            onClick={() => openImage(work.img)} // Open image in modal on click
            className="thumbnail"
          />
        ))}
      </div>

      {/* Modal for full-screen image view */}
      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedImage}
              alt="Full screen view"
              className="full-screen-image"
            />
            <div className="modal-controls">
              <button onClick={prevImage}>👈</button>
              <button onClick={nextImage}>👉</button>
            </div>
          </div>
        </div>
      )}

      <div className="mywork-showmore">
        <p>Show More</p>
        <p>➡️</p>
      </div>
    </div>
  );
};

export default MyWork;
