import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

// import useUser from '../../hooks/useUser';
import useProfile from '../../hooks/useProfile';
import { useRprojects } from '../../hooks/projects';
import Button from '../atoms/Button';
import ProjectCard from '../Organisms/ProjectCard';
import ReviewCard from '../Organisms/ReviewCard';
import Offering from '../Organisms/Offering';
import Layout from '../Layouts/Layout';

interface Props {
  imgUrl?: string;
}

const Wrapper = styled.div`
  .breadcrumb li:not(:last-child) {
    padding-right: 0.8rem;
  }
  .breadcrumb {
    margin-top: 3.175rem;
    margin-bottom: 2.35rem;
    color: ${({ theme }) => theme.colors.gray5};
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  .about {
    .short-desc,
    .short-desc {
      font-size: 0.8rem;
    }
  }
  .break-down-title {
    color: ${({ theme }) => theme.colors.gray5};
  }
  .bar-container {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray17};
    text-align: center;
    color: white;
    height: 0.3rem;
  }
  .bar-5 {
    width: 100%;
    height: 0.3rem;
    background-color: ${({ theme }) => theme.colors.orange1};
  }
  .show-more {
    color: ${({ theme }) => theme.colors.orange1};
    font-size: 0.7rem;
    font-weight: 600;
  }
  .education,
  .certifications {
    font-size: 0.8rem;
  }
  .edu-title,
  .cert-title,
  .qualification {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
  }
  .qualification {
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
  }
  .edu-title,
  .cert-title {
  }

  .project,
  .review-title,
  .prof-title {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
  }
  .load-more-projects {
    color: ${({ theme }) => theme.colors.gray5};
    font-weight: 600;
  }
  .leave-review,
  .customer-review {
    color: ${({ theme }) => theme.colors.gray5};
    font-weight: 600;
  }
  .project-category {
    color: ${({ theme }) => theme.colors.gray19};
    font-size: 0.8rem;
  }
  .load-more-projects {
    background-color: ${({ theme }) => theme.colors.gray17};
    width: 19rem;
    height: 2rem;
    font-size: 0.65rem;
  }
  .leave-review {
    background-color: ${({ theme }) => theme.colors.gray17};
    width: 9.9rem;
    height: 2rem;
    font-size: 0.8rem;
  }
  .customer-review {
    font-size: 0.95rem;
  }
  .rating-count {
    color: ${({ theme }) => theme.colors.orange1};
    font-weight: 600;
  }
  .star-listing span {
    padding-right: 4px;
  }
  .top-rated {
    color: ${({ theme }) => theme.colors.blue2};
    font-weight: 600;
  }
  .sec-rating {
    color: ${({ theme }) => theme.colors.gray17};
  }
  .break-down {
    .brk-down-title {
      color: ${({ theme }) => theme.colors.gray5};
    }
    .rating-value {
      color: ${({ theme }) => theme.colors.gray5};
      font-weight: 600;
    }
  }

  .aside-title {
    color: ${({ theme }) => theme.colors.gray5};
  }
  .internet {
    padding: 4px;
    background-color: ${({ theme }) => theme.colors.gray11};
  }
  .icon-wrapper {
    padding-right: 0.65rem;
  }
  .bg-achieve {
    background-color: ${({ theme }) => theme.colors.green1};
  }
  .bg-skill {
    background-color: ${({ theme }) => theme.colors.gray18};
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.7rem;
  }
  .top-rate,
  .job-success {
    font-size: 0.7rem;
  }
  .job-success {
    color: ${({ theme }) => theme.colors.gray11};
  }
  .top-rate {
    color: ${({ theme }) => theme.colors.green1};
  }
  .detail {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
    font-size: 0.95rem;
  }
  .hero-detail {
    padding-top: 9.5rem;
  }
  .prof-pin {
    width: 1rem;
    height: 1rem;
  }
  .prof-name,
  .prof-location {
    font-family: 'Raleway', sans-serif;
    color: ${({ theme }) => theme.colors.gray1};
  }
  .prof-name {
    font-size: 1.5rem;
  }
  .prof-location {
    font-size: 0.7rem;
    font-weight: 500;
  }
  .active-link {
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray4};
    padding-bottom: 0.5rem;
  }
`;

