import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

const LoadingSpinner = ({ loading }) => {
  return (
    <PropagateLoader 
        color="#C73B0F77" 
        size={25}
        loading= {loading}
    />
  )
}

export default LoadingSpinner