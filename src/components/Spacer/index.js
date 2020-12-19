import React from 'react'
import {View} from 'react-native'
import {Metrics} from '@themes'

export default ({h, xs, sm, md, lg, xl, children}) => {

    let size = 'rg'

    if(xs) size = 'xs'
    else if(sm) size = 'sm'
    else if(md) size = 'md'
    else if(lg) size = 'lg'
    else if(xl) size = 'xl'
    
    return (
        <View style={{
            [`margin${h ? 'Horizontal' : 'Vertical'}`]: Metrics[size]
        }}>
            {children}
        </View>
    )
}