import { Component } from 'react';
import style from './Components/Feedback/Feedback.module.css';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistic from './Components/Statistics/Statistics';
import Section from './Components/Section/Section';
import Notification from './Components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement =(ivent) =>{
    this.setState(prevState =>{
        const newIvent ={};
        newIvent[ivent] = prevState[ivent]+1;
        return newIvent; 
    });
};

countTotalFeedback = () =>
Object.values(this.state).reduce((total, elem) => (total += elem), 0);


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
          {this.countTotalFeedback() === 0? (
          <Notification message="No feedback given" />):
          (<Statistic
              good= {this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
          />)}
      </div>
       
  );
}
}


export default App;
