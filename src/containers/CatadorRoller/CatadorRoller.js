import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Cigar from '../../components/Cigar/Cigar';

class CatadorRoller extends Component {
    state = {
        leaf: {
            aroma: 1,
            'cigar-binder': 1,
            filler: 1,
            'cigar-wrapper': 1
        }
    }
    render () {
        return (
          <Aux>
              <Cigar leaf={this.state.leaf} />
              <div>Hand Rollers (build controls)</div>
          </Aux>  
        );
    }
}

export default CatadorRoller;