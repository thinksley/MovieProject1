import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text,FlatList,TouchableOpacity} from 'react-native'

import HomeListScene from './HomeListScene'
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view'
import DetailScene from '../Detail/DetailScene'
import color from '../../widget/color'

type Props = {
    navigation: any,
}

type State = {
    refreshState:number,
}


class HomeScene extends PureComponent<Props,State>{
    constructor(props:Object){
        super(props)
        this.state={
          data:[]
        }
    }
    // 一定要用箭头函数
    onGridSelected  = (url) => {
        this.props.navigation.navigate('DetailScene', {url: url})
    }

    static navigationOptions = ({navigation}: any) => ({
        headerStyle: {
            backgroundColor: color.primary,
            elevation: 0, //for android
            borderBottomWidth: 0, //for ios
        },
    })

    render(){
        let titles = [
            {title:'头条',id:'toutiao'},
            {title:'精选',id:'choice'},
            {title:'娱乐',id:'entertainment'},
            {title:'汽车',id:'auto'},
            {title:'运动',id:'sport'}
        ]

        return (
            <View style={styles.container}>
                <ScrollableTabView
                    tabBarBackgroundColor='#fff'
                    tabBarActiveTextColor='#FE566D'
                    tabBarInactiveTextColor='#555'
                    tabBarTextStyle={styles.tabBarText}
                    tabBarUnderlineStyle={styles.tabBarUnderline}
                >
                {titles.map((item,i)=>(
                    <HomeListScene
                        tabLabel={item.title}
                        key={i}
                        titleId={item.id}
                        onGridSelected={(this.onGridSelected)}
                    ></HomeListScene>
                ))}
                </ScrollableTabView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    tabBarText: {
        fontSize: 14,
        marginTop: 13,
    },
    tabBarUnderline: {
        backgroundColor: '#FE566D'
    },
})

export default HomeScene
