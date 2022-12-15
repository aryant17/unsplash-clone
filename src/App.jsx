import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ImageGrids from "./components/ImageGrids";
import Modal from "./components/Modal";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/image" element={<Modal />} />
        </Routes>
      </BrowserRouter> */}

      <Header />
      <UploadForm />
    </>
  );
}

export default App;
