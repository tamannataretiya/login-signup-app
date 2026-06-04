import { useState } from 'react'

function App() {
  const [page, setPage] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [message, setMessage] = useState('')

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async () => {
    const url = page === 'login' ? 'http://localhost:5000/login' : 'http://localhost:5000/register'
    const body = page === 'login' ? { email: form.email, password: form.password } : form
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      setMessage(data.message || data.error)
      if (data.token) localStorage.setItem('token', data.token)
    } catch (err) {
      setMessage('Server error!')
    }
  }

  const styles = {
    container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f2f5' },
    box: { background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', width: '360px' },
    title: { textAlign: 'center', marginBottom: '24px', fontSize: '24px', fontWeight: 'bold', color: '#333' },
    input: { width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer' },
    link: { textAlign: 'center', marginTop: '16px', fontSize: '14px', color: '#666' },
    a: { color: '#4f46e5', cursor: 'pointer', fontWeight: 'bold' },
    msg: { textAlign: 'center', marginTop: '12px', color: 'green', fontSize: '14px' }
  }

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>{page === 'login' ? 'Login' : 'Sign Up'}</h2>
        {page === 'signup' && <input style={styles.input} name="name" placeholder="Full Name" onChange={handle} />}
        <input style={styles.input} name="email" placeholder="Email" onChange={handle} />
        <input style={styles.input} name="password" type="password" placeholder="Password" onChange={handle} />
        <button style={styles.button} onClick={submit}>
          {page === 'login' ? 'Login' : 'Sign Up'}
        </button>
        {message && <p style={styles.msg}>{message}</p>}
        <p style={styles.link}>
          {page === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <span style={styles.a} onClick={() => { setPage(page === 'login' ? 'signup' : 'login'); setMessage('') }}>
            {page === 'login' ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default App