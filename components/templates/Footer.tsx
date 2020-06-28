import React from 'react';

const FormButton = {
  top: '-57px',
  left: '83%',
};

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="text-white grid grid-cols-4 gap-4 px-12 pt-16">
          <div>
            <img
              src="/234_Homes_footer_logo.png"
              className="pb-12"
              alt="+234Homes logo"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              sapiente.
            </p>
            <ul className="flex justify-start pt-8">
              <li className="pr-3">
                <a>
                  <img src="/instagram.svg" alt="Link to Instagram page" />
                </a>
              </li>
              <li className="pr-3">
                <a>
                  <img src="/facebook.svg" alt="Link to Facebook page" />
                </a>
              </li>
              <li className="pr-3">
                <a>
                  <img src="/twitter.svg" alt="Link to Twitter page" />
                </a>
              </li>
              <li>
                <a>
                  <img src="/linkedin.svg" alt="Link to LinkedIn page" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="pb-16 font-bold">Company</h6>
            <ul>
              <li>
                <a>About +234Homes</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Terms &amp; Privacy</a>
              </li>
              <li>
                <a>Cookie Policy</a>
              </li>
              <li>
                <a>Mobile App</a>
              </li>
              <li>
                <a>Copyright &amp; Trademarks</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="pb-16 font-bold">Quick Links</h6>
            <ul>
              <li>
                <a>Register As A Professional</a>
              </li>
              <li>
                <a>Professional</a>
              </li>
              <li>
                <a>Vendors</a>
              </li>
              <li>
                <a>Blog Stories</a>
              </li>
              <li>
                <a>Advert Placement</a>
              </li>
              <li>
                <a>Reviews</a>
              </li>
              <li>
                <a>House Tour</a>
              </li>
              <li>
                <a>Galllery</a>
              </li>
              <li>
                <a>Advertise</a>
              </li>
              <li>
                <a>Partner</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="pb-16 font-bold">News Letter Subscription</h6>
            <p>
              Subscribe to our newsletter and we will inform you of our latest
              nenwson directory and promotion.
            </p>
            <form>
              <input
                type="text"
                required
                className="appearance-none block w-full bg-gray-700 text-white border border-gray-700 rounded-full py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Enter email address"
              />
              <button
                type="submit"
                className="relative bg-gray-400 text-white font-bold rounded-full py-3 px-3"
                style={FormButton}
              >
                <img src="/left-arrow-submit.svg" alt="Chevron right" />
              </button>
            </form>
          </div>
        </div>
        <div>
          <img src="/footer_bg.svg" alt="Brand image" />
        </div>
      </div>
    </>
  );
};

export default Footer;
