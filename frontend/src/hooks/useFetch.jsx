import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = ({ url, method, headers, body }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState(null)
  const [serverError, setServerError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const res = await axios({
          method: method || 'get',
          headers: headers,
          data: body,
          url,
        });
        const data = await res?.data

        setApiData(data)
        setIsLoading(false)
      } catch (error) {
        setServerError(error)
        setIsLoading(false)
      }
    }

    if (url) {
      fetchData()
    }
  }, [url])

  return { isLoading, apiData, serverError }
}

export default useFetch