import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

import DashboardLayout from '../Layouts/DashboardLayout';
import CTA from '../atoms/CTA';
import useAddDiy from '../../hooks/useAddDiy';
import useProfile from '../../hooks/useProfile';

const Wrapper = styled.section`
   .profile-title {
    text-transform: uppercase;
  }
  .profile-title,
  .profile-desc {
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 0.8rem;
    font-weight: 600;
  }
  .upload-section {
    border: 1px dashed ${({ theme }) => theme.colors.gray17};
    border-radius: 7px;
    padding: 2.55rem 5.25rem;
  }
  legend {
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }
  fieldset {
    border: 1px solid ${({ theme }) => theme.colors.gray17};
  }
  .section-wrap {
    margin-bottom: 7.1rem;
  }
  .fieldset-input {
    padding: 0.7rem 1rem 1rem 1rem;
  }
  .profile-title {
    text-transform: uppercase;
  }
  .profile-title,
  .profile-desc {
    color: ${({ theme }) => theme.colors.gray2};
    font-size: 0.8rem;
    font-weight: 600;
  }
  .profile-label {
    color: ${({ theme }) => theme.colors.gray11};
    font-size: 0.8rem;
  }
  textarea::placeholder,
  input::placeholder {
    color: ${({ theme }) => theme.colors.gray17};
    font-size: 0.7rem;
  }
  .collection li {
    padding-right: 0.7rem;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gray11};
  }
  .collection {
    margin-top: 0.65rem;
  }
  .resolution {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
  }
  .img-type {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray11};
  }
  .drag-and-drop {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
    font-size: 1.75rem;
  }
  .browse {
    color: ${({ theme }) => theme.colors.orange1};
    font-weight: 600;
  }
`;

const AddDIY = () => {
  const { addDiy, loading } = useAddDiy();
  const { profile } = useProfile();

  return (
    <DashboardLayout>
      <Wrapper>
        <Formik
          initialValues={{
            video: '',
            title: '',
            body: '',
            featured: false,
          }}
          onSubmit={(values) => {
            addDiy({ ...values, authorId: profile?.id });
          }}
        >
          {({ values, handleSubmit, handleBlur, handleChange }) => (
            <form className="w-full" onSubmit={handleSubmit}>
              <h1 className="py-10 profile-title">Add New DIY</h1>

              <section className="flex items-center justify-between pt-8">
                <fieldset className="w-full">
                  <legend className="profile-label">Title</legend>
                  <input
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    className="fieldset-input profile-desc w-full focus:outline-none"
                    placeholder="Lorem ipsum dolor sit amet sed diam nonumy eirmod"
                  />
                </fieldset>
              </section>

              <section className="flex items-center justify-between pt-8">
                <fieldset className="w-full">
                  <legend className="profile-label">YouTube video URL</legend>
                  <input
                    name="video"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.video}
                    className="fieldset-input profile-desc w-full focus:outline-none"
                    placeholder="https://youtu.be/rwU44ED8gqM"
                  />
                </fieldset>
              </section>

              <section className="flex items-center justify-between pt-8 mt-4">
                <fieldset className="w-full">
                  <legend className="profile-label">Description</legend>
                  <textarea
                    name="body"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.body}
                    className="fieldset-input profile-desc w-full focus:outline-none"
                    placeholder="Tell us about the project…"
                  />
                </fieldset>
              </section>

              <section className="flex items-center pt-8 mt-4">
                <input
                  type="checkbox"
                  className="mr-2"
                  name="featured"
                  id="featured"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.featured}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="featured" className="profile-label">Featured</label>
              </section>

              <section className="flex justify-end mt-12 mb-16">
                <CTA
                  type="submit"
                  className="update-profile"
                  padding="0.8rem 2.4rem;"
                  disabled={loading}
                >
                  Submit
                  </CTA>
              </section>
            </form>
          )}
        </Formik>
      </Wrapper>
    </DashboardLayout>

  );
};

export default AddDIY;
