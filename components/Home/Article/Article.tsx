import { articleData } from '@/data/data'
import React from 'react'
import ArticleCard from './ArticleCard'

const Article = () => {
  return (
    <div className="pt-20 pb-20 bg-white">
  <div className="w-[80%] mx-auto">
    {/* Heading */}
    <h1 className="text-4xl md:text-5xl text-gray-900 font-bold">
      Latest Articles
    </h1>

    {/* Define grid system */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Article mapping */}
      {articleData.map((article, i) => (
        <div 
          key={article.id}
          data-aos="zoom-in"
          data-aos-delay={`${i * 150}`} 
          data-aos-achor-placement="top-center"
        >
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Article
