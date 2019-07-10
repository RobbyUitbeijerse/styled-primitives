import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Box } from '../src/Box'
import { Contain } from '../src/Contain'
import { Row } from '../src/Row'
import { Column } from '../src/Column'
import { Heading } from '../src/Heading'
import { Text } from '../src/Text'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Box>Hello</Box>
        <Contain>
          <Row>
            <Column col={6}>
              <Heading>Hello</Heading>
              <Text>Test</Text>
            </Column>
            <Column col={6}>
              <Heading color="red">Hello</Heading>
              <Text>Test</Text>
            </Column>
          </Row>
        </Contain>
      </>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
