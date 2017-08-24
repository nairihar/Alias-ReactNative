import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import Styles from '../styles';

export default class NumberInput extends Component {
  state = {value: this.props.min.toString()}
  increase() {
    if(+this.state.value == this.props.max) return;

    var val = +this.state.value + (+this.props.interval || 1);
    if(val > this.props.max) val = this.props.max;
    this.setState({value: val});
    this.props.onValueChange(val);
  }

  decrease() {
    if(+this.state.value == this.props.min) return;

    var val = +this.state.value - (+this.props.interval || 1);

    if(val < this.props.min) val = this.props.min;

    this.setState({value: val});
    this.props.onValueChange(val);
  }

  render() {
    return (
        <View style={Styles.numberInputContainer}>
          <View style={Styles.numberInput}>
            <TouchableOpacity onPress={this.decrease.bind(this)}>
              <Text style={Styles.numberInputButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={Styles.textMd}>{this.state.value}</Text>
            <TouchableOpacity onPress={this.increase.bind(this)}>
              <Text style={Styles.numberInputButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}
