import React, { useEffect } from "react";
import useFirebaseHook from "../config/useFirebaseHook";

const Progress = ({ file, setFile }) => {
  const { progress, url } = useFirebaseHook(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [file, url, setFile]);

  return (
    <div className="text-center text-2xl font-semibold"> Uploading... </div>
  );
};

export default Progress;
