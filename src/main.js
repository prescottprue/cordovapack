import React from 'react'
import ReactDOM from 'react-dom'

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '12rem'
  }
}

class App extends React.Component {
  componentDidMount() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  }

  onDeviceReady = () => {
    this.receivedEvent('deviceready');
  }

  receivedEvent = (event) => {
    console.log('Received Event: ' + id);
  }

  render() {
    return (
      <div style={styles.main}>
        <span>React + Cordova + Webpack</span><br />
        <span>Line 2</span>
      </div>
    )
  }
}

const MOUNT_NODE = document.getElementById('root')


ReactDOM.render(
  <App />,
  MOUNT_NODE
)
