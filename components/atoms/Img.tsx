import React, { useEffect, useState } from 'react';

const Img: React.FC<{ promise: Promise<string | ArrayBuffer | null | undefined> }> = ({
  promise,
}) => {
  const [image, setImage] = useState<string | ArrayBuffer | null | undefined>();

  useEffect(() => {
    promise.then((img) => setImage(img));
  }, []);

  return (
    <img
      src={image as string}
      alt="House tour media"
      className="absolute w-full h-full inset-0 object-cover"
    />
  );
};

export default Img;
