import React, { useState, useRef, useEffect } from "react";
import "./ColorPalette.css";
import paletteImg from './Images/palette.png';

export default function ColorPalette() {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const [isPouring, setIsPouring] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [colorMix, setColorMix] = useState([]);
  const [showMaxMessage, setShowMaxMessage] = useState(false);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => {
        setIsImageLoaded(true);
      };
    }
  }, []);


  const handleReset = () => {
    setSelectedColor("#FFFFFF");
    setColorMix([]);
    setIsPouring(true);
    setTimeout(() => setIsPouring(false), 500);
  };

  const handleImageClick = (e) => {
    if (!isImageLoaded) return;
    
    if (colorMix.length >= 3) {
      setShowMaxMessage(true);
      setTimeout(() => setShowMaxMessage(false), 2000);
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = imageRef.current;
    
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
    
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;
    
    const pixel = ctx.getImageData(x * scaleX, y * scaleY, 1, 1).data;
    const hexColor = `#${pixel[0].toString(16).padStart(2, '0')}${pixel[1].toString(16).padStart(2, '0')}${pixel[2].toString(16).padStart(2, '0')}`;
    
    const newColor = hexColor.toUpperCase();
    setSelectedColor(newColor);
    
    // Add new color with default percentage (equal distribution)
    const totalColors = colorMix.length + 1;
    const equalPercentage = Math.round(100 / totalColors);
    
    const updatedColors = [...colorMix].map(color => ({
      ...color,
      percentage: equalPercentage
    }));
    
    updatedColors.push({
      color: newColor,
      percentage: equalPercentage
    });
    
    // Adjust percentages to sum to 100
    const total = updatedColors.reduce((sum, color) => sum + color.percentage, 0);
    if (total !== 100) {
      updatedColors[0].percentage += (100 - total);
    }
    
    setColorMix(updatedColors);
    setIsPouring(true);
    setTimeout(() => setIsPouring(false), 500);
  };

  const handleImageHover = (e) => {
    if (!isImageLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = imageRef.current;
    
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
    
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;
    
    const pixel = ctx.getImageData(x * scaleX, y * scaleY, 1, 1).data;
    const hexColor = `#${pixel[0].toString(16).padStart(2, '0')}${pixel[1].toString(16).padStart(2, '0')}${pixel[2].toString(16).padStart(2, '0')}`;
    
    setSelectedColor(hexColor.toUpperCase());
  };

const draggingRef = useRef(null);

const handleDragStart = (e, index) => {
  draggingRef.current = {
    index,
    startX: e.clientX,
    leftPercent: colorMix[index].percentage,
    rightPercent: colorMix[index + 1].percentage
  };
  document.addEventListener("mousemove", handleDragging);
  document.addEventListener("mouseup", handleDragEnd);
};
const handleDragging = (e) => {
  if (!draggingRef.current) return;
  
  const { index, startX, leftPercent, rightPercent } = draggingRef.current;
  const deltaX = e.clientX - startX;
  const container = document.querySelector('.color_slider_container');
  const containerWidth = container.offsetWidth;
  
  // Calculate percentage change based on mouse movement
  const deltaPercent = Math.round((deltaX / containerWidth) * 100);
  
  // Calculate new percentages
  const newLeftPercent = leftPercent + deltaPercent;
  const newRightPercent = rightPercent - deltaPercent;
  
  // Validate percentages (must be between 0 and 100)
  if (newLeftPercent < 0 || newRightPercent < 0) return;
  
  // Update the color mix
  const updated = [...colorMix];
  updated[index] = { ...updated[index], percentage: newLeftPercent };
  updated[index + 1] = { ...updated[index + 1], percentage: newRightPercent };
  
  setColorMix(updated);
};

const handleDragEnd = () => {
  draggingRef.current = null;
  document.removeEventListener("mousemove", handleDragging);
  document.removeEventListener("mouseup", handleDragEnd);
};

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      
      <canvas ref={canvasRef} style={{ display: "none" }} />
      
      <div className="image-container">
        <img
          ref={imageRef}
          src={paletteImg}
          alt="Color Picker"
          onMouseMove={handleImageHover}
          onClick={handleImageClick}
          className="color-picker-image"
          crossOrigin="anonymous"
        />
        {!isImageLoaded && <div className="loading-message">Loading image...</div>}
      </div>
      
      <div className={`arrow ${isPouring ? "pour-animation" : ""}`}>↓</div>
      
      <div className="color_slider_container">
  {colorMix.map((color, index) => (
    <div
      key={index}
      className="color-segment"
      style={{
        backgroundColor: color.color,
        flexGrow: color.percentage,
        position: 'relative',
      }}
    >
      <span className="color-label" style={{ color: getContrastColor(color.color) }}>
        {color.percentage}%
      </span>
      {index < colorMix.length - 1 && (
        <div
          className="divider"
          onMouseDown={(e) => handleDragStart(e, index)}
        />
      )}
    </div>
  ))}
</div>

      
      <button 
        className="reset-button"
        onClick={handleReset}
      >
        Reset Colors
      </button>
      
      {showMaxMessage && (
        <div className="max-message">
          Maximum of 3 colors reached!
        </div>
      )}
    </div>
  );
}

// Helper function to determine text color based on background color
function getContrastColor(hexColor) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#FFFFFF";
}