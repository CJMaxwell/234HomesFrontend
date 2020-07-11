import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import ProfileNavbar from '../Organisms/ProfileNavbar';
import Footer from './Footer';
import Direction from '../atoms/Direction';

const Main = styled.section`
  .progression.active {
    display: inline-block;
    height: 1.356rem;
    width: 1.356rem;
    background-color: ${({ theme }) => theme.colors.orange1};
    color: #FFFFFF;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.orange1};
    text-align: center;
  }
  .progression.active + span {
    color: ${({ theme }) => theme.colors.orange1};
    
  }
  .progression {
    display: inline-block;
    height: 1.356rem;
    width: 1.356rem;
    background-color: ${({ theme }) => theme.colors.white};
    /* color: #FFFFFF; */
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    text-align: center;
  }

  .leading-progression {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }
  .direction-arrow {
    padding-right: 0.875rem;
  }
  ul {
    color: ${({ theme }) => theme.colors.gray11};
  }
  .heading {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 1.3125rem;
  }
  .general {
    color: ${({ theme }) => theme.colors.gray11};
  }
  select:first-child, .edu-input input::placeholder {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 12px;
    font-weight: normal;

  }
  
  input::placeholder, .input-label, select.select-first-custom:first-child {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray5};
    font-weight: 600;

  }
  
  .input-wrapper {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray17};
  }

  .input-border {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
    display: inline-block;
    height: 35px;

  }

  
`;

const Legend = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray17};
`;

const Add = styled.button`
  color: ${({ theme }) => theme.colors.gray2};
  background-color: ${({ theme }) => theme.colors.gray17};
  border: 1px solid ${({ theme }) => theme.colors.gray17};
  height: 2.18rem;
  width: 4.63rem;
`;


const Continue = styled.button`
  background-color: ${({ theme }) => theme.colors.orange1};
  border: 1px solid ${({ theme }) => theme.colors.orange1};
  width: 9.5rem;
  height: 2.57rem;
