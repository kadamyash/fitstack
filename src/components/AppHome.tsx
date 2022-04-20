import React from 'react'
import { Link } from 'react-router-dom'

export default function AppHome() {
  return (
    <div className='Page '>
        <div className="grid grid-2 toolset">
            <Link to={'/bmi'} className="card">
                <div className="subtitle">BMI</div>
                <div className="title">Body Mass Index</div>
            </Link>
            <Link to={'/fat-calculator'} className="card">
                <div className="subtitle">Fat %</div>
                <div className="title">Body Fat</div>
            </Link>
            <Link to={'/steps-calculator'} className="card">
                <div className="subtitle">Steps</div>
                <div className="title">Steps Calculator</div>
            </Link>
            <Link to={'/calories-calculator'} className="card">
                <div className="subtitle">Cals</div>
                <div className="title">Calories Burnt</div>
            </Link>
        </div>
        <div className="btn btn-primary">Learn More</div>

    </div>
  )
}
