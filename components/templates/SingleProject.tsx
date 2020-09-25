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
import UserCard from '../molecules/UserCard';
import ProjectListingCard from '../Organisms/ProjectListingCard';
import Footer from './Footer';


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

const Main = styled.section`
  width: 47.5rem;

  .main-title {
    color: ${({ theme }) => theme.colors.gray1};
    /* padding-top: 4.25rem; */
  }
  .inline-title {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
    padding-bottom: 1.05rem;
  }
  .inline-desc,
  .signup-comment {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray5};
  }
  .conversation {
    font-size: 1.4rem;
    font-weight: 600;
  }
  textarea::placeholder,
  .number-comments {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.8rem;
  }
`;

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

        <Main className="container mx-auto mb-16">
          <h1 className="capitalize main-title text-4xl font-semibold py-12">
            {project?.title}
          </h1>
          <div>
            <UserCard />
          </div>
          <section className="flex items-center mt-8">
            <span className="signup-comment font-semibold pr-2 capitalize">Sign Up to Comment</span>
            <img src="/img/comment_ss.svg" alt="comment" />
          </section>
          <section className="mt-10">
            <div className="flex items-center">
              <h1 className="conversation uppercase pr-1">CONVERSATION</h1>
              <span className="number-comments">(0) Comments</span>
            </div>
            <textarea
              className="border border-gray-200 mt-5 outline-none w-full h-20 pt-4 pl-6 rounded-md"
              name="discussion"
              id="discussion"
              placeholder="Join the discussion…"
            />
          </section>
        </Main>

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
