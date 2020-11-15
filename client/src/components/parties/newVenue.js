import React from "react";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import Logo from "../images/partypic2.png";

function NewVenue(props) {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  // const { firstName, lastName, password } =
  //   (props.location && props.location.state) || {};

  async function postData(data) {
    // Default options are marked with *
    await fetch("/party/new", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  }

  const onSubmit = async (data) => {
    postData(data);
    console.log(data);

    history.push("./partyPage");
  };
  //put functions up here. Like consts that put it in return
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <img
            src={Logo}
            height="600"
            width="1200"
            crop="fill"
            className="img-fluid"
            alt="login party"
          />
        </div>
        <div className="col-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Let's have a party</h1>

            <label>
              First Name
              <br />
              <input type="text" name="authorFirstName" ref={register} />
              <br />
            </label>
            <label>
              Last Name
              <br />
              <input type="text" name="authorLastName" ref={register} />
              <br />
            </label>
            <label>
              Place Name
              <br />
              <input type="text" name="name" ref={register} />
              <br />
            </label>
            <label>
              Image URL
              <br />
              <input type="text" name="image" ref={register} />
              <br />
            </label>
            <label>
              Cost Per Person
              <br />
              <input type="number" name="cost" ref={register} />
              <br />
            </label>
            <label>
              Location
              <br />
              <input type="text" name="location" ref={register} />
              <br />
            </label>
            <label>
              Website URL
              <br />
              <input type="text" name="website" ref={register} />
              <br />
            </label>
            <label>
              Description
              <br />
              <input type="textarea" name="description" ref={register} />
              <br />
            </label>
            <br />
            <input className="btn btn-dark" type="submit" />
          </form>
          <br />
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => history.push("/partyPage")}
          >
            Go to home
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewVenue;
