import React from 'react';
import styled from 'styled-components';

interface Props {
  imgUrl?: string;
  height?: string;
  title?: string;
  tags?: string[];
  location?: string;
}

const ProjectImg = styled.section<Props>`
  border-radius: 10px;
  overflow: hidden;
  background-image: url('${({ imgUrl }) => imgUrl}');
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  height: 10.7rem;
`;
const Wrapper = styled.section.attrs({
  className: "max-w-xs overflow-hidden rounded-lg border border-gray-200"
})`
  background-color: ${({ theme }) => theme.colors.gray22};

  .proj-title,.proj-tag, .proj-loc {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 0.8rem;
    font-weight: 600;
  }
  .proj-tag, .proj-loc {
    font-size: 0.65rem;
  }
  .proj-tag:not(:last-child) {
    padding-right: 2px;
    display: inline-block;
  }
`;

const DashboardProjectCard: React.FC<Props> = ({ imgUrl, height, title, tags, location }) => {
  return (
    <Wrapper >
      <ProjectImg imgUrl={imgUrl} height={height} />
      <section className="px-6 py-4">
        <p className="text-gray-700 proj-title">{title}</p>
        <section>
          {
            tags && tags.map(tag => (
              <span key={`productTag${tag}`} className="proj-tag">{tag}</span>
            ))
          }
          <span className="proj-loc">{location}</span>
        </section>
      </section>
    </Wrapper>
  );
};

export default DashboardProjectCard;
