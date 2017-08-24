import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Picker
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';
import InputGroup from '../components/InputGroup';

import { resetWords } from '../helpers/randomWords';
import Styles from '../styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionLength: '3',
      gameTime: '10',
      maxScore: '20'
    };
  }

  buttonPress() {
    let _gameTime = parseInt(this.state.gameTime),
        _maxScore = parseInt(this.state.maxScore),
        _questionLength = parseInt(this.state.questionLength);
    if(typeof _gameTime == 'number' && _gameTime >= 10 && _gameTime <= 600 &&
       typeof _maxScore == 'number' && _maxScore >= 20 && _maxScore <= 200 &&
       typeof _questionLength == 'number' && _questionLength >= 3 && _questionLength <= 8) {
          this.props.updateGameConfig({
            gameTime: _gameTime,
            maxScore: _maxScore,
            questionLength: _questionLength
          });
          resetWords();
          this.props.updateScore([0,0]);
          this.props.changeNextTeam(0);
          Actions.next_play();
       }
  }
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.innerContainer}>
          <InputGroup
            min={3}
            max={8}
            labelText="Question count"
            onValueChange={value => {
              this.setState({ questionLength: value })}
            }
          />
          <InputGroup
            min={10}
            max={60}
            interval={5}
            labelText="Time"
            onValueChange={gameTime => this.setState({gameTime})}
          />
          <InputGroup
            min={20}
            max={200}
            interval={10}
            labelText="Game Score"
            onValueChange={maxScore => this.setState({maxScore})}
          />
          <Button
            onPress={this.buttonPress.bind(this)}
            title="Play"
            color="#008000"
          />
        </View>
      </View>
   );
  }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
    return {
        config: store.config,
        score: store.score,
        next: store.next
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
