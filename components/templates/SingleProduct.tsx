import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Slider from 'react-slick';

import Navbar from '../Organisms/Navbar';
import Offering from '../Organisms/Offering';
import Button from '../atoms/Button';
import Footer from './Footer';
import ReviewCard from '../Organisms/ReviewCard';

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
  
  .project,
  .load-more-projects,
  .leave-review,
  .customer-review {
    color: ${({ theme }) => theme.colors.gray2};
  }
  .review-title {
    color: ${({ theme }) => theme.colors.gray1};
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
    margin-top: 2.3rem;
  }
  .customer-review {
    font-size: 0.95rem;
  }
  .rating-count {
    color: ${({ theme }) => theme.colors.orange1};
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
    h1 {
      color: ${({ theme }) => theme.colors.gray2};
    }
    .rating-value {
      color: ${({ theme }) => theme.colors.gray5};
      font-weight: 600;

    }
  }
  .carousel-img {
    border-radius: 7px;
  }
  /* .product-img {
    height: 30.75rem;
  } */

  .accordion-title {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 0.8rem;
    padding: 10px 0;
    font-weight: 600;
  }
  .caret:before {
    content: url('/img/product-down-arrow.svg');
    display: inline-block;
    height: 0.5rem;
    padding: 10px 0;
  }
  .open.caret:before {
    transform: rotate(180deg);
  }
  .accordion-content {
    color: ${({ theme }) => theme.colors.gray5};
    font-size: 0.8rem;
  }
  .review-star-rating img:not(:last-child) {
    padding-right: 0.25rem;
  }
  .aside-content {
    margin-top: 1.6rem;
  }

  textarea,
  input {
    width: 14.7rem;
    border-radius: 5px;
  }
  input {
    padding: 0.85rem 0.85rem;
  }
  textarea {
    padding: 0.75rem 0.95rem;
  }
  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.7rem;
  }
  .contractor {
    color: ${({ theme }) => theme.colors.gray1};
    padding-bottom: 0.65rem;
  }
  .contact-seller {
    color: ${({ theme }) => theme.colors.gray5};
    padding-bottom: 1.35rem;
    font-size: 0.7rem;
  }
  .vendor-name {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 1.75rem;
  }
  .vendor-details {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 0.8rem;
  }
  .web {
    width: 0.95rem;
    /* height: 0.9rem; */
  }
  .loc-pin {
    width: 2rem;
    /* height: 1rem; */
  }
  .phone {
    width: 0.65rem;
    /* height: 1.15rem; */
  }
  .web,
  .loc-pin,
  .phone {
    padding-top: 0.25rem;
  }

  .product-slides .slick-prev,
.product-slides .slick-next {
  position: absolute;
  top: 50%;
  z-index: 1;
}


.product-slides {
  position: relative;
}

.product-slides .slick-prev,
.product-slides .slick-next {
  position: absolute;
  top: 42%;
  z-index:1;
}

.product-slides .slick-prev {
  left: 5%;
}

.product-slides .slick-next {
  right: 5%;
}
`;
const VendorBtn = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.green1};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.green1};
  font-size: 0.7rem;
  width: 14.7rem;

  &.v-btn {
    margin-top: 0.55rem;
  }
`;
const MsgBtn = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.orange1};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.orange1};
  font-size: 0.7rem;
  width: 14.7rem;
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  className: 'product-slides'
};

const productSliders = [
  {
    id: 1,
    url: '/img/BArt.png'
  },
  {
    id: 2,
    url: '/img/BArt.png'
  },
  {
    id: 3,
    url: '/img/BArt.png'
  },
  {
    id: 4,
    url: '/img/BArt.png'
  },
  {
    id: 5,
    url: '/img/BArt.png'
  },
  {
    id: 6,
    url: '/img/BArt.png'
  }
]

