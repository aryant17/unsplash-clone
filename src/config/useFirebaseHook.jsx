import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { db } from "./firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { storage } from "./firebase-config";

const useFirebaseHook = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  const uploadFile = (file) => {
    const imageRef = ref(storage, `${file.name}`);
    const uploadTask = uploadBytesResumable(imageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percent);
      },
      (error) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await addDoc(collection(db, "images"), {
            imageURL: await downloadURL,
            createdAT: serverTimestamp(),
          });
          setUrl(downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    uploadFile(file);
  }, [file]);

  //               then(
  //       (snapshot) => {
  //         const progress = Math.round(
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //         );
  //                 setProgress(progress);

  //       },
  //       (error) => {
  //         setError(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setUrl(downloadURL);
  //         });
  //       }
  //     );
  //   }, [file]);

  return { progress, url, error };
};

export default useFirebaseHook;
