import React from 'react'

const Result = (team1Name , team2Name , team1Score , team2Score) => {


    const Result  = (team1name , team2name , team1Score , team2Score) => {
        return `Team ${team1name} has scored ${team1Score}, and Team ${team2name} has scored ${team2Score}`
    }
  return (
    <div>
      <h1>{Result}</h1>
    </div>
  )
}

export default Result


