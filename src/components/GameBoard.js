import React, { Component } from 'react';
import {
  View,
  BackAndroid,
  Text,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';

import {Actions} from 'react-native-router-flux';

import Styles from '../styles';
import { getRandomWords } from '../helpers/randomWords';

var Sound = require('react-native-sound');

var correctSound = new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    alert('failed to load the sound', error);
  }
});

var timeSound = new Sound('time.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    alert('failed to load the sound', error);
  }
});

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      handCount: 0,
      correctWords: new Array(this.props.config.questionLength).fill(0),
      backgroundColors: new Array(this.props.config.questionLength).fill('#e0d7d7'),
      colors: ['#e0d7d7', '#008000'],
      timer: this.props.config.gameTime
    };
  }

  componentWillMount() {
    this.props.updateWords(getRandomWords(this.props.config.questionLength));

    let timer = setInterval(() => {
      if(!(this.state.timer - 1)) {
        clearInterval(timer);

        timeSound.play((success) => {
          if (!success) alert('Err');
        });

        let _newScore = this.props.score;
        _newScore[this.props.next] += this.state.count;
        this.props.updateScore(_newScore);

        if(_newScore[this.props.next] >= this.props.config.maxScore) {
          Actions.game_finish();
          return;
        }

        this.props.changeNextTeam(Math.abs(this.props.next - 1));
        Actions.next_play();
      }
      this.setState({
        timer: this.state.timer - 1
      });
    }, 1000);
  }

  render() {
    let words_group = this.props.words.map((word, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => {
          let _toggleNumber = Math.abs(this.state.correctWords[index] - 1);
          this.state.backgroundColors[index] = this.state.colors[_toggleNumber];
          this.state.correctWords[index] = _toggleNumber;

          if(_toggleNumber) {
            this.state.handCount += 1;
            this.state.count += 1;

            correctSound.play((success) => {
              if (!success) alert('Err');
            });
          } else {
            this.state.handCount -= 1;
            this.state.count -= 1;
          }

          let _state = {
            backgroundColors: this.state.backgroundColors,
            correctWords: this.state.correctWords,
            count: this.state.count
          };

          if(this.state.handCount !==0 && this.state.handCount%this.props.config.questionLength === 0) {
            this.props.updateWords(getRandomWords(this.props.config.questionLength));
            _state.correctWords = new Array(this.props.config.questionLength).fill(0);
            _state.backgroundColors = new Array(this.props.config.questionLength).fill('#e0d7d7');
            _state.handCount = 0;
          }

          this.setState(_state);
        }}>
          <View>
            <Text
              style={[ Styles.gameBoardBoxText, {"backgroundColor": this.state.backgroundColors[index]} ]}
              >{word}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={Styles.container}>
        <Text>
          Team {this.props.next}
        </Text>
        <Text style={Styles.text_center}>Score {this.state.count}</Text>
        <Text>
          -----------------
        </Text>
        <Text>
          Time {this.state.timer}
        </Text>
        <View style={Styles.gameBoardBox}>
          {words_group}
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
        words: store.words,
        config: store.config,
        score: store.score,
        next: store.next
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
