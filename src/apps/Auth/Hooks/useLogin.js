import React from 'react'
import { signIn } from '../API'

export const useLogin = () => {

  const [loaded, setLoaded] = React.useState(false)
  const [errors, setErrors] = React.useState(null)

  const post = React.useCallback(data => {
    setLoaded(true)

    signIn(data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        setErrors(err.response)
      })
      .finally(() => {
        setLoaded(false)
      })
      
  }, [])

  return {
    loaded, 
    errors,
    actions: {
      post,
    },
  }

}