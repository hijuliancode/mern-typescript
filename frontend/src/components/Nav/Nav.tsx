import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">Video List</Link>
        <Link to="video-form">Video Form</Link>
      </nav>
    </div>
  )
}
