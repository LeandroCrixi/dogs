import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
    const [title, setTitle] = React.useState('')
    const location = useLocation()

    React.useEffect(() =>{
        const {pathname} = location
        switch(pathname){
            case '/conta/estatistica':
                setTitle('Statistics')
                break
            case '/conta/postar':
                setTitle('Add Photo')
                break
            default:
                setTitle('Feed')
        }
    }, [location])

  return (
    <header className={styles.header}>
        <h1 className='title'>{title}</h1>
        <UserHeaderNav/>
    </header>
  )
}

export default UserHeader
