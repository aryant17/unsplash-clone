import React, { useEffect, useState } from "react";
import { CgAdd } from "react-icons/cg";
import ImageGrids from "./ImageGrids";
import Progress from "./Progress";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const types = ["image/png", "image/jpeg", "image/jpg"];

  const onChangeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select valid format");
    }
  };

  return (
    <>
      <div className="mt-10 mb-10 grid cols-1 place-items-center">
        <h1>Upload image below in jpeg, jpg or png format only</h1>
        <div className="mt-5 flex items-center">
          <label className="mx-2" htmlFor="image">
            <CgAdd size={35} />
            <input
              id="image"
              type="file"
              style={{ display: "none" }}
              onChange={onChangeHandler}
            />
          </label>
          <h3 className="font-bold text-xl">{file && file.name}</h3>
        </div>
        <div style={{ color: "red" }} className="mt-4">
          {error}
        </div>

        {file && <Progress file={file} setFile={setFile} />}
      </div>

      <ImageGrids file={file} />
    </>
  );
};

export default UploadForm;
