import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_RESET } from '../../api'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom'

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setkey] = React.useState('')
  const password = useForm()
  const {error, loading, request} = useFetch()
  const navigate = useNavigate()

  React.useEffect(() =>{
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setkey(key)
    if(login) setLogin(login)
  }, [])

  async function handleSubmit(event){
    event.preventDefault()
    if(password.validate()){
      const {url, options} = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      })
      const {response} = await request(url, options)
      if (response.ok) navigate('/login')
    }
  }

  return (
    <div>
      <h1 className='title'>Reset your password</h1>
      <form onSubmit={handleSubmit}>
        <Input lable='New Password' type='password' name='password' {...password}/>
        {loading? <Button disabled>Reseting...</Button> : <Button>Reset</Button>}
      </form>
      <Error error={error}/>
    </div>
  )
}

export default LoginPasswordReset
