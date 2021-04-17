import React, { Fragment, useEffect, useState } from 'react';

import EditFeature from './EditFeature';

const ListFeature = () => {

  const [features, setFeatures] = useState([])

  // delete feature request
  const deleteFeature = async (id) => {
    try {
      const deleteFeature = await fetch(`https://feature-request-tracker-api.herokuapp.com/${id}`, {
        method: "DELETE"
      })
      setFeatures(features.filter(feature => feature.feature_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }

  const getFeatures = async () => {
    try {
      const response = await fetch("https://feature-request-tracker-api.herokuapp.com/")
      const data = await response.json()
      setFeatures(data)

    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getFeatures();
  }, [])

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {features.map(feature => (
            <tr key={feature.feature_id}>
              <td>{feature.description}</td>
              <td><EditFeature feature={feature} /></td>
              <td><button className="btn btn-danger" onClick={() => deleteFeature(feature.feature_id)}>Delete</button></td>
            </tr>
          ))}

        </tbody>
      </table>
    </Fragment>
  )
}

export default ListFeature
