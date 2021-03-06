import React, {Component} from 'react';
import './App.css';
import { render } from '@testing-library/react';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';

class App extends Component{
  state={
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/Values')
      .then((response) => {
        this.setState({
          values: response.data
        });
      });
    
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Team Up</Header.Content>
        </Header>
        <List>
        {this.state.values.map((value: any)=>(
              <List.Item key={value.id}>{value.name}</List.Item>
            ))}
          
        </List>
          <ul>
            
          </ul>
        
      </div>
    );
  }
  
}

export default App;