`;


const ProfessionalProfile = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <ProfileNavbar />
      <hr />
      <Main className="container mx-auto  general-padding  mb-24">
        <ul className="flex text-sm py-2 -ml-8 mr-8">
          <li className="flex items-center">
            <span className="progression active">1</span>
            <span className="leading-progression">Personal Profile</span>
            <span className="direction-arrow">
              <Direction />
            </span>
          </li>
          <li className="flex items-center">
            <span className="progression active">2</span>
            <span className="leading-progression"> Professional Info</span>
            <span className="direction-arrow">
              <img src="/img/direction.svg" alt="Direction arrow" />
            </span>
          </li>
          <li>
            <span className="progression">3</span>
            <span className="leading-progression">Payment Info</span>
          </li>
        </ul>
        <hr className="-ml-8 mr-8" />
        <div className="mt-20 px-64">
          <h1 className="heading font-semibold pb-4">Professional Info</h1>
          <p className="general pb-6">This is your time to shine. Let potential buyers know what you do best and <br />
          how you gained your skills, certifications and experience.</p>
          <hr />
          <form className="w-full mt-12">
            <div className="flex">
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <div className="input-wrapper">
                  <select name="occupation" id="occupation" className="w-full pb-2 select-first-custom">
                    <option value="Occupation">Your Occupation</option>
                    <option value="Interior Designer">Interior Designer</option>
                    <option value="Ui/UX Designer">UI/UX Designer</option>
                    <option value="Colour Specialist">Colour Specialist</option>
                  </select>
                </div>
              </div>
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <div className="input-wrapper">
                  <select name="Experience" id="Experience" className="w-full pb-2 select-first-custom">
                    <option value="Experience Level">Experience Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full mb-6 md:mb-0 mt-8">
              <div className="px-3">
                <div className="input-wrapper">
                  <select name="Experience" id="Experience" className="w-full pb-2 select-first-custom">
                    <option value="Key Skills">Key Skills</option>
                    <option value="Trend identification">Trend identification</option>
                    <option value="Space Planning">Space Planning</option>
                    <option value="Trustworthy">Trustworthy</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full mb-6 md:mb-0 mt-8">
              <div className="px-3">
                <p className="block input-label text-gray-700 text-xs mb-2">
                  Education <span className="text-red-600">&#42;</span>
                </p>
                <Legend className="p-4">
                  <div className=" flex">
                    <div className="w-1/2 pr-3">
                      <Legend>
                        <select name="Experience" id="Experience" className="w-full p-2">
                          <option value="Key Skills">Country Of College/University</option>
                          <option value="Trend identification">Trend identification</option>
                          <option value="Space Planning">Space Planning</option>
                          <option value="Trustworthy">Trustworthy</option>
                        </select>
                      </Legend>
                    </div>
                    <div className="w-1/2">
                      <Legend>
                        <select name="Experience" id="Experience" className="w-full p-2">
                          <option value="Key Skills">College/University Name</option>
                          <option value="Trend identification">Trend identification</option>
                          <option value="Space Planning">Space Planning</option>
                          <option value="Trustworthy">Trustworthy</option>
                        </select>
                      </Legend>
                    </div>
                  </div>
                  <div className="flex pt-4">
                    <div className="w-1/6">
                      <Legend>
                        <select name="Experience" id="Experience" className="w-full p-2">
                          <option value="Title">Title</option>
                          <option value="BS">BS</option>
                          <option value="BE">BE</option>
                          <option value="BA">BA</option>
                        </select>
                      </Legend>
                    </div>
                    <div className="w-4/6 pr-3 edu-input">
                      <input className="appearance-none bg-transparent input-border w-full text-gray-700 mr-3 p-2 leading-tight focus:outline-none" type="text" required placeholder="Major" aria-label="major" />
                    </div>
                    <div className="w-1/6">
                      <Legend>
                        <select name="Experience" id="Experience" className="w-full p-2">
                          <option value="Key Skills">Year</option>
                          <option value="Trend identification">2019</option>
                          <option value="Space Planning">2018</option>
                          <option value="Trustworthy">2017</option>
                        </select>
                      </Legend>
                    </div>
                  </div>
                  <div className="w-full flex justify-end text-center pt-4">
                    <Add type="submit" className="text-center uppercase">Add</Add>
                  </div>
                </Legend>
              </div>
            </div>

            <div className="w-full mb-6 md:mb-0 mt-8">
              <div className="px-3">
                <p className="block input-label text-gray-700 text-xs mb-2">
                  Certifications <span className="text-red-600">&#42;</span>
                </p>
                <Legend className="p-4">
                  <div className=" flex">
                    <div className="w-5/12 pr-3">
                      <div className="">
                        <Legend>
                          <select name="Experience" id="Experience" className="w-full p-2">
                            <option value="Key Skills">Country Of College/University</option>
                            <option value="Trend identification">Trend identification</option>
                            <option value="Space Planning">Space Planning</option>
                            <option value="Trustworthy">Trustworthy</option>
                          </select>
                        </Legend>
                      </div>
                    </div>
                    <div className="w-5/12 pr-3">
                      <Legend>
                        <select name="Experience" id="Experience" className="w-full p-2">
                          <option value="Key Skills">College/University Name</option>
                          <option value="Trend identification">Trend identification</option>
                          <option value="Space Planning">Space Planning</option>
                          <option value="Trustworthy">Trustworthy</option>
                        </select>
                      </Legend>
                    </div>
                    <div className="w-2/12">
                      <Legend>
                        <select name="Experience" id="Experience" className="w-full p-2">
                          <option value="Key Skills">Year</option>
                          <option value="Trend identification">2019</option>
                          <option value="Space Planning">2018</option>
                          <option value="Trustworthy">2017</option>
                        </select>
                      </Legend>
                    </div>
                  </div>
                  <div className="w-full flex justify-end text-center pt-4">
                    <Add type="submit" className="text-center uppercase">Add</Add>
                  </div>
                </Legend>
              </div>
            </div>

            <div className="w-full mb-6 md:mb-0 mt-8">
              <div className="px-3">
                <div className="input-wrapper">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-2 leading-tight focus:outline-none" type="text" required placeholder="Personal Website" aria-label="Personal Website" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end text-center mt-16">
              <Continue type="submit" className="mx-3 text-center text-white">Continue</Continue>
            </div>
          </form>
        </div>
      </Main>
      <Footer />
    </>
  )
}

export default ProfessionalProfile
