import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">Something went wrong: {error.toString()}</div>
)

export default ErrorMessage
