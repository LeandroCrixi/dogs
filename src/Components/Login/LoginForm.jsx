import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const {userLogin, error, loading} = React.useContext(UserContext)

  async function handleSubmit(event){
    event.preventDefault()

    if(username.validate() && password.validate()){
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='Username' type='text' name='username' {...username}/>
        <Input label='Password' type='password' name='password' {...password}/>
        {loading ? <Button disabled>Loading...</Button> : <Button>Login</Button>}
        <Error error={error}/>
        {error && <p>{error}</p>}
      </form>
      <Link className={styles.perdeu} to='/login/perdeu'>Forgot Password?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Register Now</h2>
        <p>You don`t have an account? Register now.</p>
        <Link className={stylesBtn.button} to='/login/criar'>Register</Link>
      </div>
    </section>
  )
}

export default LoginForm
