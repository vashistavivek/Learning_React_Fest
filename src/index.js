import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Welcome from './Welcome';
import Error from './Error';
import App from './App';

let sum = {
  first:10,
  second:20,
  total:30
}


const Hiring = () => 
  <div>
    Hey! we are hiring, if interested then check this out for more.
  </div>

const Nothiring = () => 
  <div>
    Sorry! we are not hiring, check back later for more info.
  </div>

class Message extends Component{
  state = {
    open:true
  }

  toggleOpenClosed = () => {
    this.setState( prevState => ({
      open: !prevState.open
    }))
  }
  render(){
    const {first, second, total} = this.props;
    return (
      <BrowserRouter>
        <section>
          {this.state.open ? <Hiring /> : <Nothiring />}
          <button onClick = {this.toggleOpenClosed}>Click Me</button>
          <Link to="/Welcome" > Go to Welcome...</Link>
          <Switch>
            <Route exact path="/Welcome" component={Welcome} />
            <Route component={Error} />
          </Switch>
          <div>
            <h1>First: {first}</h1>
          </div>
          <div>
            <h1>Second: {second}</h1>
          </div>
          <div>
            <h1>Total: {total}</h1>
          </div>
        </section>
      </BrowserRouter>
    )
  }
}


render(<App first={sum.first} total={sum.total} second={sum.second} />,document.getElementById('root'))