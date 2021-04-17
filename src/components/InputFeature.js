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
      e.preventDefault();
      window.location = '/feature-request-tracker'
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">Feature Request Tracker</h1>
      <h3 className="text-center mt-1">A React CRUD App</h3>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )

}

export default InputFeature