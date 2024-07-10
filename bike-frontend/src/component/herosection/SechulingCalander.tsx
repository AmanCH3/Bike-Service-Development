import React, { useState } from "react";

const SchedulingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 6, 9)); // Default to July 9, 2024
  const [selectedTime, setSelectedTime] = useState("10:00 am");
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 6)); // Default to July 2024

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const handleDateClick = (day: any) => {
    setSelectedDate(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    );
  };

  const handleTimeClick = (time: any) => {
    setSelectedTime(time);
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek.map((day) => <div key={day}>{day}</div>);
  };

  const renderDaysInMonth = () => {
    const days = [];
    const firstDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="text-muted-foreground"></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentMonth.getMonth() &&
        selectedDate.getFullYear() === currentMonth.getFullYear();
      days.push(
        <div
          key={day}
          className={`text-center cursor-pointer ${
            isSelected
              ? "bg-primary text-primary-foreground rounded-full"
              : "text-muted-foreground"
          }`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const renderTimeSlots = () => {
    const timeSlots = [
      "10:00 am",
      "10:30 am",
      "11:00 am",
      "11:30 am",
      "12:00 pm",
      "12:30 pm",
      "1:00 pm",
      "1:30 pm",
      "2:00 pm",
      "2:30 pm",
    ];
    return timeSlots.map((time) => (
      <button
        key={time}
        className={`border border-primary text-primary rounded-lg py-2 ${
          selectedTime === time ? "bg-primary text-primary-foreground" : ""
        }`}
        onClick={() => handleTimeClick(time)}
      >
        {time}
      </button>
    ));
  };

  return (
    <div className="bg-white  rounded-lg shadow-lg  w-200 h-max">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto w-190 h-max">
        <h1 className="text-3xl font-bold text-center mb-4">
          Schedule for your Bike Service
        </h1>
        <p className="text-center text-lg mb-8">
          Take the First Step Towards a Stronger, Safer Bike Service
        </p>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-2/3">
            <h2 className="text-xl font-semibold mb-4">
              Select a Date and Time
            </h2>
            <div className="flex items-center justify-between mb-4">
              <button className="text-xl" onClick={handlePrevMonth}>
                &lt;
              </button>
              <div className="text-center">
                <p className="text-lg">
                  {currentMonth.toLocaleString("default", { month: "long" })}{" "}
                  {currentMonth.getFullYear()}
                </p>
                <p className="text-sm text-muted-foreground">
                  {currentMonth.toLocaleString("default", { weekday: "long" })}
                </p>
              </div>
              <button className="text-xl" onClick={handleNextMonth}>
                &gt;
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-4 text-center">
              {renderDaysOfWeek()}
              {renderDaysInMonth()}
            </div>
            <div className="text-center mb-4">
              <p className="text-lg">
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {renderTimeSlots()}
              </div>
              <a href="#" className="text-primary mt-4 inline-block">
                Show all sessions
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 lg:pl-8">
            <h2 className="text-xl font-semibold mb-4">Service Details</h2>
            <div className="border border-muted p-4 rounded-lg">
              <p className="font-semibold">Schedule for your Bike Service</p>
              <p className="text-muted-foreground">
                {selectedDate.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                at {selectedTime}
              </p>
              <p className="text-muted-foreground">Kathmandu</p>
              <p className="text-muted-foreground">1 hr</p>
            </div>
            <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 mt-4 ">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulingCalendar;
