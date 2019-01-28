import React from "react";

import classes from "./Cigar.css";
import CigarLeaf from "./CigarLeaf/CigarLeaf";

const cigar = props => {
  let transformedLeaves = Object.keys(props.leaf)
    .map(igKey => {
      return [...Array(props.leaf[igKey])].map((_, i) => {
        return <CigarLeaf key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedLeaves.length === 0) {
    transformedLeaves = <p>Add your leaf choices!</p>;
  }

  return (
    <div className={classes.Cigar}>
      <CigarLeaf />
      {transformedLeaves}
      <CigarLeaf  />
    </div>
  );
};

export default cigar;
