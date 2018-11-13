import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native'
import screen from '../common/screen'
import color from '../widget/color'
type Props = {
    info:Object,
    onPress:Function
}

type State = {

}


class ItemCellTopic extends PureComponent<Props,State>{

    render(){
        let {info,onPress}  = this.props
        let itemElements
        if(info.imgsrc!=''){
            itemElements=(
                <TouchableOpacity style={styles.container} onPress={()=>{
                    onPress()
                }}>
                    <Image style={styles.icon} source={{uri:info.imgsrc?info.imgsrc:''}}/>
                    <View style={styles.bottom}>
                        <Text style={{textAlign:'center',fontSize:18,backgroundColor:'transparent',color:'#fff',fontWeight:'bold'}}>{info.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View>
                {itemElements}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        
        borderBottomWidth: screen.onePixel,
        borderColor: color.border,
        
        flex:1,
        position:"relative"
    },
    icon: {
        width: '100%',
        height: 200
    },
    bottom: {
        position:"absolute",
        bottom:6,
        left:0,
        width:'100%'
    }
})

export default ItemCellTopic
