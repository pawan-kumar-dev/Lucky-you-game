import React from 'react';
import './App.css';
import classes from './App.module.css';
import GameBoard from './Components/GameBoard';
import Boxes from './Components/Boxes';
class App extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      numArr:[],
      lucky:0,
      wrong:0,
      attempt:0,
      disNum:0,
      maxAttempt:10,
      show:false,
      matched:false
    }
  }
  componentDidMount=()=>{
    this.setState({
      numArr:this.generateNum(),
    })
  }
  generateNum=()=>{
     const numArr=[
        Math.floor(Math.random()*(35-0)+0)+1,
        Math.floor(Math.random()*(70-36)+36)+1,
        Math.floor(Math.random()*(100-71)+71)
      ]
      this.setState({
        disNum:numArr[0]
      })
      return numArr.sort(()=>Math.random()-0.5)
  }
check=(e)=>{
  const clickedVal=Number(e.target.children[0].innerHTML)
  const displayVal=this.state.disNum
  this.setState({
    attempt:this.state.attempt+1
  })
  if(clickedVal===displayVal){
    this.setState({
      show:true,
      lucky:this.state.lucky+1,
      matched:true
    })
  }
  else{
    this.setState({
      wrong:this.state.wrong+1,
      show:true,
      matched:false
    })
  }
}
loadNextNumber=()=>{//instead of the function calling on the click we can use the setTimeout() method, but to let the user wait for some time of to quickly switch to the next number, which is not preferable, so we have give the option to user to see all the numbers and then he/she can click to get the next random values
    this.setState({
      numArr:this.generateNum(),
      show:false,
      matched:false
    })
}
reStart=()=>{
  this.setState({
    numArr:this.generateNum(),
    lucky:0,
    wrong:0,
    attempt:0,
    maxAttempt:10,
    show:false,
    matched:false
  })
}
  render(){
    const {numArr,show,attempt,maxAttempt,lucky,wrong,disNum,matched}=this.state;
    const boxes=numArr.map((data)=>{
      return <Boxes show={show} attempt={attempt} maxAttempt={maxAttempt} check={this.check} key={data} data={data}/>
    })
    let won;
    if(attempt===maxAttempt){
      if(lucky>=0&&lucky<=3){
        won="Great Choice, But Bad Luck"
      }
      else if(lucky>=4&&lucky<=6){
        won="Great Choice, You have a Good Luck"
      }
      else if(lucky>=7&&lucky<=10){
        won="Great Choice, Extremely Lucky"
      }
    }
    return(
      <div className={classes.App}>
        <GameBoard attempt={attempt} maxAttempt={maxAttempt} lucky={lucky} wrong={wrong} disNum={disNum} boxes={boxes} won={won} reStart={this.reStart} loadNextNumber={this.loadNextNumber} show={show} matched={matched}/>
      </div>
    )
  }
}
export default App;
