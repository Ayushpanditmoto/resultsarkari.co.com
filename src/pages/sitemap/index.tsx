import React from 'react'
import Link from 'next/link'

function Sitemap() {
  return (
    <div>
      <h1>Sitemap</h1>

      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Page</Link></li>
        <li><Link href="/sitemap">Sitemap</Link></li>
      </ul>


    </div>
  )
}

export default Sitemap