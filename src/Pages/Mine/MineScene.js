import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text,ScrollView,RefreshControl} from 'react-native'
import NavigationItem from '../../widget/NavigationItem'
import color from '../../widget/color'
import screen from '../../common/screen'
import SpacingView from '../../widget/SpacingView'
import DetailCell from '../../widget/DetailCell'
import {Heading2,Paragraph,Heading1,Heading3} from '../../widget/Text'
type Props = {

}

type State = {
    isRefreshing: boolean,
}


class MineScene extends PureComponent<Props,State>{
    constructor(props: Object) {
        super(props)

        this.state = {
            isRefreshing: false
        }
    }

    onHeaderRefresh() {
        this.setState({isRefreshing: true})

        setTimeout(() => {
            this.setState({isRefreshing: false})
        }, 2000)
    }

    static navigationOptions = ({navigation}: any) => ({
        headerRight: (
            <View style={{flexDirection: 'row'}}>
                <NavigationItem
                    icon={require('../../img/mine/icon_navigation_item_set_white.png')}
                    onPress={() => {

                    }}
                />
                <NavigationItem
                    icon={require('../../img/mine/icon_navigation_item_message_white.png')}
                    onPress={() => {

                    }}
                />
            </View>
        ),
        headerStyle: {
            backgroundColor: color.primary,
            elevation: 0, //for android
            borderBottomWidth: 0, //for ios
        },
    })
    renderHeader(){
        return (
            <View style={styles.header}>
                <Image style={styles.avatar} source={require('../../img/mine/avator.jpeg')} />
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Heading2 style={{color: 'white'}}>thinkelsy</Heading2>
                    </View>
                    <Paragraph style={{color: 'white', marginTop: 4}}>个人信息 ></Paragraph>
                </View>
            </View>
        )
    }

    getDataList(){
        return (
            [
                [
                    {title: '我的评价', id:'myComment', image: require('../../img/mine/icon_mine_comment.png')},
                    {title: '我的收藏', id:'myFav', image: require('../../img/mine/icon_mine_collection.png')}
                ],
                [
                    {title: '关于此app', id:'aboutApp', image: require('../../img/mine/icon_mine_aboutmeituan.png')}
                ]
            ]
        )
    }
    onSelected =(id)=>{
        switch(id){
            case 'myComment':
                this.props.navigation.navigate('MyComment')
                break
            case 'myFav':
                this.props.navigation.navigate('MyFav')
                break
            case 'aboutApp':
                this.props.navigation.navigate('AboutApp')
            default :
                break
        }
        
    }
    renderCells(){
        let cells = []
        let dataList = this.getDataList()

        for(let i=0;i<dataList.length;i++){
            let sublist = dataList[i]
            for(let j=0;j<sublist.length;j++){
                let data = sublist[j]
                let cell = (
                    <DetailCell
                        key={data.title}
                        title={data.title}
                        subtitle={data.subtitle}
                        image={data.image}
                        onSelected={()=>this.onSelected(data.id)}
                    />
                )
                cells.push(cell)
            }
            cells.push(
                <SpacingView key={i}/>
            )
        }
        return(
            <View>
                {cells}
            </View>
        )
    }

    render(){
        return (
            <View style={{flex:1,backgroundColor:color.paper}}>
                <View style={styles.headerBackground}/>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }
                >
                    {this.renderHeader()}
                    <SpacingView/>
                    {this.renderCells()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 27,
        height: 27,
    },
    header: {
        backgroundColor: color.primary,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    },
    headerBackground:{
        position:'absolute',
        width:screen.width,
        height:screen.height/4,
        backgroundColor:color.primary
    }
})

export default MineScene
