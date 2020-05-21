const main = require( './main' );
const configs = require( main ).configs;
const rulesData = {};

for ( const name in configs ) {
	const rules = configs[ name ].rules || {};
	for ( const rule in rules ) {
		rulesData[ rule ] = rulesData[ rule ] || [];
		rulesData[ rule ].push( {
			config: name,
			options: Array.isArray( rules[ rule ] ) ? rules[ rule ].slice( 1 ) : null
		} );
	}
}

module.exports = rulesData;
