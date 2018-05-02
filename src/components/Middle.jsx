import React from 'react'
import ReactDOM from 'react-dom'

class Middle extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui basic center aligned segment">
          <h1>TITLE</h1>
          <p>Subtitle Is Here</p>
        </div>
        <div className="ui stackable two column grid">
          <div className="column">
            <div className="ui basic left aligned segment">
              <p>eram tamen irure nisi quem illum quid noster ipsum quorum quid anim nulla multos
                culpa tamen veniam multos elit quorum quid legam nulla illum veniam noster eram
                magna nulla aute tempor noster eram minim dolor veniam sint illum elit duis elit
                elit elit legam tempor eram velit nisi nisi multos</p>
            </div>
          </div>
          <div className="column">
            <div className="ui basic left aligned segment">
              <p>quae enim quorum illum dolor quid quid sunt sint magna illum fore noster eram
                veniam minim irure fugiat quorum fore culpa export culpa sunt tempor quem tempor
                amet export export elit legam quorum minim nulla magna quis quae summis export
                minim aute malis sint ipsum multos legam amet noster quid</p>
            </div>
          </div>
        </div>
        <div className="ui basic very padded center aligned segment">
          <button className="ui secondary basic button">Button</button>
        </div>
      </div>
    )
  }
}
export default Middle
