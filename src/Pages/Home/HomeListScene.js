import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text,FlatList,TouchableOpacity} from 'react-native'
import color from '../../widget/color'
import screen from '../../common/screen'
import ItemCell from '../../widget/ItemCell'
import ItemCellTopic from '../../widget/ItemCellTopic'
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view'
import * as api from '../../api'
type Props = {
    navigation: any,
    titleId: string,
    onGridSelected: Function,
}

type State = {
    refreshState:number,
}


class HomeListScene extends PureComponent<Props,State>{
    constructor(props:Object){
        super(props)
        this.state={
          data:[]
        }
    }
    componentDidMount(){
        this.requestFirstPage()
    }
    requestData = async (page:0,titleId) =>{
        let url = api[this.props.titleId]
        let callback = api[this.props.titleId+'Callback']
        try{
          let response = await fetch(url)
          let json = await response.json()
          return json[callback]
          
        }catch(e){
            alert('error'+e)
        }
    }
    requestFirstPage = async() => {
        try{
            this.setState({refreshState:RefreshState.HeaderRefreshing})
            let dataList = await this.requestData()
            this.setState({data:dataList,refreshState:RefreshState.Idle})
        }catch(e){
            this.setState({refreshState:RefreshState.Failure})
        }
    }
    
    renderItem = (rowData) => {
        let itemElements
        if(rowData.item.topic_background && rowData.item.topic_background!=''){
            itemElements=(
                <ItemCellTopic
                    info={rowData.item}
                    onPress={() => this.props.onGridSelected(rowData.item.url)}
                />
            )
        }else{
            itemElements=(
                <ItemCell 
                    info={rowData.item}
                    onPress={() => this.props.onGridSelected(rowData.item.url)}
                />
            )
        }
        return(
          <View>
              {itemElements}
          </View>
        )
    }
    render(){
        return (
            <View style={styles.container}>
                <RefreshListView
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index)=>index}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.requestFirstPage}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
})

export default HomeListScene
