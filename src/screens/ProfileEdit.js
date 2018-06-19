import React, { Component } from 'react'
import AboutMutation from '../components/AboutMutation'
import ProfileEditView from '../components/ProfileEditView'

export default class ProfileEdit extends Component {
  goBack = () => {
    this.props.refetchAbout()
    this.props.navigator.pop({
      animated: true, // does the pop have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    })    
  }
  render() {
    const { about, whoami } = this.props
    return(
      <AboutMutation userId={whoami} goBack={this.goBack}>
        {mutationData => (
          <ProfileEditView
            {...mutationData}
            userId={whoami}
            {...about}
          />
        )}
      </AboutMutation>
    )
  }
}
