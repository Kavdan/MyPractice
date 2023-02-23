import React, { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Post } from './Post'
import { PostsFilter } from './PostsFilter';

export const PostList = ({posts}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const latest = searchParams.has("latest");
  const startFrom = latest ? 80 : 1;
  // throw new Response("", {statusText: "Throw an error in 11 Line"}); errorElement
  return (
    <div>
        <PostsFilter setSearchParamsF={setSearchParams} searchQueryF={searchQuery} latestF={latest}/>
        <hr />
        {posts.length ? posts.filter((post) => post.title.includes(searchQuery) && post.id >= startFrom).map((post) => {
            return <Link key={post.id} to={`/${post.id}`}>
                <li>{post.title}</li>
            </Link>
        }) : <h1>No posts!</h1>
        }
    </div>
  )
}
