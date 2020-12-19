import React from 'react'
import {Text, HR, Spacer} from '@components'
import style from './style'

export default ({title}) => (
    <>
        <Spacer />
        <Text style={style.text}>{title}</Text>
        <HR />
        <Spacer />
    </>
)