import React, { Component } from 'react';
import {
  View,
  BackAndroid,
  Text,
  Button,
  TextInput
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';

import Styles from '../styles';

class GameFinish extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text_center}>Winner team is - {this.props.next}</Text>
        <Text style={Styles.text_center}>Score - {this.props.score.join('/')}</Text>
        <Button
          onPress={() => {
            Actions.home();
          }}
          title="Back"
          color="#008000"
        />
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
        score: store.score
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameFinish);
