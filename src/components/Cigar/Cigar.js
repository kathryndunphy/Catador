import React from "react";

import classes from "./Cigar.css";
import CigarLeaf from "./CigarLeaf/CigarLeaf";

const cigar = ( props ) => {
  const transformedLeaves = Object.keys(props.leaf)
  .map( igKey => {
    return [...Array(props.leaf[igKey])].map(( _, i) => {
      return <CigarLeaf key={igKey + i} type ={igKey} /> 
    });  
  });
  return (
    <div className={classes.Cigar}>
      <CigarLeaf  />
      {transformedLeaves}
      <CigarLeaf  />      
    </div>
  );
};

export default cigar;
