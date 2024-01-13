import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 200,
  facingMode: "environment",
};

const Camera = ({ setShowCamera, setUrl }) => {
  const webcamRef = useRef(null);

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    setShowCamera(false);
  }, [webcamRef, setShowCamera, setUrl]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <div className="flex column">
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
      />
      <button className="btn" onClick={capturePhoto}>
        Capture
      </button>
    </div>
  );
};

export default Camera;