const SingleProduct = () => {
  const theme = useContext(ThemeContext);
  const [accordion, setAccordion] = useState('description');

  return (
    <Wrapper>
      <img src="/img/color-pattern.png" alt="+234Homes Colour pattern" />
      <Navbar />
      <hr />
      <div className="general-padding container mx-auto">
        <Offering />
        <ul className="breadcrumb flex items-center">
          <li>Directory</li>
          <li>
            <img src="/img/direction.svg" alt="Breadcrumb navigation" />
          </li>
          <li>Vendors</li>
        </ul>
      </div>
      <section className="container mx-auto general-padding">
        <h1 className="text-4xl font-semibold pb-3">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor
        </h1>
        <div className="flex items-center">
          <div className="flex items-center mr-4 review-star-rating">
            <img src="/img/star-vendor.svg" alt="" />
            <img src="/img/star-vendor.svg" alt="" />
            <img src="/img/star-vendor.svg" alt="" />
            <img src="/img/star-vendor.svg" alt="" />
            <img src="/img/star-vendor.svg" alt="" />
          </div>
          <span>23 Reviews</span>
        </div>
        <section className="grid grid-cols-4 gap-6">
          <main className="mt-8 col-span-3">
            <section>
              <div>
                <img src="/img/BArt-medium.png" className="product-img" alt="Poduct item" />
              </div>
              <div className="flex items-center justify-between mr-2 mt-3 mb-16">
                {/* <Slider {...settings}>
                  {
                    productSliders.map((item, index) => (
                      <div key={index}>
                        <img src={item.url} className="h-32 carousel-img" alt="Poduct item" />
                      </div>
                    ))
                  }
                </Slider> */}

                {/* <img src="/img/BArt.png" className="h-32 carousel-img" alt="Poduct item" />
                <img src="/img/BArt.png" className="h-32 carousel-img" alt="Poduct item" />
                <img src="/img/BArt.png" className="h-32 carousel-img" alt="Poduct item" />
                <img src="/img/BArt.png" className="h-32 carousel-img" alt="Poduct item" />
                <img src="/img/BArt.png" className="h-32 carousel-img" alt="Poduct item" /> */}
              </div>
            </section>
            <section>
              <a onClick={() => setAccordion('description')}>
                <div className="flex items-center justify-between accordion">
                  <h3 className="accordion-title">Product Description</h3>
                  <div className={`caret ${accordion === 'description' && 'open'}`}></div>
                </div>
                {
                  accordion === 'description' && (
                    <div className="accordion-content">
                      Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                      vero eos et accusam et justo duo dolores et.
                      <p className="flex items-center pt-4">
                        <span className="show-more pr-1">Show more</span>
                        <img src="/img/show-more.svg" alt="Show More" />
                      </p>
                    </div>
                  )
                }

              </a>
              <hr className="mt-4" />
              <a onClick={() => setAccordion('dimensions')}>
                <div className="flex items-center justify-between">
                  <h3 className="accordion-title">Weight & Dimensions</h3>
                  <div className={`caret ${accordion === 'dimensions' && 'open'}`}></div>
                </div>
                {
                  accordion === 'dimensions' && (
                    <div className="accordion-content">
                      Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                      vero eos et accusam et justo duo dolores et.
                      <p className="flex items-center pt-4">
                        <span className="show-more pr-1">Show more</span>
                        <img src="/img/show-more.svg" alt="Show More" />
                      </p>
                    </div>
                  )
                }
              </a>
              <hr className="mt-4" />
              <a onClick={() => setAccordion('specifications')}>
                <div className="flex items-center justify-between">
                  <h3 className="accordion-title">Specifications</h3>
                  <div className={`caret ${accordion === 'specifications' && 'open'}`}></div>
                </div>
                {
                  accordion === 'specifications' && (
                    <div className="accordion-content">
                      Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                      vero eos et accusam et justo duo dolores et.
                      <p className="flex items-center pt-4">
                        <span className="show-more pr-1">Show more</span>
                        <img src="/img/show-more.svg" alt="Show More" />
                      </p>
                    </div>
                  )
                }
              </a>
              <hr className="mt-4" />
              <a onClick={() => setAccordion('shipping')}>
                <div className="flex items-center justify-between">
                  <h3 className="accordion-title">Shipping & Returns</h3>
                  <div className={`caret ${accordion === 'shipping' && 'open'}`}></div>
                </div>
                {
                  accordion === 'shipping' && (
                    <div className="accordion-content">
                      Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                      vero eos et accusam et justo duo dolores et.
                      <p className="flex items-center pt-4">
                        <span className="show-more pr-1">Show more</span>
                        <img src="/img/show-more.svg" alt="Show More" />
                      </p>
                    </div>
                  )
                }
              </a>

              <hr className="mt-4" />
              <a onClick={() => setAccordion('faq')}>
                <div className="flex items-center justify-between">
                  <h3 className="accordion-title">FAQs</h3>
                  <div className={`caret ${accordion === 'faq' && 'open'}`}></div>
                </div>
                {
                  accordion === 'faq' && (
                    <div className="accordion-content">
                      Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                      vero eos et accusam et justo duo dolores et.
                      <p className="flex items-center pt-4">
                        <span className="show-more pr-1">Show more</span>
                        <img src="/img/show-more.svg" alt="Show More" />
                      </p>
                    </div>
                  )
                }
              </a>
              <hr className="mt-4" />
            </section>
            <section className="reviews mt-12">
              <div className="flex justify-between items-center">
                <h4 className="review-title">Customer Reviews</h4>
                <button className="uppercase leave-review">Leave a review</button>
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
            <section className="user-rating flex justify-between items-center mt-6 mb-16">
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
                <h1 className="break-dwon-title font-semibold">Rating Breakdown</h1>
                <div className="flex justify-between items-center pt-4">
                  <h1>Communication Level</h1>
                  <div className="flex items-center justify-between pl-4">
                    <span className="pr-1 rating-value">4.9</span>
                    <img src="img/star-vendor.svg" className="h-4 w-4" alt="Stars" />
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <h1>Recommend to a friend</h1>
                  <div className="flex justify-between items-center pl-4">
                    <span className="pr-1 rating-value">5.0</span>
                    <img src="img/star-vendor.svg" className="h-4 w-4" alt="Stars" />
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <h1>Service as described</h1>
                  <div className="flex justify-between items-center pl-4">
                    <span className="pr-1 rating-value">5.0</span>
                    <img src="img/star-vendor.svg" className="h-4 w-4" alt="Stars" />
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
                <button className="uppercase my-8 load-more-projects font-semibold">
                  Load more Reviews
                </button>
              </div>
            </section>
          </main>
          <aside className="col-span-1">
            <div className="border border-gray-200 px-4 py-8 aside-content rounded-md">
              <h1 className="contractor font-semibold">Contact Vendor</h1>
              <p className="contact-seller">
                Please contact the seller directly to learn about specific precautions.
              </p>
              <div>
                <VendorBtn>Hi, I’m interested, please contact me.</VendorBtn>
                <VendorBtn className="v-btn">Hi, when can I come see the item?</VendorBtn>
                <VendorBtn className="v-btn px-4">Tell me about the special offers you have</VendorBtn>
              </div>
              <form>
                <textarea
                  className="border border-gray-200 outline-none mt-8"
                  name="message"
                  id="message"
                  placeholder="Write a message"
                />
                <div>
                  <input
                    className="border border-gray-200 outline-none"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone Number"
                  />
                </div>
                <MsgBtn className="uppercase font-semibold mt-6">Send Message</MsgBtn>
              </form>
            </div>
            <div className="border border-gray-200 py-8 aside-content rounded-md">
              <div className="px-24 py-6">
                <img src="/img/vendor-logo.png" className="logo" alt="Vendor Logo" />
              </div>
              <hr />
              <div className="px-4">
                <div className="vendor-details font-semibold">
                  <div className="flex items-start pt-4">
                    <span className="loc-pin">
                      <img src="/img/vendor-loc.svg" alt="Vendor location" />
                    </span>
                    <span className="ml-3">No. 4 Idrissu Abdulmalik Street, Shomolu, Lagos</span>
                  </div>
                  <div className="flex items-start pt-4">
                    <span className="phone">
                      <img src="/img/phone.svg" alt="vendor's phone number" />
                    </span>
                    <span className="ml-3">+234 809 053 4405, 812 234 6780</span>
                  </div>
                  <div className="flex items-start pt-4">
                    <span className="web">
                      <img src="/img/www.svg" alt="vendor's website" />
                    </span>
                    <span className="ml-3">www.mcityventures.com</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </section>
      <Footer />
    </Wrapper>
  );
};

export default SingleProduct;
