
import React, { PureComponent } from 'react'
import { Image } from 'react-native'

type Props = {
    tintColor: any,
    normalImage:any,
    selectedImage:any,
    focused:boolean,
}


class TabBarItem extends PureComponent<Props,State> {
    render() {
        let {tintColor,normalImage,selectedImage,focused} = this.props
        return (
            <Image
                source={focused
                    ? selectedImage
                    : normalImage}
                style={{ tintColor: tintColor, width: 25, height: 25 }}
            />
        )
    }
}


export default TabBarItem
