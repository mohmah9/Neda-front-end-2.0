import React from 'react';
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import AppointmentTime from './AppointmentTime'



export default class Calender extends React.Component {

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };


  handleDayClick(day, { selected }) {
    let dayy=day.toLocaleDateString().split("/")
    if (dayy[0].length==1){
      dayy[0]="0"+dayy[0]
    }
    if (dayy[1].length==1){
      dayy[1]="0"+dayy[1]
    } 
    console.log(dayy)
    this.setState({
      selectedDay: selected ? undefined : dayy,
    });
  }


  render() {

    return (
      <main>
        <div style={{ 'marginLeft': "10%", display: "flex", backgroundColor: "white" }}>
          <div style={{ 'marginLeft': "10%", width: "50%" }}>
            {this.state.selectedDay ? 
            <AppointmentTime  clinic={this.props.clinic} Day = {this.state.selectedDay}/> 
            : null}
            <br />
          </div>
          <div>
            <DayPicker
              selectedDays={this.state.selectedDay}
              onDayClick={this.handleDayClick}

              disabledDays={[
                new Date(2019, 6, 12),
                { daysOfWeek: [5] },
                new Date(2019, 5, 2),
                {
                  after: new Date(2019, 5, 16),
                  before: new Date(2019, 5, 18),
                },]}

            />
          </div>
        </div>
      </main>

    );
  }
}
