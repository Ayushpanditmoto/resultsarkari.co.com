import React from 'react'
import { useRouter } from 'next/router'
import { PostType } from '@/types/PostType'
import { GetStaticPaths } from 'next'
import MarkdownIt from 'markdown-it';
import PostContainer from '@/Layout/layout'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import supabase from '@/config/Supabase.config';


function SinglePost({ post }: { post: PostType }) {
    console.log(post)
    const md = new MarkdownIt(
        {
            html: true,
            linkify: true,
        }
    );
  return (
    <>
    <NextSeo title={post.title} description={post.desc} />
    <PostContain>

        <PostContainer>
        <div dangerouslySetInnerHTML={{__html: md.render(post.content)}}></div>      
        </PostContainer>  
        </PostContain>
    </>
  )
}

const PostContain = styled.div`
    margin: 0 auto;
    max-width: 800px;
    display: table;
    padding: 0.2rem 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        padding: 0 0.5rem;
    }
    
    h1 {
        font-size: 1.7rem;
        font-weight: 700;
        margin-bottom: 1rem;
        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        @media (max-width: 768px) {
            font-size: 1.2rem;
        }
    }
    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        @media (max-width: 768px) {
            font-size: 1.2rem;
        }
    }
    h4 {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    h5 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    h6 {
        font-size: 0.8rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    ul {
        margin-bottom: 1rem;
        li {
            font-size: 1rem;
            font-weight: 400;
            margin-bottom: 0.5rem;
        }
    }

    ol {
        margin-bottom: 1rem;
        li {
            font-size: 1rem;
            font-weight: 400;
            margin-bottom: 0.5rem;
            a{
                color: var(--primary-color);
                font-size: 1rem;
                font-weight: 400;
                margin-bottom: 0.5rem;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1rem;
        th {
            font-size: 1rem;
            font-weight: 700;
            padding: 0.5rem;
            background-color: var(--primary-color);
            border: 1px solid #000;
        }
        td {
            font-size: 1rem;
            font-weight: 400;
            padding: 0.5rem;
            border: 1px solid #000;
            a{
                color: var(--primary-color);
                font-size: 1rem;
                font-weight: 400;
                margin-bottom: 0.5rem;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

`







export default SinglePost

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: posts } = await supabase
        .from('posts')
        .select('slug')

        if(posts!=undefined){
            const paths = posts.map((post) => ({
                params: { slug: post.slug },
            }))
            return { paths, fallback: false }
            
        }
        else{
            return { paths: [], fallback: false }
        }
}

export const getStaticProps = async ({ params}: { params: { slug: string }
}) => {
    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', params.slug)
        .single()

        return {
            props: {
                post
            }
        }
}