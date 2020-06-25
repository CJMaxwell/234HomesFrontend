import React from 'react';
const textPosition = {
  top: '80%',
  left: '5%',
};
const share = {
  top: '5%',
  right: '2%',
};

const DIYCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
      <img
        className="w-full"
        src="two-white-and-brown-armchairs.png"
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
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18, 2020</p>
          </div>
        </div>
      </div>
      <button className="absolute" style={share}>
        <img className="h-8 w-8" src="/share.svg" alt="share" />
      </button>
    </div>
  );
};

export default DIYCard;
