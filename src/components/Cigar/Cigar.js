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
      <CigarLeaf type='cigar-binder' />
      {transformedLeaves}
      <CigarLeaf type='cigar-wrapper' />      
    </div>
  );
};

export default cigar;
