import CenterC from '@/Layout/center'
import PostContainer from '@/Layout/layout'
import MarkdownIt from 'markdown-it';
import { NextSeo } from 'next-seo'
import React from 'react'

const markdown = `
# Privacy Policy

At Resultsarkari.co.com, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information about you when you use our website.

## Information we collect

We may collect information about you directly from you or from third-party sources. The information we collect may include:

- Name, email address, and other contact information
- IP address, browser type, and device information
- Usage information, such as pages visited and links clicked

## How we use your information

We use the information we collect to:

- Provide and improve our services
- Personalize your experience
- Communicate with you
- Analyze usage and performance of our website

## Disclosure of your information

We may disclose your information to third-party service providers who help us provide our services, such as hosting and analytics providers. We may also disclose your information to comply with legal obligations or protect our rights.

## Your choices

You can choose not to provide certain information, but this may limit your ability to use some of our services. You can also opt out of receiving promotional communications from us.

## Security

We take reasonable measures to protect your information from unauthorized access or disclosure. However, no security measure is completely foolproof.

## Changes to this Privacy Policy

We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website.

## Contact Us

If you have any questions or concerns about our Privacy Policy, please contact us at privacy@resultsarkari.co.com.

`;


function Privacy() {


  const md = new MarkdownIt({
    html: false,
    linkify: true,
  });
  const html = md.render(
   markdown
    
  );
  return (
    <>
    <NextSeo 
    title="Privacy Policy" 
    description="Privacy Policy Page"
    />
    
    <CenterC>
    <PostContainer>
    <div dangerouslySetInnerHTML={{__html: html}}></div>
    </PostContainer>
    </CenterC>
    </>
  )
}


export default Privacy