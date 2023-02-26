import { useState } from "react";
import { useContext } from "react"
import { ImageContext } from "../App"
import Image from "./Image";
import Modal from "./Modal";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);
  const [photos, setPhotos] = useState(null)

  return (
    <>
      <h1 className="text-center mt-6 underline text-2xl">Results for {searchImage || ''}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 my-10 max-w-7xl mx-auto px-4">
        {isLoading ? "" : response.map((data, key) => <Image key={key} data={data}  setPhotos={setPhotos} />)}
      </div>
      {photos && <Modal Photos={photos} />}
    </>
  )
}

export default Images