import React from 'react'
import styles from './PhotoDetele.module.css'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'

const PhotoDetele = ({id}) => {
    const {loading, request} = useFetch()

    async function handleClick(){
        const confirm = window.confirm('Are you sure you wish to delete it?')
        if(confirm){
            const {url, options} = PHOTO_DELETE(id)
            const {response} = await request(url, options)
            if(response.ok) window.location.reload()
        }
    }

  return (
    <>
        {loading ? <button className={styles.delete} disabled>Delete</button> : <button onClick={handleClick} className={styles.delete}>Delete</button>}
    </>
  )
}

export default PhotoDetele
