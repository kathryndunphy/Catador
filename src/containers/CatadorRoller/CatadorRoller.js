import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Cigar from '../../components/Cigar/Cigar';
import RollControls from '../../components/Cigar/RollControls/RollControls';

class CatadorRoller extends Component {
    state = {
        leaf: {
            'cigar-binder': 0,
            filler: 1,
            aroma: 1,
            'cigar-wrapper': 0
        }
    }
    render () {
        return (
          <Aux>
              <Cigar leaf={this.state.leaf} />
              <RollControls />
          </Aux>  
        );
    }
}

export default CatadorRoller;