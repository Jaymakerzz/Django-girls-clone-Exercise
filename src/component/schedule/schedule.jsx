import React, { Component } from "react";

import HeaderCard from "./headerCard";
import ScheduleTable from "./scheduleTable";
import { getEvent } from "../../eventSchedule";

class Schedule extends Component {
  state = { events: getEvent(), currentPage: 1 };
  handlePagechange = (btn) => {
    // const events = this.state.events.filter(
    //   (event) => event.id === `day-${btn.no}`,
    // );
    const currentPage = btn.no;

    this.setState({ currentPage });
  };

  render() {
    const { events, currentPage } = this.state;
    const filteredEvents = events.filter((e) => e.id === `day-${currentPage}`);

    return (
      <div className="container__schedule">
        <HeaderCard />
        <ScheduleTable
          onPageChange={this.handlePagechange}
          events={filteredEvents}
          eventCount={filteredEvents.length}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Schedule;
