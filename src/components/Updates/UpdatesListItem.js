import React from "react";
import { format } from "date-fns";

const UpdatesListItem = ({ update }) => {
  const reportDate = update?.reportDate;
  const reportDateFormatted = format(new Date(update?.reportDate || new Date()), 'dd MMM yyyy');
  return (<React.Fragment><li className="update-list-item">
    <aside className="update-list-item--icon"><i className="far fa-clock color-primary"></i></aside>
    <aside className="update-list-item--info">
      <em className="update-list-item--date">{reportDateFormatted}</em>
      <div className="update-list-item--numbers">
        <span className="color-warning"><i className="fas fa-radiation-alt"></i> Terkonfirmasi : {update.totalConfirmed?.toLocaleString('id')}</span>
        <span className="color-success"> <i className="fas fa-heartbeat"></i> Sembuh: {update.totalRecovered?.toLocaleString('id')}</span>
        <span className="color-danger"> <i className="fas fa-skull"></i> Meninggal: {update.deaths?.total?.toLocaleString('id')}</span>
      </div>

      <div className="update-list-item--detail"><p>Total kasus di China : {update.mainlandChina?.toLocaleString('id')}. Total kasus selain di China : {update.otherLocations?.toLocaleString('id')}</p></div>
    </aside>
  </li></React.Fragment>)
}

export default UpdatesListItem;