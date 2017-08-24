import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Styles from '../styles';
import NumberInput from './NumberInput';

export default class InputGroup extends Component {
  render() {
    return (
      <View style={Styles.inputGroupContainer}>
          <View style={Styles.inputGroup}>
            <Text style={Styles.textMd}>{this.props.labelText}</Text>
            <NumberInput
                min={this.props.min}
                max={this.props.max}
                interval={this.props.interval}
                onValueChange={(value) => {
                  this.props.onValueChange(value);
                }}
            />
          </View>
        </View>
    )
  }
}
