import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  ScrollView
} from 'react-native';


class Display extends Component {
  render () {
    if (this.props.isFetching) {
      return (
        <View style={ style.activityIndicator } >
          <ActivityIndicator
            size="large"
            color="#B53409"
          />
        </View>
      );
    }
    if (this.props.randomBeer) {
      return (
        <View style={ style.container }>
          <View style={ style.image }>
            <Image style={ style.image__element } source={{uri: this.props.randomBeer.image_url }}></Image>
          </View>
          <View style={ style.info }>
            <Text style={ style.info__title }>{ this.props.randomBeer.name }</Text>
            <Text style={ style.info__tagline }>{ this.props.randomBeer.tagline }</Text>
            <ScrollView>
              <Text style={ style.info__desc }>{ this.props.randomBeer.description }</Text>
            </ScrollView>
          </View>
        </View>
      );
    } else {
      return (
        <View style={ style.quoteContainer }>
          <View style={ style.quote }>
            <Text style={ style.quote__text }>
              “You can't be a real country unless you have a beer and an airline
              - it helps if you have some kind of football team, or some nuclear weapons,
              but in the very least you need a beer.”
            </Text>
          </View>
            <Text style={ style.quote__author }>
              Frank Zappa
            </Text>
        </View>
      );
    }
  }
}

function mapStateToProps (state) {
  return {
    randomBeer: state.randomBeer,
    isFetching: state.isFetching
  };
}

export default connect(mapStateToProps)(Display);

const style = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    flex:1,
    padding: 10
  },
  image__element: {
    resizeMode: 'contain',
    flex: 1
  },
  info: {
    flex: 2,
    padding: 10
  },
  info__title: {
    fontSize: 30,
    marginBottom: 5
  },
  info__tagline: {
    fontSize: 20,
    marginBottom: 5
  },
  info__desc: {
    fontSize: 15,
    textAlign: 'justify'
  },
  quoteContainer: {
    flex: 1,
    padding: 50,
    justifyContent:'center',
  },
  quote: {
    justifyContent:'center',
  },
  quote__text: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  quote__author: {
    justifyContent:'flex-end',
    marginTop: 20,
    fontSize: 20,
    textAlign: 'right',
  }
});
