import React, { Component } from 'react';
import { TouchableOpacity,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRandomBeer } from '../actions/beerActions';


class Search extends Component {
  render() {
    return (
      <View style={ style.container }>
        <View style={style.button}>
          <TouchableOpacity onPress={this.props.getRandomBeer}>
            <Text style={style.button__text}>
              Fetch me a beer !
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getRandomBeer
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const style = StyleSheet.create({
  container: {
    height: 100,
    alignItems: 'center',
    justifyContent:'center',
    borderBottomColor: '#B53409',
    borderBottomWidth: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor:'#9E1000',
    height: 50,
    width: 250,
  },
  button__text: {
    color: 'white',
    fontSize: 20
  }
});
