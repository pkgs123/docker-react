import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const handleFileSelect = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setFiles(Array.from(e.dataTransfer.files));
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    axios
      .post("/server/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <div className="file-input">
          <input type="file" multiple onChange={handleFileSelect} />
        </div>
        <div
          className="drop-area"
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          Drop files here
        </div>
        <button type="submit" onClick={handleUpload}>
          Upload
        </button>
      </form>
      {uploadPercentage > 0 && (
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${uploadPercentage}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;