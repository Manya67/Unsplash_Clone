import { useState } from "react";
import { BsEmojiHeartEyesFill, BsEmojiHeartEyes } from "react-icons/bs";

const ImageCard = ({ id, urls, likes }) => {
  const [like, setlike] = useState(likes);
  const [likeactive, setlikeactive] = useState(false);

  function likefunction() {
    if (likeactive) {
      setlikeactive(false);
      setlike(like - 1);
    } else {
      setlikeactive(true);
      setlike(like + 1);
    }
  }

  return (
    <div className="image__container" key={id}>
      <a href={urls.regular} target="_blank">
        <img
          src={urls.regular}
          className=" w-full h-full mb-20px rounded-2xl cursor-pointer object-cover bg-battleshipgray"
        ></img>
      </a>
      <div onClick={likefunction} className="like bg-white w-full p-3">
        {!likeactive ? (
          <BsEmojiHeartEyes className="text-xl" />
        ) : (
          <BsEmojiHeartEyesFill className="text-xl" />
        )}
        <div>{like}</div>
      </div>
    </div>
  );
};
export default ImageCard;
