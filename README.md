# stateAbbreviation.js
Convert state abbreviation to name and vice versa.

## Use

```js

var stateList = new stateAbbreviation();

// get the list
stateList.list;

// optionally get the list upper or lower case
stateList.caseTransform( 'upper' );

// Convert - pass a state name or abbreviation 
// and optionally the desired type of capitalization
stateList.stateConvert( 'CA', 'lower' );

```
