import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text,TouchableOpacity,ViewPropTypes} from 'react-native'

import Separator from './Separator'
import {Heading1,Heading2,Heading3,Paragraph} from './Text'
type Props = {
    image?:any,
    style?: ViewPropTypes.style,
    title: string,
    subtitle?: string,
    onSelected: Function
}

type State = {

}


class DetailCell extends PureComponent<Props,State>{

    render(){
        let {onSelected} = this.props
        let iconElement = this.props.image && (
            <Image style={styles.icon} source={this.props.image} />
        )
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>onSelected()}>
                    <View style={[styles.content, this.props.style]}>
                        {iconElement}
                        <Heading3>{this.props.title}</Heading3>
                        <View style={{flex: 1, backgroundColor: 'blue'}} />
                        <Paragraph style={{color: '#999999'}}>{this.props.subtitle}</Paragraph>
                        <Image style={styles.arrow} source={require('../img/public/cell_arrow.png')} />
                    </View>

                    <Separator />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
})

export default DetailCell
