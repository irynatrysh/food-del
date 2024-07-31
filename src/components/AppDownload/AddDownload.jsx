import React from 'react'
import './AddDownload.css'
import { assets } from '../../assets/assets'

const AddDownload = () => {
  return (
    <div className='app-download' id='app-download'>
          <p>For Better Expirience Download <br /> Tomato App</p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AddDownload
