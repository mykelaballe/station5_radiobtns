import React from 'react'
import {RadioButton as Btn} from 'react-native-paper'
import {Row, Spacer, Text}  from '@components'
import {Colors} from '@themes'
import style from './style'

export default ({index, data, onPress}) => (
    <Row>
        <Btn
            disabled={data.disabled}
            color={Colors.primary}
            status={data.selected && 'checked'}
            onPress={() => onPress(data)}
        />
        <Spacer h sm />
        <Text style={style.label}>{data.value}</Text>
    </Row>
)