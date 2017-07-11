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
        <View>
          <TouchableOpacity style={[style.button, this.props.isFetching && style.buttonInactive]}
                            disabled={this.props.isFetching}
                            onPress={this.props.getRandomBeer} >
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
    isFetching: state.isFetching
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
    borderTopColor: '#B53409',
    borderTopWidth: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor:'#9E1000',
    height: 50,
    width: 250,
  },
  buttonInactive: {
    backgroundColor:'#858585',
  },
  button__text: {
    color: 'white',
    fontSize: 20
  }
});
