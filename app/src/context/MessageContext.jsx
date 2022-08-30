import { createContext, useState } from 'react'

export const MessageContext = createContext()

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState('')

  const setFlashMessage = (newMessage, type = 'success') => {
    let color, bgColor, borderColor

    switch (type) {
      case 'success':
        color = '#048c7f'
        bgColor = '#dbfffb'
        borderColor = '#048c7f'
        break
      case 'info':
        color = '#31708f'
        bgColor = '#d9edf7'
        borderColor = '#7eb6c1'
        break
      case 'warning':
        color = '#8a6d3b'
        bgColor = '#fcf8e3'
        borderColor = '#b1a181'
        break
      case 'danger':
        color = '#721c24'
        bgColor = '#f8d7da'
        borderColor = '#dc3545'
        break
    }

    document.documentElement.style.setProperty('--color', color)
    document.documentElement.style.setProperty('--bg-color', bgColor)
    document.documentElement.style.setProperty('--border-color', borderColor)

    setMessage(newMessage)
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  const data = { message, setFlashMessage }

  return (
    <MessageContext.Provider value={data}>{children}</MessageContext.Provider>
  )
}
