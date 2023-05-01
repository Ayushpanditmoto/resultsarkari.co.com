import React from 'react'
import Link from 'next/link'
import supabase from '@/config/Supabase.config'
import { PostType } from '@/types/PostType'
import PostContainer from '@/Layout/layout'
import Center from '@/Layout/center'

function Sitemap({ posts }: { posts: PostType[] }) {
  return (
    <div>
      <Center>
      <PostContainer>
      <h1>Sitemap</h1>
      <ul style={{
        padding : '2rem',
      }}>
        {posts.map((post) => (
          <li style={{
            
            backgroundColor: '#0068ca',
            margin: '1rem',
            padding: '1rem',
            borderRadius: '1rem',
            color: '#fff',
            fontSize: '1.5rem',
          }} key={post.id}>
            <Link href={`/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      </PostContainer>
      </Center>
    </div>
  )
}

export default Sitemap

export async function getServerSideProps() {
  const { data: posts, error } = await supabase
  .from('posts')
  .select('*')

  return {
    props: {
      posts,
    },
  }
}
