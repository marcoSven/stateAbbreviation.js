/*!
  stateAbbreviation.js 1.0.0
  license: GNU GENERAL PUBLIC LICENSE
  https://github.com/marcoSven/stateAbbreviation.js
  https://marcoSven.com/
*/

var stateAbbreviation = function() {

  var self = this;

  this.list = [
      ['AL','Alabama'],
      ['AK','Alaska'],
      ['AZ','Arizona'],
      ['AR','Arkansas'],
      ['CA','California'],
      ['CO','Colorado'],
      ['CT','Connecticut'],
      ['DE','Delaware'],
      ['DC','Washington DC'],
      ['FL','Florida'],
      ['GA','Georgia'],
      ['GU','Guam'],
      ['HI','Hawaii'],
      ['ID','Idaho'],
      ['IL','Illinois'],
      ['IN','Indiana'],
      ['IA','Iowa'],
      ['KS','Kansas'],
      ['KY','Kentucky'],
      ['LA','Louisiana'],
      ['ME','Maine'],
      ['MD','Maryland'],
      ['MA','Massachusetts'],
      ['MI','Michigan'],
      ['MN','Minnesota'],
      ['MS','Mississippi'],
      ['MO','Missouri'],
      ['MT','Montana'],
      ['NE','Nebraska'],
      ['NV','Nevada'],
      ['NH','New Hampshire'],
      ['NJ','New Jersey'],
      ['NM','New Mexico'],
      ['NY','New York'],
      ['NC','North Carolina'],
      ['ND','North Dakota'],
      ['OH','Ohio'],
      ['OK','Oklahoma'],
      ['OR','Oregon'],
      ['PA','Pennsylvania'],
      ['PR','Puerto Rico'],
      ['RI','Rhode Island'],
      ['SC','South Carolina'],
      ['SD','South Dakota'],
      ['TN','Tennessee'],
      ['TX','Texas'],
      ['VI','US Virgin Islands'],
      ['UT','Utah'],
      ['VT','Vermont'],
      ['VA','Virginia'],
      ['WA','Washington'],
      ['WV','West Virginia'],
      ['WI','Wisconsin'],
      ['WY','Wyoming']
    ];
  
  try{

    Object.defineProperty(

        Array.prototype, "toLowerCase", {
          enumerable: false,
          value: function() {

                      return this.map( function( t ) {

                        return t.toLowerCase();

                      })

                  }
        }

    );

    Object.defineProperty(

        Array.prototype, "toUpperCase", {
          enumerable: false,
          value: function() {

                      return this.map( function( t ) {

                          if ( t.toUpperCase ) {

                            return t.toUpperCase();

                          }

                          return t;

                      })

                  }
        }

    );
    
  }catch(e){};
  
  if (!Array.prototype.toLowerCase) {
    
      Array.prototype.toLowerCase = function() {

        return this.map( function( t ) {

            return t.toLowerCase();

        });

      };

      Array.prototype.toUpperCase = function() {

        return this.map( function( t ) {

          if ( t.toUpperCase ) {

            return t.toUpperCase();

          }

          return t;

        });

      };
  }
    

  this.caseTransform = function ( caseTo ) {

    switch( caseTo ) {

      case "lower":

          return self.list.toLowerCase();

      case "upper":

          return self.list.toUpperCase();

      default:

          return self.list;

    }

  }

  this.stateConvert = function ( state, caseTo ) {

    var states = self.list,
        state = state.toUpperCase(),
        result,
        i;

    if ( state.length === 2 ) {

      for ( i = states.length - 1; i >= 0; i--) {

        if ( states[i][0] === state ) {

          result = states[i][1];

        }

      }

    } else {

      for ( i = states.length - 1; i >= 0; i--) {

        if ( states[i][1].toUpperCase() === state ) {

          result = states[i][0];

        }

      }

    }

    switch( caseTo ) {

      case "lower":

          return result.toLowerCase();
          break;

      case "upper":

          return result.toUpperCase();

      default:

          return result;

    }

  }

};
