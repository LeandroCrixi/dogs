import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {UserContext} from '../../UserContext'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg'
import { ReactComponent as Estatistica } from '../../Assets/estatisticas.svg'
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
    const {userLogout} = React.useContext(UserContext)
    const mobile = useMedia('(max-width: 40rem)')
    const [mobileMenu, setMobileMenu] = React.useState(false)
    const navigate = useNavigate()

    const {pathname} = useLocation()
    React.useEffect(() =>{
        setMobileMenu(false)
    }, [pathname])

    function handleLogout(){
        userLogout()
        navigate('/login')
    }

  return (
    <>
        {mobile && <button aria-label='Menu' className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button>}
        <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to='/conta' end><MinhasFotos/>{mobile && 'My Photos'}</NavLink>
        <NavLink to='/conta/estatistica'><Estatistica/>{mobile && 'Statistics'}</NavLink>
        <NavLink to='/conta/postar'><AdicionarFoto/>{mobile && 'Add Photo'}</NavLink>
        <button onClick={handleLogout}><Sair/>{mobile && 'Logout'}</button>
        </nav>
    </>
  )
}

export default UserHeaderNav
