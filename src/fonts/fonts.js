import { createGlobalStyle } from 'styled-components'

import SanFrancisco from './SFPRODISPLAYREGULAR.OTF'

export default createGlobalStyle`
    @font-face {
        font-family: 'San Francisco';
        src: url(${SanFrancisco}) format('opentype');
    }
`
