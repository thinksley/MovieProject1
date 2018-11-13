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


class ItemCell extends PureComponent<Props,State>{

    render(){
        let {info,onPress}  = this.props
        let itemElements
        if(info.imgsrc!=''){
            itemElements=(
                <TouchableOpacity style={styles.container} onPress={()=>{
                    onPress()
                }}>
                    <Image style={styles.icon} source={{uri:info.imgsrc?info.imgsrc:''}}/>
                    <View style={styles.rightContainer}>
                        <Text>{info.title}</Text>
                        <View style={{flex: 1, justifyContent: 'flex-end'}}>
                            <Text>{this.jsDateDiff(info.ptime)}  {info.replyCount}跟帖</Text>
                        </View>
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

    jsDateDiff = (str) => {
        var date = new Date()
        date.setFullYear(str.substring(0, 4))
        date.setMonth(str.substring(5, 7) - 1)
        date.setDate(str.substring(8, 10))
        date.setHours(str.substring(11, 13))
        date.setMinutes(str.substring(14, 16))
        date.setSeconds(str.substring(17, 19))
        let unixTime = Date.parse(date)/1000

        var d_minutes, d_hours, d_days
        var timeNow = parseInt(new Date().getTime() / 1000)
        var d
        d = timeNow - unixTime
        d_days = parseInt(d / 86400)
        d_hours = parseInt(d / 3600)
        d_minutes = parseInt(d / 60)
        if (d_days>0 && d_days<=1) {
            return "昨天"
        } else if (d_days <= 0 && d_hours > 0) {
            return d_hours + "小时前"
        } else if (d_hours <= 0 && d_minutes > 0) {
            return d_minutes + "分钟前"
        } else {
            var s = new Date(unixTime * 1000)
            return (s.getMonth() + 1) + "月" + s.getDate() + "日"
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: screen.onePixel,
        borderColor: color.border,
        backgroundColor: 'white',
        flex:1
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
})

export default ItemCell
