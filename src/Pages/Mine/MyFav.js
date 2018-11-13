import React,{PureComponent} from 'react'
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native'
import color from '../../widget/color'
import screen from '../../common/screen'
import HomeListScene from '../Home/HomeListScene'
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view'
import * as api from '../../api'
import ItemCell from '../../widget/ItemCell'
type Props = {

}

type State = {

}


class MyFav extends PureComponent<Props,State>{
    static navigationOptions = () =>　({
		headerStyle:{backgroundColor:color.primary},
		headerTitle:(
			<Text style={{color:'#fff'}}>我的收藏</Text>
		)
    })
    
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
        let url = api['toutiao']
        let callback = api['toutiaoCallback']
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
        return(
          <ItemCell 
            info={rowData.item}
          />
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
    
})

export default MyFav
