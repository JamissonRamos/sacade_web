import React, { useState } from 'react'
import * as S from './styled'
import { Theme } from '../../theme'

const AlertCustom = ({variant, children}) => {
  const [showAlert, setShowAlert] = useState(true)

  const handleOnclick = ( ) => {
    setShowAlert(false)
  }

  setTimeout(() => {
    setShowAlert(false);
  }, 5003);  // Hide alert after 5 seconds

  return (
    <>
      {
        showAlert && <S.AlertCustom $variant={variant}>
        <S.Closse onClick={handleOnclick}>
          { <Theme.Icons.MdClose  />}
        </S.Closse>
          {children}
        </S.AlertCustom>
      }
    </>
  )
}

export default AlertCustom