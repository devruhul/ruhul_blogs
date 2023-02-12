import React from "react";

export default function NewsCard({ article }) {
  const { title, description, url, urlToImage, publishedAt, content } = article;
  return (
    <div className='card w-96 glass'>
      <figure>
        <img src={urlToImage} alt='news' />
      </figure>
      <div className='card-body'>
        <h2>{publishedAt.slice(0, 10)}</h2>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <h2>{content}</h2>
        <div className='card-actions justify-end'>
          <a target='_blank' href={url} className='btn btn-primary'>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
