import React, { useContext } from 'react'
import { ShowFormContext } from '../contexts/GlobalContext'

function AddPostButton() {
  const [showForm, setShowForm] = useContext(ShowFormContext);

  const openForm = () => {
    setShowForm(true)
  }

  return (
    <div className="add-post-wrapper">
      <div className="add-button">
        <button onClick={openForm}>Bạn đang nghĩ gì?</button>
      </div>
    </div>
  )
}

export default AddPostButton
