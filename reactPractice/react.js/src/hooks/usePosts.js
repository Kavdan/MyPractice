import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort){
          return posts.sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
      }, [sort, posts]);
    return sortedPosts;
}

export const usePosts = (posts, sort, search) => {
    const sortedPosts = useSortedPosts(posts, sort);
    
    const sortedAndSearchedPosts = useMemo(() => {
        if(search){
         return sortedPosts.filter((post) => post.title.replace(' ', '').toLowerCase().includes(search.toLowerCase()))
        }
        return sortedPosts;
     }, [sortedPosts, search]);
   

    return sortedAndSearchedPosts;
}

export const usePage = (totalPage) => {
  const page = useMemo(() => {
    let pages = [];
    for(let i = 1; i <= totalPage; i++){
      pages.push(i);
    }
    return pages;
  }, [totalPage]);
  return page;
}