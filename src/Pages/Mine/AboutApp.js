import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native'
import color from '../../widget/color'
import screen from '../../common/screen'
import {Paragraph,Heading2} from '../../widget/Text'
import SpacingView from '../../widget/SpacingView'
import * as api from '../../api'
type Props = {

}

type State = {

}


class MyFav extends PureComponent<Props,State>{
    static navigationOptions = () =>　({
		headerStyle:{backgroundColor:color.primary},
		headerTitle:(
			<Text style={{color:'#fff'}}>关于APP</Text>
		)
    })
    
    constructor(props:Object){
        super(props)
        
    }
    
    render(){
        return (
            <View style={{margin:20}}>
                <Heading2>版本号：0.0.1</Heading2>
                <SpacingView/>
                <Heading2>开发环境： node  xocde react-native</Heading2>
                <SpacingView/>
                <Heading2>数据来源： 网易新闻接口</Heading2>
                <SpacingView/>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})

export default MyFav
