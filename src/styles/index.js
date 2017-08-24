import { StyleSheet, Dimensions } from 'react-native';

let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  homeContiner: {

  },
  by: {
    bottom: 10,
    position: 'absolute',
    marginHorizontal: 10
  },
  textInput: {height: 40, borderColor: 'gray', borderWidth: 1},
  text_center: {
    textAlign: 'center'
  },
  gameBoardBox: {
    marginTop: 15,
    width: width*0.7,
    marginHorizontal: width*0.15
  },
  gameBoardBoxText: {
    textAlign: 'center',
    color: '#000',
    marginTop: 5,
    borderColor: '#000',
    borderWidth: 1,
    padding: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  inputGroupContainer: {
    width,
    height: 40,
    paddingLeft: 30,
    paddingRight: 30
  },
  inputGroup: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  input: {

  },
  label: {

  },
  numberInputContainer: {
    width: 80,
    height: 40
  },
  numberInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },
  numberInputButtonText: {
    color: '#4785e8',
    fontSize: 36
  },
  textMd: {
    fontSize: 24
  },
  buttonGroupContainer: {
    width: 500,
    height: 50
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textGroupContainer: {
    width: 500,
    height: 200
  },
  textGroup: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default styles;
