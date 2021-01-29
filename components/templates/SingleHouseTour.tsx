import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Offering from '../Organisms/Offering';
import MostTalkedHouseTours from '../Organisms/MostTalkedHouseTours';
import HouseTourImage from '../atoms/HouseTourImage';
import useHouseTours from '../../hooks/useHouseTours';
import Layout from '../Layouts/Layout';

const Wrapper = styled.section`
  .breadcrumb {
    color: ${({ theme }) => theme.colors.gray5};
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  .breadcrumb li:not(:last-child) {
    padding-right: 0.8rem;
  }
  .most-talked {
    color: ${({ theme }) => theme.colors.gray1};
  }

  .house-tour-slides .slick-prev,
  .house-tour-slides .slick-next {
    position: absolute;
    top: 50%;
    z-index: 1;
  }

  .house-tour-slides {
    position: relative;
  }

  .house-tour-slides .slick-prev,
  .house-tour-slides .slick-next {
    position: absolute;
    top: 42%;
    z-index: 1;
  }

  .house-tour-slides .slick-prev {
    left: 5%;
  }

  .house-tour-slides .slick-next {
    right: 5%;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  className: 'house-tour-slides',
};

const SingleHouseTour = () => {
  const router = useRouter();
  const { id } = router.query;

  const { houseTour, loading } = useHouseTours(id as string);

  return (
    <Layout>
      <Wrapper>
        <div className="general-padding container mx-auto">
          <Offering />
        </div>
        <section className="general-padding container mx-auto py-10">
          <ul className="flex items-center breadcrumb">
            <li>House Tours</li>
            <li>
              <img src="/img/direction.svg" alt="Breadcrumb navigation" />
            </li>
            <li>{houseTour?.title}</li>
          </ul>
          {houseTour && (
            <section className="pt-20">
              <Slider {...settings}>
                {houseTour.slides.map((slide: any, index: number) => (
                  <div key={slide.photo} className="w-full">
                    <HouseTourImage
                      imgUrl={slide.photo}
                      index={index + 1}
                      total={houseTour.slides.length}
                      desc={slide.description}
                    />
                  </div>
                ))}
              </Slider>
            </section>
          )}
        </section>
        <h1 className="mt-12 mb-8 text-center font-semibold most-talked">Most Talked About</h1>
        <section className="container mx-auto general-padding grid grid-cols-3 gap-8 mb-20">
          <MostTalkedHouseTours imgUrl="/img/Image__Sss__9.png" />
          <MostTalkedHouseTours imgUrl="/img/Adora_NH_ss.png" />
          <MostTalkedHouseTours imgUrl="/img/Adora_NH---ss.png" />
          <MostTalkedHouseTours imgUrl="/img/sidekix-media-I_QC1JICzA0-un.png" />
          <MostTalkedHouseTours imgUrl="/img/amber-79ePIEybmzQ-unsplash.png" />
          <MostTalkedHouseTours imgUrl="/img/Adora_NH_single_story.png" />
        </section>
      </Wrapper>
    </Layout>
  );
};

export default SingleHouseTour;
