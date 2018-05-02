import React from 'react'
import ReactDOM from 'react-dom'

class ServiceItem extends React.Component {
  render () {
    var iconStyle = {
      fontSize: '40px'
    }

    return (
      <div className="column">
        <div className="ui basic center aligned segment">
          <i className={this.props.icon + ' icon'} style={iconStyle}></i>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

class Service extends React.Component {
  constructor(props, context){
    super(props, context)

    this.state = {
      content: [
        {
          icon: 'diamond',
          title: 'Sturdy Templates',
          description: 'This templates are updated regularly so they dont break.'
        },
        {
          icon: 'send',
          title: 'Ready to Ship',
          description: 'You can use this theme as is,, or you can make changes!'
        },
        {
          icon: 'newspaper',
          title: 'Up to Date',
          description: 'We update dependencies to keep things fresh.'
        },
        {
          icon: 'heart',
          title: 'Made with Love',
          description: 'You have to make your websites with love these days!'
        }
      ]
    }
  }

  render () {
    var Item = this.state.content.map((element,index) => {
      return (
        <ServiceItem
          icon={element.icon}
          title={element.title}
          description={element.description}
          key={index}
        />
      )
    })

    return (
      <div className="ui container">
        <div className="ui basic center aligned segment">
          <h1>At Your Service</h1>
        </div>

        <div className="ui doubling four column grid">
          {Item}
        </div>
      </div>
    )
  }
}

export default Service
