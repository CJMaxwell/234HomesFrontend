import React from 'react';

interface Props {
  imgUrl?: string;
  height?: string;
}

const ProjectCard: React.FC<Props> = ({ imgUrl = '' }) => {
  return (
    <div className="max-w-xs overflow-hidden rounded-lg border border-gray-200">
      <img className="w-full object-cover" src={imgUrl} alt="" />
      <div className="px-6 py-4">
        <p className="text-gray-700">Lorem ipsum dolor sit amet,consetetur sadipscing elitr</p>
      </div>
    </div>
  );
};

export default ProjectCard;
