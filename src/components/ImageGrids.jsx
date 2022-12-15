import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase-config";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import {
  CgLoadbar,
  CgMergeVertical,
  CgSearch,
  CgSoftwareDownload,
  CgTrash,
} from "react-icons/cg";

import Modal from "./Modal";

const ImageGrids = ({ file }) => {
  const [doc, setDoc] = useState([]);
  const [isloading, setIsloaded] = useState(false);
  const collectionRef = collection(db, "images");
  const q = query(collectionRef, orderBy("createdAT", "desc"));

  const getData = async () => {
    setIsloaded(true);
    const querySnapshot = await getDocs(q);
    let document = [];
    querySnapshot.forEach((doc) => {
      document.push({ ...doc.data(), id: doc.id });
    });

    setDoc(document);
    setIsloaded(false);
  };

  useEffect(() => {
    getData();
  }, [file]);

  return isloading ? (
    <LoadingSpinner />
  ) : (
    <div
      className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4 place-items-center items-center"
      style={{
        maxWidth: "90%",
        margin: "auto",
      }}
    >
      {doc.map((item) => {
        return (
          <div
            className="border-2 border-slate-300"
            style={{
              maxHeight: "280px",
              maxWidth: "280px",
            }}
            key={item.id}
          >
            <img
              style={{
                height: "200px",
                width: "200px",
              }}
              src={item.imageURL}
              alt={item.imageURL}
            />
            <div className="p-2 flex justify-between">
              <CgSearch style={{}} className="m-1" size={25} />

              <a href={item.imageURL} download={item.imageURL}>
                <CgSoftwareDownload className="m-1" size={25} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrids;
