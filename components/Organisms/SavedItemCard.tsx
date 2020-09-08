import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  imgUrl?: string;
  height?: string;
  title?: string;
  tag?: string;
  url?: string;
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
const Wrapper = styled.a.attrs({
  className: "max-w-xs overflow-hidden rounded-lg border border-gray-200"
})`
  background-color: ${({ theme }) => theme.colors.gray22};

  .proj-title{
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 0.8rem;
    font-weight: 600;
  }
  .proj-tag {
    font-size: 0.65rem;
    color: ${({ theme }) => theme.colors.gray1};

  }
  .saved-icon {
    height: 0.9rem;
    width: 1.05rem;
    padding-right: 0.35rem;
  }
  .saved-icon-private {
    height: 0.8rem;
    width: 0.8rem;
    padding-right: 0.35rem;
  }
`;

const SavedItemCard: React.FC<Props> = ({ imgUrl, height, title, tag, url }) => {
  return (
    <Link href="/saved-item-group-list">
      <Wrapper>
        <ProjectImg imgUrl={imgUrl} height={height} />
        <section className="px-6 py-4">
          <p className="text-gray-700 proj-title">{title}</p>
          <section className="flex items-center">
            {
              tag === 'Everyone' ? <img src="/img/saved/group.svg" className="saved-icon" alt="Photo" /> : <img src="/img/saved/password.svg" className="saved-icon-private" alt="Photo" />
            }
            <span className="proj-tag">{tag}</span>
          </section>
        </section>
      </Wrapper>
    </Link>
  );
};

export default SavedItemCard;
