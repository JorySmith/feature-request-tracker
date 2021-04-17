import React, { Fragment, useState } from 'react';

const EditFeature = ({ feature }) => {

  const [description, setDescription] = useState(feature.description)

  // Edit/update feature request description

  const updateDescription = async e => {
    e.preventDefault()
    try {
      const body = { description }
      const response = await fetch(`http://localhost:5000/features/${feature.feature_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      window.location = '/'

    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${feature.feature_id}`}>Edit</button>
      <div id="myModal" className="modal fade" id={`id${feature.feature_id}`} role="dialog" onClick={() => setDescription(feature.description)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Feature Request</h4>
              <button type="button" className="close btn btn-lg" data-dismiss="modal" onClick={() => setDescription(feature.description)}>&times;</button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={e => updateDescription(e)}>Update</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setDescription(feature.description)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditFeature
