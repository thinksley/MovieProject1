import React,{PureComponent} from 'react'
import {StyleSheet, View,Image,Text} from 'react-native'
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation'
import HomeScene from './Pages/Home/HomeScene'
import MineScene from './Pages/Mine/MineScene'
import color from './widget/color'
import TabBarItem from './widget/TabBarItem'
import DetailScene from './Pages/Detail/DetailScene'
import MyFav from './Pages/Mine/MyFav'
import MyComment from './Pages/Mine/MyComment'
import AboutApp from './Pages/Mine/AboutApp'

class RootScene extends PureComponent<{}>{
	render () {
		return (
                <Navigator/>
			)
	}
}

const Tab = TabNavigator({
	Home: {
        screen: HomeScene,
        navigationOptions: ({navigation}) => ({
        	title:'首页',
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
            	<TabBarItem 
            		normalImage={require('./img/tabbar/tabbar_homepage.png')}
            		selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
            		tintColor={tintColor}
            		focused={focused}
            	 />
                
            )
        }),
    },
    Mine: {
        screen: MineScene,
        navigationOptions: ({navigation}) => ({
			tabBarLabel: '个人中心',
			title:'个人中心',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem 
            		normalImage={require('./img/tabbar/tabbar_mine.png')}
            		selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
            		tintColor={tintColor}
            		focused={focused}
            	/>
            )
        }),
    }
},{
	tabBarComponent:TabBarBottom,
	tarBarPosition: 'bottom',
	lazy:true,  // 加载全部
	animationEnabled: true,
	swiperEnabled:true,
	tabBarOptions:{
		activeTintColor:color.primary,
		inactiveTintColor:color.gray,
		style:{
			backgroundColor:color.white
		}
	}

})

const Navigator = StackNavigator({
	Tab:{screen:Tab},
	DetailScene:{screen:DetailScene},
	MyFav:{screen:MyFav},
	MyComment:{screen:MyComment},
	AboutApp:{screen:AboutApp}
},{
	navigationOptions:{
		headerTintColor:color.white,  // 顶部导航文字颜色
		headerBackTitle: null
	}
})

export default RootScene