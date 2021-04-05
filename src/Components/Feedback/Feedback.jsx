import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import React from 'react';
import style from '../Feedback/Feedback.module.css';

class Feedback extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    static counts = {
        Total: 0,
        PositivePercentage: 0,
    }
    
    state ={
        good: 0,
        neutral: 0,
        bad: 0,
        total:0,
        PositivePercentage: 0,
    };
    
    handleIncrement =(ivent) =>{
        this.setState(prevState =>{
            const newIvent ={};
            newIvent[ivent] = prevState[ivent]+1;
            return newIvent; 
        });
    };

    countTotalFeedback () {
        this.setState(prevState => {
            return {
                total: prevState.good + prevState.neutral + prevState.bad,
            };
        });
    }
    
    
    countPositiveFeedbackPercentage = () =>{
        return this.countTotalFeedback() === 0
        ? 0
        : Math.round((100 * Number(this.state.good)) / this.countTotalFeedback());
    }

    render (){
        return(
            <div className = {style.feedback}>
                <Section title = "Please leave feedback" />
                <div>
                    <FeedbackOptions options={this.state} 
                    onLeaveFeedback={this.handleIncrement}>
                    </FeedbackOptions>
                </div>
                <div>
                <span>Statistics</span>
                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                    <p>Total:{this.countTotalFeedback()}</p>
                    <p>PositivePercentage:{this.countPositiveFeedbackPercentage()}%</p>
                </div>
            </div> 
        );
    }
}

export default Feedback;