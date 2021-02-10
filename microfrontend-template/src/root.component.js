import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import App from './App';
import { storeInstance } from './store';


const darkTheme =  createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      contrastText: '#ECEFF4',
      dark: '#66bad2',
      light: '#7986cb',
      main: '#88c0d0',
    },
    secondary: {
      contrastText: '#ECEFF4',
      dark: '#00b8d4',
      light: '#18ffff',
      main: '#5E81AC',
    },
    gradientPrimary: {
      main: 'linear-gradient(60deg, #5E81AC, #81A1C1)',
    },
    background: {
      default: '#1c2429',
      paper: '#2E3440',
    },
    common: {
      white: '#ECEFF4',
    },
    action: {
      hover: '#4C566A',
      selected: '#4C566A',
      active: '#ECEFF4',
    },
    error: {
      main: '#bf616a',
      dark: '#b83643',
      light: '#d67f88',
      contrastText: '#ECEFF4',
    },
    text: {
      primary: '#ECEFF4',
      secondary: '#D8DEE9',
    },
    greyColorDepth: ['#434C5E', '#3B4252', '#2E3440', '#1C2429'],
    notifications: {
      success: { backgroundColor: '#A3BE8C', color: '#ECEFF4' },
      error: { backgroundColor: '#BF616A', color: '#ECEFF4' },
      warning: { main: '#D08770', color: '#ECEFF4', dark: '#F56A00' },
      info: { backgroundColor: '#EBCB8B', color: '#ECEFF4' },
    },
  },
  overrides: {
    MuiStepIcon: {
      root: {
        color: '#5E81AC',
      },
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class Root extends React.Component {

  state = {
    hasError: false,
    globalEventDistributor: this.props.globalEventDistributor,
  }

  componentDidCatch (error, info) {
    this.setState({hasError: true})
  }

  render () {
    return (
      // for singleSpa
      // <Provider store={this.props.store}>
      <Provider store={storeInstance}>
        {/* material UI and custom theme */}
        <ThemeProvider theme={darkTheme}>
          <App
            globalEventDistributor={ this.state.globalEventDistributor }
          />
        </ThemeProvider>
      </Provider>
      
    )
  }
}

export default Root;