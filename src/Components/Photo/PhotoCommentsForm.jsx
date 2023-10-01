import React from 'react'
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'

const PhotoCommentsForm = ({id}) => {
    const [comment, setComment] = React.useState('')
    const {request, error} = useFetch()

    async function handleSubmit(event){
        event.preventDefault()
        const (url, options) = 
        request(url, options)
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <textarea id='comment' name='comment' placeholder='comment...' value={comment} onChange={({target}) => setComment(target.value)}></textarea>
      <button><Enviar/></button>
    </form>
  )
}

export default PhotoCommentsForm