const Hero = styled.section<Props>`
  height: 16.425rem;
  background: url('${({ imgUrl }) => imgUrl}'),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroButton = styled(Button)`
  border-radius: 0px;
  text-transform: uppercase;
`;

const YourHome: React.FC<Props> = ({ imgUrl }) => {
  const router = useRouter();
  const { id } = router.query;

  const [tab, setTab] = useState('about');
  const { profile, getProfileLoading } = useProfile();
  // const { user, userLoading } = useUser(id as string);
  const { projects, loading, get: getProjects } = useRprojects();

  useEffect(() => {
    getProjects(id as string);
  }, []);

  return (
    <Layout>
      <Wrapper>
        <div className="general-padding container mx-auto">
          <Offering />
          <ul className="breadcrumb flex items-center">
            <li>Directory</li>
            <li>
              <img src="/img/direction.svg" alt="Breadcrumb navigation" />
            </li>
            <li>Your Home</li>
          </ul>
        </div>
        {profile && (
          <section>
            <Hero imgUrl={`${profile.banner || '/img/Hero.png'}`} className="border-white mb-16">
              <div className="flex justify-around hero-detail px-10">
                <div className="flex items-center">
                  <div className="pr-8 relative">
                    <img
                      src={profile.profilePhoto || '/img/dashboard/dashboardperson.svg'}
                      className="h-32 w-32 rounded-full"
                      alt="Professional"
                    />
                  </div>
                  <div>
                    <h1 className="prof-name font-semibold text-white">{profile.businessName}</h1>
                    <div className="flex items-center">
                      <img src="/img/pin.svg" className="pr-2 prof-pin" alt="Location pin" />
                      <span className="prof-location">{`${profile.city}, ${profile.state}`}</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <HeroButton width="11rem" height="3.15rem">
                    Messages
                  </HeroButton>
                </div>
              </div>
            </Hero>
            <div className="px-48 container mx-auto mb-48">
              <section className="flex justify-between items-center pb-10 pt-5">
                <ul className="text-gray-700 flex text-sm">
                  <li className="pr-8">
                    <a
                      onClick={() => setTab('about')}
                      className={`${tab === 'about' && 'active-link'}`}
                    >
                      About
                    </a>
                  </li>
                  <li className="pr-8">
                    <a
                      onClick={() => setTab('projects')}
                      className={`${tab === 'projects' && 'active-link'}`}
                    >
                      Projects
                    </a>
                  </li>
                  <li className="pr-8">
                    <a
                      onClick={() => setTab('products')}
                      className={`${tab === 'products' && 'active-link'}`}
                    >
                      Products
                    </a>
                  </li>
                  <li className="pr-8">
                    <a
                      onClick={() => setTab('reviews')}
                      className={`${tab === 'reviews' && 'active-link'}`}
                    >
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setTab('saved-ideas')}
                      className={`${tab === 'saved-ideas' && 'active-link'}`}
                    >
                      Saved Ideas
                    </a>
                  </li>
                </ul>
              </section>

              {tab === 'about' && (
                <section className="px-6 pt-8 rounded border border-gray-200 mr-12">
                  <section className="about mb-8">
                    <h1 className="prof-title">About Me</h1>
                    <article className="pt-4 short-desc">
                      {profile.bio}
                      <div className="flex items-center pt-4">
                        <span className="show-more pr-1">Show more</span>
                        <img src="/img/show-more.svg" alt="Show More" />
                      </div>
                    </article>
                  </section>
                  <div className="mb-2">
                    {/* <h3 className="aside-title">Phone Number</h3> */}
                    <p className="flex items-center pt-3">
                      <span className="icon-wrapper">
                        <img className="h-6 w-6" src="/img/phone-call.svg" alt="phone icon" />
                      </span>
                      <span className="detail">{profile.phoneNumber}</span>
                    </p>
                  </div>
                  <div className="mb-2">
                    {/* <h3 className="aside-title">Email</h3> */}
                    <p className="flex items-center pt-3">
                      <span className="icon-wrapper">
                        <img className="h-6 w-6" src="/img/email.svg" alt="email icon" />
                      </span>
                      <span className="detail">{profile.email}</span>
                    </p>
                  </div>
                  <div className="mb-2">
                    {/* <h3 className="aside-title">Personal Website</h3> */}
                    <p className="flex items-center pt-3">
                      <span className="icon-wrapper">
                        <img
                          className="h-6 w-6 internet rounded-full"
                          src="/img/internet.svg"
                          alt="internet icon"
                        />
                      </span>
                      <span className="detail">{profile.website}</span>
                    </p>
                  </div>
                  <div className="rating mb-2">
                    <h3 className="aside-title">Rating</h3>
                    <div className="pt-3 flex items-center">
                      <span className="pr-1 h-4 w-4">
                        <img src="/img/star-vendor.svg" alt="Rating" />
                      </span>
                      <span className="pr-1 h-4 w-4">
                        <img src="/img/star-vendor.svg" alt="Rating" />
                      </span>
                      <span className="pr-1 h-4 w-4">
                        <img src="/img/star-vendor.svg" alt="Rating" />
                      </span>
                      <span className="pr-1 h-4 w-4">
                        <img src="/img/star-vendor.svg" alt="Rating" />
                      </span>
                      <span className="h-4 w-4 pr-1">
                        <img src="/img/star-vendor.svg" alt="Rating" />
                      </span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <h3 className="aside-title">Key Skills</h3>
                    <div className="w-3/4">
                      <span className="mt-2 inline-block bg-skill rounded-full px-3 py-1 text-sm font-semibold mr-2">
                        Interior Design
                      </span>
                      <span className="mt-2 inline-block bg-skill rounded-full px-3 py-1 text-sm font-semibold mr-2">
                        Decoration
                      </span>
                      <span className="mt-2 inline-block bg-skill rounded-full px-3 py-1 text-sm font-semibold mr-2">
                        Painting
                      </span>
                      <span className="mt-2 inline-block bg-skill rounded-full px-3 py-1 text-sm font-semibold mr-2">
                        Lighting
                      </span>
                      <span className="mt-2 inline-block bg-skill rounded-full px-3 py-1 text-sm font-semibold mr-2">
                        Bathroom
                      </span>
                      <span className="mt-2 inline-block bg-skill rounded-full px-3 py-1 text-sm font-semibold mr-2">
                        Living Room
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="aside-title">100%</h3>
                    <div className="h-1 w-full bg-achieve mt-2" />
                    <div className="flex items-center justify-between pt-3">
                      <p className="job-success">Job Success</p>
                      <div className="flex items-center">
                        <img
                          src="/img/achievement.svg"
                          className="w-3 h-6 mr-2"
                          alt="Achievement"
                        />
                        <span className="top-rate">Top Rated</span>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {tab === 'projects' && (
                <section className="projects mt-10">
                  <div className="flex items-center justify-between mb-8">
                    <h1 className="project ab-prof-title">Projects</h1>
                    <select
                      className="project-category border border-gray-300 px-5 py-2"
                      name="category"
                      id="category"
                    >
                      <option value="Category">Category</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {projects &&
                      projects.length > 0 &&
                      // @ts-ignore
                      projects.map((project) => (
                        <ProjectCard imgUrl={project.media} title={project.title} />
                      ))}
                    {projects && projects.length === 0 && (
                      <div className="px-8 pt-8">No project created</div>
                    )}
                  </div>
                  <div className="w-full text-center">
                    <button
                      type="button"
                      className="uppercase my-8 load-more-projects font-semibold"
                    >
                      Load more projects
                    </button>
                  </div>
                </section>
              )}
              {tab === 'reviews' && (
                <section className="col-span-4 px-12 pt-8 rounded border border-gray-200">
                  <section className="reviews mt-10">
                    <div className="flex justify-between items-center">
                      <h4 className="review-title ab-prof-title">Reviews</h4>
                      <button type="button" className="uppercase leave-review">
                        Leave a review
                      </button>
                    </div>
                    <div className="flex items-center">
                      <div className="customer-review font-semibold pr-2">15 Customer Reviews</div>
                      <div className="flex justify-between items-center star-listing">
                        <span className="h-4 w-4">
                          <img src="/img/star-vendor.svg" alt="star rating" />
                        </span>
                        <span className="h-4 w-4">
                          <img src="/img/star-vendor.svg" alt="star rating" />
                        </span>
                        <span className="h-4 w-4">
                          <img src="/img/star-vendor.svg" alt="star rating" />
                        </span>
                        <span className="h-4 w-4">
                          <img src="/img/star-vendor.svg" alt="star rating" />
                        </span>
                        <span className="h-4 w-4">
                          <img src="/img/star-vendor.svg" alt="star rating" />
                        </span>
                      </div>
                      <span className="rating-count pl-1">5</span>
                    </div>
                  </section>
                  <section className="user-rating flex justify-between items-center mt-10 mb-16">
                    <div className="user-rating-container">
                      <div className="grid grid-cols-12 gap-2 items-center pb-2">
                        <div className="col-span-2 top-rated">5 Stars</div>
                        <div className="bar-container col-span-8">
                          <div className="bar-5" />
                        </div>
                        <div className="col-span-2 top-rated">(15)</div>
                      </div>
                      <div className="grid grid-cols-12 gap-2 items-center pb-2 sec-rating">
                        <div className="col-span-2">4 Stars</div>
                        <div className="bar-container col-span-8">
                          <div className="bar-4" />
                        </div>
                        <div className="col-span-2">(12)</div>
                      </div>
                      <div className="grid grid-cols-12 gap-2 items-center pb-2 sec-rating">
                        <div className="col-span-2">3 Stars</div>
                        <div className="bar-container col-span-8">
                          <div className="bar-3" />
                        </div>
                        <div className="col-span-2">(0)</div>
                      </div>
                      <div className="grid grid-cols-12 gap-2 items-center pb-2 sec-rating">
                        <div className="col-span-2">2 Stars</div>
                        <div className="bar-container col-span-8">
                          <div className="bar-2" />
                        </div>
                        <div className="col-span-2">(0)</div>
                      </div>
                      <div className="grid grid-cols-12 gap-2 items-center sec-rating">
                        <div className="col-span-2">1 Star</div>
                        <div className="bar-container col-span-8">
                          <div className="bar-1" />
                        </div>
                        <div className="col-span-2">(0)</div>
                      </div>
                    </div>
                    <div className="break-down">
                      <h1 className="break-down-title font-semibold">Rating Breakdown</h1>
                      <div className="flex justify-between items-center pt-4">
                        <h1 className="brk-down-title">Communication Level</h1>
                        <div className="flex items-center justify-between pl-4">
                          <span className="pr-1 rating-value">4.9</span>
                          <img src="/img/star-vendor.svg" className="h-4 w-4" alt="Stars" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-4">
                        <h1 className="brk-down-title">Recommend to a friend</h1>
                        <div className="flex justify-between items-center pl-4">
                          <span className="pr-1 rating-value">5.0</span>
                          <img src="/img/star-vendor.svg" className="h-4 w-4" alt="Stars" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-4">
                        <h1 className="brk-down-title">Service as described</h1>
                        <div className="flex justify-between items-center pl-4">
                          <span className="pr-1 rating-value">5.0</span>
                          <img src="/img/star-vendor.svg" className="h-4 w-4" alt="Stars" />
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="comment-reviews mb-20">
                    <ReviewCard
                      padding="pb-12"
                      userName="Arinola Thompson"
                      userImg="/img/arinola-thompson.jpg"
                      rating="4.9"
                      location="Magodo, Lagos"
                      projectUrl="/img/projects/bathroom-cabinet-candles-faucet.png"
                    />
                    <hr className="pb-12" />
                    <ReviewCard
                      padding="pb-12"
                      userName="Arinola Thompson"
                      userImg="/img/arinola-thompson.jpg"
                      rating="5.0"
                      location="Magodo, Lagos"
                      projectUrl="/img/projects/bathroom-cabinet-candles-faucet.png"
                    />
                    <hr className="pb-12" />
                    <ReviewCard
                      userName="Arinola Thompson"
                      userImg="/img/arinola-thompson.jpg"
                      rating="4.5"
                      location="Magodo, Lagos"
                      projectUrl="/img/projects/bathroom-cabinet-candles-faucet.png"
                    />

                    <div className="w-full text-center">
                      <button
                        type="button"
                        className="uppercase my-8 load-more-projects font-semibold"
                      >
                        Load more Reviews
                      </button>
                    </div>
                  </section>
                </section>
              )}
            </div>
          </section>
        )}
      </Wrapper>
    </Layout>
  );
};

export default YourHome;
