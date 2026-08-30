import React, { Component } from "react";
import ButtonPaginate from "../reusable/buttonPaginate";
import spritesvg from "../../assets/icons/spritesvg.svg";

const ScheduleTable = (props) => {
  const { events, eventCount, onPageChange, currentPage } = props;
  let heading = "Day 2, Build & deploy";
  let message = "Wednesday 11 November · views, data, forms & going live";
  if (currentPage === 1) {
    heading = "Day 2, Build & deploy";
    message = "Wednesday 11 November · views, data, forms & going live";
  }
  return (
    <div>
      <div className="bar__small--round"></div>
      <ButtonPaginate onPageChange={onPageChange} currentPage={currentPage} />
      <div className="table">
        <div className="table__header">
          <div>
            <h3>
              {currentPage === 2
                ? "Day 2, Build & deploy"
                : "Day 1, Web foundations"}
            </h3>
            <p className="header--info">
              {currentPage === 2
                ? "Wednesday 11 November · views, data, forms & going live"
                : "Tuesday 10 November · set up, Python basics & how the web works"}
            </p>
          </div>
          <div className="session">{eventCount} sessions</div>
        </div>
        <table>
          <thead className="table__description">
            <tr>
              <th style={{ padding: "0 4rem" }}>TIME</th>
              <th style={{ width: "55%" }}>SESSION</th>
              <th>LOCATION</th>
              <th>TRACK</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr key={event.session} style={{ padding: "2rem" }}>
                <td style={{ padding: "0 4rem" }}>
                  <span className="time">{event.time}</span>
                  <p className="time__format">EST</p>
                </td>
                <td>
                  <h4 className="session__title">{event.session}</h4>
                  <p className="header--info">{event.info}</p>
                </td>
                <td>
                  <p className="header--info">
                    <span>
                      <svg className="card__icon card__icon--schedule">
                        <use href={`${spritesvg}#icon-location-pin`} />
                      </svg>
                    </span>
                    {event.location}
                  </p>
                </td>
                <td>
                  <p className={`track track__${event.track}`}>{event.track}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="warning">
        <svg className="card__icon">
          <use href={`${spritesvg}#icon-circle`} />
        </svg>
        <p className="header--info">
          These two days are the Django Girls part of PyCon Tanzania 2026 (10-14
          November). No prior coding needed. Bring a laptop and a coach will be
          with you at every step.
        </p>
      </div>
    </div>
  );
};

export default ScheduleTable;
