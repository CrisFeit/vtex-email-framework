
/* 
---------------------------------------READ ONLY----------------------------------------------- 
*/
const Handlebars = require('hbs');

function _formatDateTime(value, format){
  value = new Date(value);
  var o = {
    'M+' : value.getMonth()+1,
    'd+' : value.getDate(),
    'h+' : value.getHours(),
    'm+' : value.getMinutes(),
    's+' : value.getSeconds(),
    'q+' : Math.floor((value.getMonth()+3)/3),
    'S' : value.getMilliseconds()
  };
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, (value.getFullYear()+'').substr(4 - RegExp.$1.length));
  for (var k in o){
    if(new RegExp('('+ k +')').test(format)){
      format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ('00'+ o[k]).substr((''+ o[k]).length));
    }
  }
  return format;
}

function _addDaysToDate(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function _formatNumber(value, locale, decimals) {
  var num = isNaN(value) || value === '' || value === null ? 0.00 : value;
  return num.toLocaleString(locale, {minimumFractionDigits: decimals});
}

function _formatCurrency(value){
  var num = isNaN(value) || value === '' || value === null ? 0.00 : value / 100;
  return parseFloat(num).toFixed(2).replace('.',',').toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
}

function _formatCurrencyWithoutDecimals(value){
  var num = isNaN(value) || value === '' || value === null ? 0 : value / 100;
  return parseFloat(num).toFixed(0).replace('.', ',').toString().replace(/(d)(?=(ddd)+(?!d))/g, '$1.');
}

function _formatPENCurrency(value){
  var num = isNaN(value) || value === '' || value === null ? 0.00 : value / 100;
  return parseFloat(num).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

function _formatUSDCurrency(value){
  var num = isNaN(value) || value === '' || value === null ? 0.00 : value / 100;
  return parseFloat(num).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

function _ifCond(v1, operator, v2, options) {
      switch (operator) {
         case '==':
             return (v1 == v2) ? options.fn(this) : options.inverse(this);
         case '===':
             return (v1 === v2) ? options.fn(this) : options.inverse(this);
          case '!=':
              return (v1 != v2) ? options.fn(this) : options.inverse(this);
         case '<':
             return (v1 < v2) ? options.fn(this) : options.inverse(this);
         case '<=':
             return (v1 <= v2) ? options.fn(this) : options.inverse(this);
         case '>':
             return (v1 > v2) ? options.fn(this) : options.inverse(this);
         case '>=':
             return (v1 >= v2) ? options.fn(this) : options.inverse(this);
         case '&&':
             return (v1 && v2) ? options.fn(this) : options.inverse(this);
         case '||':
             return (v1 || v2) ? options.fn(this) : options.inverse(this);
         default:
             return options.inverse(this);
     }
 }

var _formatDateNoTimezone = function(_baseDate){
  var splittedDate = _baseDate.split('-');
  var year = splittedDate[0];
  var month = splittedDate[1];
  var day = splittedDate[2];
  return [day, month, year].join('/')
};

function _math(lvalue, operator, rvalue, options) {
  lvalue = parseFloat(lvalue);
  rvalue = parseFloat(rvalue);

  return {
      "+": lvalue + rvalue,
      "-": lvalue - rvalue,
      "*": lvalue * rvalue,
      "/": lvalue / rvalue,
      "%": lvalue % rvalue
  }[operator];
}

function _eval(expr, options) {
  var reg = new RegExp("\\${(\\S+)}", "g");
  var compiled = expr.replace(reg, function(match, pull) {
    return options.hash[pull];
  });
  return eval(compiled);
}

function _group( list, options ) {
	'use strict';
	options = options || {};

	var fn = options.fn || noop,
			inverse = options.inverse || noop,
			hash = options.hash,
			prop = hash && hash.by,
			keys = [],
			groups = {},
			groupIndex = -1;

	if ( ! prop || ! list || ! list.length ) {
		return inverse( this );
	}

	function groupKey( item ) {
		var key = get( item, prop );

		if ( keys.indexOf( key ) === -1 ) {
			keys.push( key );
			groupIndex++;
		}

		if ( ! groups[ key ] ) {
			groups[ key ] = {
				index: groupIndex,
				value: key,
				items: []
			};
		}

		groups[ key ].items.push( item );
	}

	function renderGroup( buffer, key ) {
		return buffer + fn( groups[ key ] );
	}

	function get( obj, prop ) {
		var parts = prop.split( '.' ),
				last = parts.pop();

		while ( ( prop = parts.shift() ) ) {
			obj = obj[ prop ];

			if ( obj == null ) {
				return;
			}
		}

		return obj[ last ];
	}

	function noop() {
		return '';
	}

	list.forEach( groupKey );

	return keys.reduce( renderGroup, '' );
};

Handlebars.registerHelper('formatNumber', function(value, locale, decimals) { return _formatNumber(value, locale, decimals); });
Handlebars.registerHelper('formatCurrency', function(value) { return _formatCurrency(value); });
Handlebars.registerHelper('formatPENCurrency', function(value) { return _formatPENCurrency(value); });
Handlebars.registerHelper('formatUSDCurrency', function(value) { return _formatUSDCurrency(value); });
Handlebars.registerHelper('formatCurrencyWithoutDecimals', function(value) { return _formatCurrencyWithoutDecimals(value); });
Handlebars.registerHelper('formatDate', function(value) { return _formatDateTime(value, 'dd/MM/yyyy'); });
Handlebars.registerHelper('formatTime', function(value) { return _formatDateTime(value, 'h:mm'); });
Handlebars.registerHelper('addDaysToDate', function(date,days) { return _addDaysToDate(date, days); });
Handlebars.registerHelper('formatDateNoTimezone', function(value) { return _formatDateNoTimezone(value); });
Handlebars.registerHelper('formatDateTime', function(value) { return _formatDateTime(value, 'dd/MM/yyyy h:mm:ss'); });
Handlebars.registerHelper('formatUSDate', function(value) { return _formatDateTime(value, 'MM/dd/yyyy'); });
Handlebars.registerHelper('formatUSDateTime', function(value) { return _formatDateTime(value, 'MM/dd/yyyy h:mm:ss'); });
Handlebars.registerHelper('formatDateUtc', function(value, format, zone) { return new moment.utc(value).zone(zone).format(format); });
Handlebars.registerHelper('eq', function(a, b, block) { return a == b ? block.fn(this) : block.inverse(this); });
Handlebars.registerHelper('ne', function(a, b, block) { return a != b ? block.fn(this) : block.inverse(this); });
Handlebars.registerHelper('replace', function(value, searchVl, newVl) { if(value == null) value = ""; return value.toString().replace(searchVl, newVl); });
Handlebars.registerHelper('multiplyCurrency', function(value1, value2) { return _formatCurrency(value1 * value2); });
Handlebars.registerHelper('multiply', function(value1, value2) { return value1 * value2; });
Handlebars.registerHelper('hasSubStr', function(value, search, options) { if (value != null && value.toString().indexOf(search) !== -1) { return options.fn(this); } else { return options.inverse(this); }});
Handlebars.registerHelper('ifCond', function(v1, operator, v2, options) { return _ifCond(v1, operator, v2, options); });
Handlebars.registerHelper('json', function(json, block) { try { return block.fn(JSON.parse(json)); } catch (e) { return ''; }});
Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) { return _math(lvalue, operator, rvalue, options); });
Handlebars.registerHelper("eval", function(expr, options) { return _eval(expr, options); });
Handlebars.registerHelper('htmlToText', function html2text( html ) { var d = document.createElement( 'div' ); d.innerHTML = html; return d.textContent; });
Handlebars.registerHelper('htmlToTextMeli', function(text) { text = text.replace(/<br>/g, '\n'); text = text.replace(/<br\/>/g, '\n'); text = text.replace(/<br \/>/g, '\n'); text = text.replace(/<h1>/g, ''); text = text.replace(/<\/h1>/g, '\n'); text = text.replace(/<h2>/g, ''); text = text.replace(/<\/h2>/g, '\n'); text = text.replace(/<h3>/g, ''); text = text.replace(/<\/h3>/g, '\n'); text = text.replace(/<p>/g, ''); text = text.replace(/<\/p>/g, '\n\n'); text = text.replace(/<div>/g, ''); text = text.replace(/<\/div>/g, ''); text = text.replace(/(<([^>]+)>)/ig, ''); return text; });
Handlebars.registerHelper('group', function(list, options) { return _group(list, options); });
Handlebars.registerHelper('safeString', function(inputData) {   return new Handlebars.SafeString(inputData); });

Handlebars.registerHelper('compare', function(v1, operator, v2, options) {
    switch (operator) {
       case '==':
           return (v1 == v2) ? options.fn(this) : options.inverse(this);
       case '===':
           return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
       case '<':
           return (v1 < v2) ? options.fn(this) : options.inverse(this);
       case '<=':
           return (v1 <= v2) ? options.fn(this) : options.inverse(this);
       case '>':
           return (v1 > v2) ? options.fn(this) : options.inverse(this);
       case '>=':
           return (v1 >= v2) ? options.fn(this) : options.inverse(this);
       case '&&':
           return (v1 && v2) ? options.fn(this) : options.inverse(this);
       case '||':
           return (v1 || v2) ? options.fn(this) : options.inverse(this);
       default:
           return options.inverse(this);
   }
});

Handlebars.registerHelper('isMoreThanOneDay', function( d, options ) {
	if ( /^(\d)+(?=d)/g.test( d ) ) {
		d = d.substring( 0, d.length - 1 );
	} else if ( /^(\d)+(?=bd)/g.test( d ) ) {
		d = d.substring( 0, d.length - 2 );
	} else {
		return options.inverse( this );
	}

	if ( parseInt( d ) > 1 ) {
		return options.fn( this );
	}

	return options.inverse( this );
});

Handlebars.registerHelper('richShippingData', function( context, options ) {
  var items = context.logisticsInfo;

	for ( var i = 0, j = items.length; i < j; i++ ) {
		var item = items[ i ];
		for ( var ii = 0, jj = item.slas.length; ii < jj; ii++ ) {
			var sla = item.slas[ ii ];
			if ( item.selectedSla === sla.id ) {
				var d = sla.shippingEstimate;
				var dType = null;
				if ( /^(\d)+(?=d)/g.test( d ) ) {
					d = d.substring( 0, d.length - 1 );
					dType = 'd';
				} else if ( /^(\d)+(?=bd)/g.test( d ) ) {
					d = d.substring( 0, d.length - 2 );
					dType = 'bd';
				}
				item.packageId = sla.id + sla.shippingEstimateDate + sla.shippingEstimate;
				item.shippingEstimateDays = d;
				item.shippingEstimateDaysType = dType;
				item.shippingEstimate = sla.shippingEstimate;
				item.shippingEstimateDate = sla.shippingEstimateDate;
				item.deliveryWindow = sla.deliveryWindow;
				item.availableDeliveryWindows = sla.availableDeliveryWindows;
			}
		}
	}

	items.sort( function( a, b ) {
		return a.shippingEstimateDays - b.shippingEstimateDays;
	} );

	return options.fn( context );
});