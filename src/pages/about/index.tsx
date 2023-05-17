import React from 'react'
import {NextSeo} from 'next-seo'
import MarkdownIt from 'markdown-it';
import PostContainer from '@/Layout/layout';
import CenterC from '@/Layout/center';
// import supabase from '@/config/Supabase.config';

const markdown = `
# About \n Resultsarkari.co.com

Resultsarkari.co.com is a leading online platform that provides the latest and updated information on government jobs, exam results, and educational news in India. Our website is designed to provide easy access to job notifications, exam results, and educational updates for students, job seekers, and other interested parties.

\n\n\n ## Our Mission

Our mission is to provide reliable, up-to-date information on government jobs, exam results, and education news to our users. We aim to help our users stay informed and connected to the latest news and updates in the field of education and employment in India.

## Our Team

Resultsarkari.co.com is powered by a team of experienced professionals who are passionate about providing accurate and reliable information to our users. Our team consists of content writers, editors, and developers who work together to provide the best user experience on our website.

## What We Offer

At Resultsarkari.co.com, we offer a wide range of information related to government jobs, exam results, and educational news. We provide daily updates on job notifications and exam results, along with educational news and updates. Our website is designed to be user-friendly and easy to navigate, making it simple for users to find the information they need.

## Why Choose Resultsarkari.co.com

We believe that our platform offers a unique value proposition for users who are looking for reliable information on government jobs, exam results, and education news. Here are some reasons why you should choose Resultsarkari.co.com:

- Latest and up-to-date information on government jobs, exam results, and education news
- User-friendly website design that makes it easy to find the information you need
- Reliable and accurate information provided by experienced professionals
- Regular updates to ensure that users are always informed about the latest news and updates

## Contact Us

We are always interested in hearing from our users. If you have any questions, comments, or feedback, please feel free to contact us using the contact form on our website. We appreciate your feedback and look forward to hearing from you.

Thank you for choosing Resultsarkari.co.com for your information needs. We hope that our platform will be useful to you in your education and employment journey.
`;





function AboutPage() {
  const md = new MarkdownIt({
    html: false,
    linkify: true,
  });
  const html = md.render(markdown);
  return (
    <>
    <NextSeo 
    title="About" 
    description="About Page"
    />
    {/* <h3>About Page</h3> */}
    <CenterC>
    <PostContainer>
    <div dangerouslySetInnerHTML={{__html: html}}></div>
    </PostContainer>
    </CenterC>
    </>
  )
}




export default AboutPage





