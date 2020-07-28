import React from "react";

const UpdatesListItem = ({ update }) => {
  return (<React.Fragment><li className="update-list-item">
    <aside className="update-list-item--icon"><i className="far fa-clock color-primary"></i></aside>
    <aside className="update-list-item--info">
      <em className="update-list-item--date">{update.reportDateString}</em>
      <div className="update-list-item--numbers">
        <span className="color-warning"><i className="fas fa-radiation-alt"></i> Terkonfirmasi : {update.totalConfirmed?.toLocaleString('id')}</span><span className="color-success"> <i className="fas fa-heartbeat"></i> Sembuh: {update.totalRecovered?.toLocaleString('id')}</span></div>
      <div className="update-list-item--detail"><p>Total kasus di China : {update.mainlandChina}. Total kasus selain di China : {update.otherLocations}</p></div>
    </aside>
  </li></React.Fragment>)
}

export default UpdatesListItem;