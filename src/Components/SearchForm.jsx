import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
function SearchForm({ handleFormData }) {

  const [formData, setFormData] = useState({
    jobTitle: '',
    zipCode: '',
  })

  const {jobTitle, zipCode} = formData
  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormData(formData)
    setFormData({
        jobTitle: '',
        zipCode: '',
    })
  }
  return (
    <div className="heading">
      <h1>Job Search</h1>
      <section className="form">
          <form onSubmit={handleSubmit}>
              <div className="form-group">
              <label htmlFor = "jobTitle">Job title</label>
                  <input 
                      type="text" 
                      id="jobTitle" 
                      name="jobTitle" 
                      value={jobTitle} 
                      className="form-control" 
                      placeholder="Enter the job title"
                      onChange={handleChange}
                  />
              </div>
              <div className="form-group">
              <label htmlFor = "zipCode">Zip Code</label>
                  <input 
                      type="text" 
                      id="zipCode" 
                      name="zipCode" 
                      value={zipCode}
                      className="form-control" 
                      placeholder="Enter the zip code"
                      onChange={handleChange}
                  />
              </div>

             <br/> 
              <div className="form-group">
                  <Button type="submit" className='btn btn-block'>Submit</Button>
              </div>
          </form>
        </section>
    </div>
  )
}

SearchForm.propTypes = {
  handleFormData: PropTypes.func,
}
export default SearchForm;