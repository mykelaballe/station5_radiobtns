import React, {useEffect, useState} from 'react'
import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native'
import {Radio, Heading} from '@components'
import {getData} from '@services'
import {Metrics} from '@themes'

export default () => {

  const [menus1, setMenus1] = useState([])
  const [menus2, setMenus2] = useState([])
  const [menus3, setMenus3] = useState([])
  const [rules, setRules] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData()

        if(res.success) {

          setMenus1(res.menus[0].map(m => {
            m.type = 1
            m.selected = false
            return m
          }))

          setMenus2(res.menus[1].map(m => {
            m.disabled = true
            m.type = 2
            m.selected = false
            return m
          }))

          setMenus3(res.menus[2].map(m => {
            m.disabled = true
            m.type = 3
            m.selected = false
            return m
          }))

          setRules(res.rules)
        }
        else {
          alert(res.message)
        }
      }
      catch(err) {
        alert(err)
      }

      setLoading(false)
    }

    fetchData()
  },[])

  const handleSelect = ({id, type}) => {
    setMenus1(prevMenu => updateItems(prevMenu, {id, type}))

    setMenus2(prevMenu => updateItems(prevMenu, {id, type}))

    setMenus3(prevMenu => updateItems(prevMenu, {id, type}))
  }

  const updateItems = (items, {id, type}) => {
    const newItems = [...items]

    newItems.map(m => {
      if(type == m.type) m.selected = m.id === id

      m.disabled = rules[id] !== undefined && rules[id].indexOf(parseInt(m.id)) >= 0 ? true : false
    })

    return newItems
  }

  const renderItems = items => items.map((m, i) => <Radio key={i} index={i} data={m} onPress={handleSelect} />)

  if(loading) return <ActivityIndicator />

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Heading title='First Group' />
      {renderItems(menus1)}

      <Heading title='Second Group' />
      {renderItems(menus2)}

      <Heading title='Third Group' />
      {renderItems(menus3)}
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    padding: Metrics.lg
  }
})