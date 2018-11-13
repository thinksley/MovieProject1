import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native'
import color from '../../widget/color'
import screen from '../../common/screen'

type Props = {

}

type State = {

}


class MyComment extends PureComponent<Props,State>{
    static navigationOptions = () =>　({
		headerStyle:{backgroundColor:color.primary},
		headerTitle:(
			<Text style={{color:'#fff'}}>我的评价</Text>
		)
    })
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>暂无内容</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})

export default MyComment
