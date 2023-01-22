import React, { useState } from 'react'

import Input from './components/Goals/Input/Input'
import List from './components/Goals/List/List'
import './App.css'

const App = () => {

  const [projectGoals, setProjectGoals] = useState([
    { text: 'Закончить со всеми целями!', id: 'g1' },
    { text: 'Завершить разработку', id: 'g2' }
  ])

  const addGoalHandler = enteredText => {
    setProjectGoals(prevGoals => {
      const updatedGoals = [...prevGoals]
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() })
      return updatedGoals
    })
  }

  const deleteItemHandler = goalId => {
    setProjectGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    })
  }

  let content = (
    <p style={{ textAlign: 'center' }}>Цели не найдены. Может быть, добавим одну?</p>
  )

  if (projectGoals.length > 0) {
    content = (
      <List items={projectGoals} onDeleteItem={deleteItemHandler} />
    )
  }

  return (
    <div>
      <section id="goal-form">
        <Input onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App
