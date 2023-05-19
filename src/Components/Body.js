import { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import { client_id, randomPhotoUrl } from "../Config";
import Pagination from "./Pagination";
import Shimmer from "./Shimmer";

const Body = () => {
  const [img, setImg] = useState([]);
  const [page, setPage] = useState(1);

  // Fetching Data
  async function fetchImages() {
    axios
      .get(`${randomPhotoUrl}client_id=${client_id}&page=${page}&per_page=12`)
      .then((response) => {
        {
          window.innerWidth > "768"
            ? setImg(response.data)
            : setImg(img.concat(response.data));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchImages();
  }, [page]);

  // Infinite Scroll
  async function handleScroll() {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (window.innerWidth < "768") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      {img.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="w-full p-10 bg-white grid lg:grid-cols-4 lg:gap-5  md:grid-cols-3 md:gap-2  sm:grid-cols-2 sm:gap-2 sxl:grid-cols-1 sxl:gap-4">
          {img?.map((image) => (
            <ImageCard {...image} key={image.id} />
          ))}
        </div>
      )}

      {window.innerWidth > "768" ? (
        <Pagination
          handlePrevPage={() => page > 1 && setPage(page - 1)}
          handleNextPage={() => setPage(page + 1)}
          page={page}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Body;
