import React, { useState, useEffect } from 'react'
import SearchForm from './Components/SearchForm';
import Map from './Components/Map';
function App() {

  const [searchFormData, setSearchFormData] = useState({
    jobTitle: '',
    zipCode: '',
  })

  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const handleFormData = (searchFormData) => {
    setSearchFormData({
      ...searchFormData,
      jobTitle: searchFormData.jobTitle,
      zipCode: searchFormData.zipCode
    })
  }

  useEffect(() => {
    setIsLoading(true)
    const { jobTitle, zipCode }  = searchFormData
    try{
      const fetchData = async () => {
        const res = await fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=cbd15967&app_key=391d6ef314a487601a1cbaa6d67e5f31&what=${jobTitle}&where=${zipCode}&distance=3&results_per_page=50&sort_by=date`)
        const data = await res.json()
        setIsLoading(false)
        setJobs(data.results)
      }
      fetchData()
    }catch(err){
      setError(err)
    }
  }, [searchFormData])



  if(isLoading){
    return <h1>Loading</h1>
  }

  if(error){
    return <h1>Fetch Data Error</h1>
  }

  return (
    <div>
      <SearchForm handleFormData={handleFormData} />
      <Map jobs={jobs}/>
    </div>
  )
}

export default App