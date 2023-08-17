import React from 'react'

const ErrorOrEmptyState = ({ status }) => {
  if (status === 'empty') {
    return <p>No campaigns available.</p>;
  }
  // Add more states as needed
  return null;
};

export default ErrorOrEmptyState