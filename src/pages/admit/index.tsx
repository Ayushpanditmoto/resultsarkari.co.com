import React from 'react'
import styled from 'styled-components'
import PostContainer from '@/Layout/layout'
import supabase from '@/config/Supabase.config';
import Link from 'next/link'
import Category from '@/types/PostEnum';

type AdmitType = {
    admit: {
        id: number,
        title: string,
        slug: string,
        created_at: string,
    }[]
}

function AdmitPage({ admit }: AdmitType) {
  return (
    <>
        <PostC>
    <PostContainer>
            <h1>Admit Card</h1>
            <ul>
                {admit.map((admit) => (
                    <li className='text-container' key={admit.id}>
                        <Link href={`/${admit.slug}`}>{admit.title}</Link>
                        <div>{
                        new Date(admit.created_at).toLocaleDateString('en-US',{
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })
                        
                        }</div>
                    </li>
                ))}

            </ul>
    </PostContainer>
        </PostC>
    </>
  )
}

export default AdmitPage

export const getStaticProps = async () => {
    const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('category', Category.AdmitCard)
    .order('id', { ascending: false })


    return {
        props: {
            admit: posts,
        }
    }
}


const PostC = styled.div`
    margin:0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-width: 800px;
    ul {
        list-style: number;
        padding: 0;
        margin: 0;
    }
    .text-container {
        margin-bottom: 1rem;
        background-color: var(--primary-color);
        padding: 1rem;
        border-radius: 5px;
    }
    a {
        text-decoration: none;
        color: #000;
        font-size: 1rem;
        font-weight: 600;
    }
    a:hover {
        color: white;
        text-decoration: underline;
    }

    
`