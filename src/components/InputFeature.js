import React, { Fragment, useState } from "react";

const InputFeature = () => {

  const [description, setDescription] = useState("")

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description }
      const response = await fetch("https://feature-request-tracker-api.herokuapp.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      window.location = '/feature-request-tracker/'
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <h2 className="text-center mt-3">Feature Request Tracker</h2>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="form-control" placeholder="Add a new feature request" value={description} onChange={e => setDescription(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )

}

export default InputFeature