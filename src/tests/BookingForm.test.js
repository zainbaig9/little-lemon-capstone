import "@testing-library/jest-dom";

import {
  render,
  screen,
  fireEvent
} from "@testing-library/react";

import BookingForm from "../components/BookingForm";



test(
  "renders booking form correctly",
  () => {

    render(<BookingForm />);


    expect(
      screen.getByText("Reserve Your Table")
    ).toBeInTheDocument();


    expect(
      screen.getByLabelText("Name")
    ).toBeInTheDocument();


    expect(
      screen.getByLabelText("Reservation date")
    ).toBeInTheDocument();


  }
);




test(
  "shows error when form is empty",
  () => {


    render(<BookingForm />);


    const button =
      screen.getByText("Reserve Table");


    fireEvent.click(button);



    expect(
      screen.getByText(
        "Please fill all required fields."
      )
    ).toBeInTheDocument();


  }
);





test(
  "submits reservation successfully",
  () => {


    render(<BookingForm />);



    fireEvent.change(
      screen.getByLabelText("Name"),
      {
        target:{
          value:"John"
        }
      }
    );



    fireEvent.change(
      screen.getByLabelText("Date"),
      {
        target:{
          value:"2030-12-20"
        }
      }
    );



    fireEvent.change(
      screen.getByLabelText("Time"),
      {
        target:{
          value:"19:00"
        }
      }
    );



    fireEvent.change(
      screen.getByLabelText("Number of Guests"),
      {
        target:{
          value:"4"
        }
      }
    );



    fireEvent.click(
      screen.getByText("Reserve Table")
    );



    expect(
      screen.getByText(
        /Your table has been reserved/
      )
    ).toBeInTheDocument();



  }
);