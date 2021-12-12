import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

export const PunkList = ({punkListData,setSelectedPunk}) => {
  return (
    <div className='punkList'>
      {punkListData.map(punk => (
        <div onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
          key={punk.token_id}
          id={punk.token_id}
          name={punk.name}
          image={punk.image_original_url}
          traits={punk.traits}
          />
        </div>
      ))}
    </div>
  )
}

export default PunkList