import React from 'react'
import { Image, Navigator } from '@tarojs/components'
// bug
import footImage from '../../asset/common/icon_foot.png'

export default class Foot extends React.Component {
  render() {
    return (
      <Navigator
        className="page-foot"
        url="/pages/component/index"
        hoverClass="none"
      >
        <Image
          className="icon-foot"
          src={footImage}
        />
      </Navigator>
    )
  }
}
