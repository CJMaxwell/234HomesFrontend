import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useRouter } from 'next/router'


import withApollo from '../../lib/withApollo';
import useProject from '../../hooks/useProject';
import useProfile from '../../hooks/useProfile';
import Navbar from '../Organisms/Navbar';
import Offering from '../Organisms/Offering';
import ProjectSlider from '../Organisms/ProjectSlider';
import MostTalkedHouseTours from '../Organisms/MostTalkedHouseTours';
import Footer from './Footer';
import HouseTourImage from '../atoms/HouseTourImage';
import ProjectListingCard from '../Organisms/ProjectListingCard';


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
  z-index:1;
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
  className: 'house-tour-slides'
};


const banners = [
  {
    id: 1,
    url: '/img/AH-inner-one.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi possimus voluptate, in libero perspiciatis blanditiis nobis voluptates voluptatum quaerat dolor nemo provident quas ullam eligendi rerum deleniti mollitia a cupiditate dolore accusamus deserunt. Blanditiis tempora et deserunt unde recusandae?'
  },
  {
    id: 2,
    url: '/img/AH--inner-two.png',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    id: 3,
    url: '/img/AH--inner-three.png',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur.'
  }
]

const SingleProject = () => {
  const { profile, uploadProfilePhoto } = useProfile();
  const router = useRouter();
  const { id } = router.query;
  const { project, projectLoading: loading } = useProject(id as string);
  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
      </div>
      <section className="general-padding container mx-auto py-10">
        <ul className="flex items-center breadcrumb">
          <li>Projects</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>
            {project?.title}
          </li>
        </ul>
        <section className="pt-20">
          <Slider {...settings}>
            {banners.map(banner => (
              <div key={banner.id} className='w-full'>
                <ProjectSlider
                  imgUrl={banner.url}
                />
              </div>
            ))}
          </Slider>
        </section>
      </section>
      <h1 className="mt-12 mb-8 text-center font-semibold most-talked">Similiar Projects</h1>
      <section className="container mx-auto general-padding grid grid-cols-3 gap-8 mb-20">
        <ProjectListingCard title="Lorem Ipsum et" category="Kitchen" imgUrl="/img/Image__Sss__9.png" />
        <ProjectListingCard title="Lorem Ipsum et" category="Living Room" imgUrl="/img/Adora_NH_ss.png" />
        <ProjectListingCard title="Lorem Ipsum et" category="Bedroom" imgUrl="/img/Adora_NH---ss.png" />
        <ProjectListingCard title="Lorem Ipsum et" category="Bathroom" imgUrl="/img/sidekix-media-I_QC1JICzA0-un.png" />
        <ProjectListingCard title="Lorem Ipsum et" category="Bedroom" imgUrl="/img/amber-79ePIEybmzQ-unsplash.png" />
        <ProjectListingCard title="Lorem Ipsum et" category="Kitchen" imgUrl="/img/Adora_NH_single_story.png" />
      </section>
      <Footer />
    </Wrapper>
  );
};

export default withApollo()(SingleProject);
