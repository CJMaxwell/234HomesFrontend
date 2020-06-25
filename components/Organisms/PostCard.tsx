import React from 'react';
interface Props {
  imgUrl?: string;
  height?: string;
}
const textPosition = {
  top: '65%',
  left: '5%',
};
const share = {
  top: '5%',
  right: '2%',
};

const PostCard = ({ imgUrl = '/Adora_NH_sink.png', height }: Props) => {
  return (
    <div
      className="rounded overflow-hidden shadow-lg relative text-white"
      style={{ backgroundImage: `url(${imgUrl})`, height: `${height}` }}
    >
      <img
        className="w-full inline-block"
        src={imgUrl}
        alt="Sunset in the mountains"
      />
      <div className="absolute" style={textPosition}>
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="/jonathan.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-white leading-none">Jones Reinink</p>
            <p className="text-white">Aug 18, 2020</p>
          </div>
        </div>
      </div>
      <button className="absolute" style={share}>
        <img className="h-8 w-8" src="/share.svg" alt="share" />
      </button>
    </div>
  );
};

export default PostCard;
