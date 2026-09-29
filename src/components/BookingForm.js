import { useState } from "react";


function BookingForm() {


  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: ""
  });


  const [message, setMessage] = useState("");

  const [error, setError] = useState("");



  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }



  function handleSubmit(e) {

    e.preventDefault();


    setError("");
    setMessage("");



    if (
      !form.name ||
      !form.date ||
      !form.time ||
      !form.guests
    ) {

      setError("Please fill all required fields.");

      return;

    }



    const today = new Date()
      .toISOString()
      .split("T")[0];


    if (form.date < today) {

      setError(
        "Please select a future date."
      );

      return;

    }



    if (form.guests < 1 || form.guests > 10) {

      setError(
        "Guests must be between 1 and 10."
      );

      return;

    }



    setMessage(
      `Thank you ${form.name}! Your table has been reserved.`
    );


    setForm({

      name:"",
      date:"",
      time:"",
      guests:""

    });


  }



  return (

    <form 
      onSubmit={handleSubmit}
      aria-label="Table reservation form"
    >


      <h2>
        Reserve Your Table
      </h2>



      <label htmlFor="name">
        Name
      </label>


      <input

        id="name"

        name="name"

        type="text"

        aria-label="Name"

        placeholder="Enter your name"

        value={form.name}

        onChange={handleChange}

        required

      />




      <label htmlFor="date">
        Date
      </label>


      <input

        id="date"

        name="date"

        type="date"

        aria-label="Reservation date"

        value={form.date}

        onChange={handleChange}

        required

      />




      <label htmlFor="time">
        Time
      </label>


      <select

        id="time"

        name="time"

        aria-label="Reservation time"

        value={form.time}

        onChange={handleChange}

        required

      >


        <option value="">
          Select time
        </option>


        <option value="18:00">
          18:00
        </option>


        <option value="19:00">
          19:00
        </option>


        <option value="20:00">
          20:00
        </option>


        <option value="21:00">
          21:00
        </option>


      </select>





      <label htmlFor="guests">
        Number of Guests
      </label>



      <input

        id="guests"

        name="guests"

        type="number"

        min="1"

        max="10"

        aria-label="Number of guests"

        placeholder="1-10"

        value={form.guests}

        onChange={handleChange}

        required

      />





      <button type="submit">

        Reserve Table

      </button>





      {
        error &&

        <p 
          role="alert"
          style={{color:"red"}}
        >
          {error}
        </p>

      }





      {
        message &&

        <p 
          role="status"
          style={{color:"green"}}
        >
          {message}
        </p>

      }



    </form>

  );

}


export default BookingForm;