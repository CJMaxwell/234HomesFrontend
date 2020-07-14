import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

interface Props {
  userName?: string;
  userImg?: string;
  location?: string;
  rating?: string;
  projectUrl?: string;
  padding?: string;
}

const Wrapper = styled.section`
  h1 {
    color: ${({ theme }) => theme.colors.gray5};
    font-weight: 600;
  }
  .rating {
    color: ${({ theme }) => theme.colors.orange3};
  }
  .location {
    font-size: 0.8rem;
  }
  .rating-img {
    height: 0.9rem;
    width: 0.9rem;
  }
  .comment {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray5}
  }
`;

const ReviewCard: React.FC<Props> = ({
  userName = '', userImg = '', padding = '',
  location = '', rating = '', projectUrl = ''
}) => {

  const theme = useContext(ThemeContext);

  return (
    <Wrapper className={`${padding}`}>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex justify-between items-start">
            <img className="inline-block h-16 w-16 rounded-full" src={userImg} alt={userName} />
            <div className="pl-4">
              <h1>{userName}</h1>
              <p className="location">{location}</p>
            </div>
            <div className="pl-4 flex items-center">
              <span className="pr-1 rating">{rating}</span>
              <img className="inline-block rating-img" src="/img/star-about.svg" alt="Star rating" />
            </div>
          </div>
        </div>
        <div>
          <img className="inline-block h-12 w-16 rounded-md" src={projectUrl} alt="Bathroom Cabinet" />
        </div>
      </div>
      <p className="mt-5 comment w-full text-justify">Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>

    </Wrapper>
  )
}

export default ReviewCard
