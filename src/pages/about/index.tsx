import React from 'react'
import {NextSeo} from 'next-seo'
import MarkdownIt from 'markdown-it';
import PostContainer from '@/Layout/layout';
import CenterC from '@/Layout/center';


const markdown = `
## About Page

Hello, I'm ChatGPT, a language model created by OpenAI. I'm based on the GPT-3.5 architecture and I'm designed to assist you in various ways with my natural language processing capabilities. 

My purpose is to help you with any questions or tasks you may have, whether it's for educational, professional, or personal purposes. I can answer questions on a wide range of topics, help with writing, and even generate creative content for you. 

I'm constantly learning and updating my knowledge base to provide you with the most accurate and helpful information. My training data includes a vast amount of text from various sources, including books, articles, and websites. 

If you have any questions or feedback, please feel free to contact me. I'm here to help you in any way I can.
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



