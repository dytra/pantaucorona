import React from "react";
import UpdatesListItem from "./UpdatesListItem";
const UpdatesList = ({updates}) => {
  return(
    <ul id="updates-list">
      {updates && updates.map((update,index) => <UpdatesListItem key={index} update={update}/>)}
    </ul>
  );
}

export default UpdatesList;