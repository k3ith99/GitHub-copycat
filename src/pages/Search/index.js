import React from "react";
import {SearchByUser,SearchByRepo} from '../../components'



function Search() {

  return (
    <>
      <h1>this is the search page</h1>
      <div>
      <SearchByUser/>
      <SearchByRepo/>
      </div>

    </>
  );
}

export default Search;
