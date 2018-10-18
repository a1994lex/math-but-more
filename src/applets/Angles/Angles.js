import React, {Component} from 'react'
import {showTooltip, hideTooltip} from '../../store/tools';
import {connect} from 'react-redux'
type Props = {
  showTooltip: Function,
  hideTooltip: Function,
}

class Angles extends Component<Props> {
  render() {
    return <div className="Angles">
      <button id={'button'} onClick={()=>{
        this.props.showTooltip('test', '#button')
        setTimeout(()=>this.props.hideTooltip(), 2000)
      }}>Hey</button>
    </div>
  }
}

const mapDispatchToProps = {
  showTooltip,
  hideTooltip,
}

export default connect(null, mapDispatchToProps)(Angles)
