import { React, useState } from "react";

export const PostsFilter = ({setSearchParamsF, latestF, searchQueryF}) => {

    const [searchQuery, setSearchQuery] = useState(searchQueryF);
    const [isLatest, setIsLatest] = useState(latestF);

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const search = form.search.value;
        const latest = form.latest.checked;
        const params = {};
    
        if (latest) params.latest = true;
        if (search.length) params.search = search
    
        setSearchParamsF(params);
      }

  return (
    <>
    <form autoComplete='off' onSubmit={e => handleSearch(e)}>
            <input type="text" name='search' value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
            <label style={{padding: "0 20px"}}>
              <input type="checkbox" name="latest" checked={isLatest} onChange={e => setIsLatest(e.target.checked)}/> Get Latest Posts
            </label>
            <input type="submit" value="Search"/>
    </form>
    </>
  )
}
