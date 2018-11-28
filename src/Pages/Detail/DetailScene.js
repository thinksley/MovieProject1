import React,{PureComponent} from 'react'
import {View, Text, StyleSheet, WebView, InteractionManager} from 'react-native'
import color from '../../widget/color'
type Props = {
    navigation: any,
}

type State = {
    source: Object,
}


class DetailScene extends PureComponent<Props,State>{
    
    static navigationOptions = () =>　({
		headerStyle:{backgroundColor:color.primary},
		headerTitle:(
			<Text style={{color:'#fff'}}>详情页</Text>
		)
	})
    constructor(props:Object){
        super(props)
        this.state={
          data:[]
        }
    }
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigation.setParams({title: '加载中'})
            this.setState({source: {uri: this.props.navigation.state.params.url}})
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    startInLoadingState={true}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={this.state.source}
                    onLoadEnd={(e) => this.onLoadEnd(e)}
                    scalesPageToFit
                    contentInset={{top:-48}}
                />
            </View>
        )
    }

    onLoadEnd(e: any) {
        if (e.nativeEvent.title.length > 0) {
            this.props.navigation.setParams({title: e.nativeEvent.title})
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
})

export default DetailScene
