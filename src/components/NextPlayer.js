import React, { Component } from 'react';
import {
  View,
  Text,
  BackAndroid,
  Button,
  TextInput,
  ToastAndroid
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';

import Styles from '../styles';

class NextPlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.textGroupContainer}>
          <View style={Styles.textGroup}>
            <Text>Team</Text>
            <Text>{this.props.next}</Text>
          </View>
          <View style={Styles.textGroup}>
            <Text>Time</Text>
            <Text>{this.props.config.gameTime}</Text>
          </View>
          <View style={Styles.textGroup}>
            <Text>Question Count</Text>
            <Text>{this.props.config.questionLength}</Text>
          </View>
          <View style={Styles.textGroup}>
            <Text>Score</Text>
            <Text>{this.props.score.join('/')}</Text>
          </View>
          <View style={Styles.textGroup}>
            <Text>Game Score</Text>
            <Text>{this.props.config.maxScore}</Text>
          </View>
        </View>
        <View style={Styles.buttonGroupContainer}>
          <View style={Styles.buttonGroup}>
            <Button
              onPress={() => {
                Actions.home();
              }}
              title="< Home"
              color="#008000"
            />
            <Button
              onPress={() => {
                Actions.game_board();
              }}
              title="Go >"
              color="#008000"
            />
          </View>
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
        next: store.next,
        config: store.config,
        score: store.score,
        routes: store.routes
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NextPlayer);
