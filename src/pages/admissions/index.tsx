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
    }[]
}

function AdmitPage({ admit }: AdmitType) {
  return (
    <>
        <PostC>
    <PostContainer>
            <h1>Admit Card</h1>
            <div>
                {admit.map((admit) => (
                    <div key={admit.id}>
                        <Link href={`/${admit.slug}`}>{admit.title}</Link>
                    </div>
                ))}

            </div>
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
    .eq('category', Category.Admission)
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
`