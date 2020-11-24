var MagmaScript=function(){"use strict";var e,t=(function(e){e.exports=function(){function m(e){return typeof e==="string"||e instanceof String}var t=Number.isFinite||window.isFinite;function a(e){return t(e)}function i(e){return e}function e(e){var t={};return e.filter(function(e){return t.hasOwnProperty(e)?false:t[e]=true})}function o(e,t){if(t.length!==e.length)return false;for(var r=0;r<e.length;r++){if(t[r].compareArray)if(!t[r].compareArray(e[r]))return false;if(t[r]!==e[r])return false}return true}function r(t,r){Object.keys(r).forEach(function(e){t[e]=r[e]})}function l(){var e=1,t=0;for(var r=0;r<arguments.length;r++){var n=arguments[r];t=t+u(n);e*=n}return t!==0?s(e,t):e}function f(e,t){if(t===0)throw new Error("Divide by zero");var r=Math.pow(10,u(t));var n=r/(r*t);return l(e,n)}function s(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}function u(e){if(!isFinite(e))return 0;var t=0;while(e%1!==0){e*=10;t++}return t}function c(){var e;if(!this){e=Object.create(c.prototype);c.apply(e,arguments);return e}e=Error.apply(this,arguments);this.name="QtyError";this.message=e.message;this.stack=e.stack}function h(e,t){throw new c("Incompatible units: "+e+" and "+t)}c.prototype=Object.create(Error.prototype,{constructor:{value:c}});var p={"<googol>":[["googol"],1e100,"prefix"],"<kibi>":[["Ki","Kibi","kibi"],Math.pow(2,10),"prefix"],"<mebi>":[["Mi","Mebi","mebi"],Math.pow(2,20),"prefix"],"<gibi>":[["Gi","Gibi","gibi"],Math.pow(2,30),"prefix"],"<tebi>":[["Ti","Tebi","tebi"],Math.pow(2,40),"prefix"],"<pebi>":[["Pi","Pebi","pebi"],Math.pow(2,50),"prefix"],"<exi>":[["Ei","Exi","exi"],Math.pow(2,60),"prefix"],"<zebi>":[["Zi","Zebi","zebi"],Math.pow(2,70),"prefix"],"<yebi>":[["Yi","Yebi","yebi"],Math.pow(2,80),"prefix"],"<yotta>":[["Y","Yotta","yotta"],1e24,"prefix"],"<zetta>":[["Z","Zetta","zetta"],1e21,"prefix"],"<exa>":[["E","Exa","exa"],1e18,"prefix"],"<peta>":[["P","Peta","peta"],1e15,"prefix"],"<tera>":[["T","Tera","tera"],1e12,"prefix"],"<giga>":[["G","Giga","giga"],1e9,"prefix"],"<mega>":[["M","Mega","mega"],1e6,"prefix"],"<kilo>":[["k","kilo"],1e3,"prefix"],"<hecto>":[["h","Hecto","hecto"],100,"prefix"],"<deca>":[["da","Deca","deca","deka"],10,"prefix"],"<deci>":[["d","Deci","deci"],.1,"prefix"],"<centi>":[["c","Centi","centi"],.01,"prefix"],"<milli>":[["m","Milli","milli"],.001,"prefix"],"<micro>":[["u","μ","µ","Micro","mc","micro"],1e-6,"prefix"],"<nano>":[["n","Nano","nano"],1e-9,"prefix"],"<pico>":[["p","Pico","pico"],1e-12,"prefix"],"<femto>":[["f","Femto","femto"],1e-15,"prefix"],"<atto>":[["a","Atto","atto"],1e-18,"prefix"],"<zepto>":[["z","Zepto","zepto"],1e-21,"prefix"],"<yocto>":[["y","Yocto","yocto"],1e-24,"prefix"],"<1>":[["1","<1>"],1,""],"<meter>":[["m","meter","meters","metre","metres"],1,"length",["<meter>"]],"<inch>":[["in","inch","inches",'"'],.0254,"length",["<meter>"]],"<foot>":[["ft","foot","feet","'"],.3048,"length",["<meter>"]],"<yard>":[["yd","yard","yards"],.9144,"length",["<meter>"]],"<mile>":[["mi","mile","miles"],1609.344,"length",["<meter>"]],"<naut-mile>":[["nmi","naut-mile"],1852,"length",["<meter>"]],"<league>":[["league","leagues"],4828,"length",["<meter>"]],"<furlong>":[["furlong","furlongs"],201.2,"length",["<meter>"]],"<rod>":[["rd","rod","rods"],5.029,"length",["<meter>"]],"<mil>":[["mil","mils"],254e-7,"length",["<meter>"]],"<angstrom>":[["ang","angstrom","angstroms"],1e-10,"length",["<meter>"]],"<fathom>":[["fathom","fathoms"],1.829,"length",["<meter>"]],"<pica>":[["pica","picas"],.00423333333,"length",["<meter>"]],"<point>":[["pt","point","points"],.000352777778,"length",["<meter>"]],"<redshift>":[["z","red-shift","redshift"],1302773e20,"length",["<meter>"]],"<AU>":[["AU","astronomical-unit"],1495979e5,"length",["<meter>"]],"<light-second>":[["ls","light-second"],299792500,"length",["<meter>"]],"<light-minute>":[["lmin","light-minute"],1798755e4,"length",["<meter>"]],"<light-year>":[["ly","light-year"],9460528e9,"length",["<meter>"]],"<parsec>":[["pc","parsec","parsecs"],3085678e10,"length",["<meter>"]],"<datamile>":[["DM","datamile"],1828.8,"length",["<meter>"]],"<kilogram>":[["kg","kilogram","kilograms"],1,"mass",["<kilogram>"]],"<AMU>":[["u","AMU","amu"],1660538921e-36,"mass",["<kilogram>"]],"<dalton>":[["Da","Dalton","Daltons","dalton","daltons"],1660538921e-36,"mass",["<kilogram>"]],"<slug>":[["slug","slugs"],14.5939029,"mass",["<kilogram>"]],"<short-ton>":[["tn","ton","short-ton"],907.18474,"mass",["<kilogram>"]],"<metric-ton>":[["tonne","metric-ton"],1e3,"mass",["<kilogram>"]],"<carat>":[["ct","carat","carats"],2e-4,"mass",["<kilogram>"]],"<pound>":[["lbs","lb","pound","pounds","#"],.45359237,"mass",["<kilogram>"]],"<ounce>":[["oz","ounce","ounces"],.0283495231,"mass",["<kilogram>"]],"<gram>":[["g","gram","grams","gramme","grammes"],.001,"mass",["<kilogram>"]],"<grain>":[["grain","grains","gr"],6479891e-11,"mass",["<kilogram>"]],"<dram>":[["dram","drams","dr"],.0017718452,"mass",["<kilogram>"]],"<stone>":[["stone","stones","st"],6.35029318,"mass",["<kilogram>"]],"<hectare>":[["hectare"],1e4,"area",["<meter>","<meter>"]],"<acre>":[["acre","acres"],4046.85642,"area",["<meter>","<meter>"]],"<sqft>":[["sqft"],1,"area",["<foot>","<foot>"]],"<liter>":[["l","L","liter","liters","litre","litres"],.001,"volume",["<meter>","<meter>","<meter>"]],"<gallon>":[["gal","gallon","gallons"],.0037854118,"volume",["<meter>","<meter>","<meter>"]],"<gallon-imp>":[["galimp","gallon-imp","gallons-imp"],.00454609,"volume",["<meter>","<meter>","<meter>"]],"<quart>":[["qt","quart","quarts"],.00094635295,"volume",["<meter>","<meter>","<meter>"]],"<pint>":[["pt","pint","pints"],.000473176475,"volume",["<meter>","<meter>","<meter>"]],"<pint-imp>":[["ptimp","pint-imp","pints-imp"],.00056826125,"volume",["<meter>","<meter>","<meter>"]],"<cup>":[["cu","cup","cups"],.000236588238,"volume",["<meter>","<meter>","<meter>"]],"<fluid-ounce>":[["floz","fluid-ounce","fluid-ounces"],295735297e-13,"volume",["<meter>","<meter>","<meter>"]],"<fluid-ounce-imp>":[["flozimp","floz-imp","fluid-ounce-imp","fluid-ounces-imp"],284130625e-13,"volume",["<meter>","<meter>","<meter>"]],"<tablespoon>":[["tb","tbsp","tbs","tablespoon","tablespoons"],147867648e-13,"volume",["<meter>","<meter>","<meter>"]],"<teaspoon>":[["tsp","teaspoon","teaspoons"],492892161e-14,"volume",["<meter>","<meter>","<meter>"]],"<bushel>":[["bu","bsh","bushel","bushels"],.035239072,"volume",["<meter>","<meter>","<meter>"]],"<oilbarrel>":[["bbl","oil-barrel","oil-barrels"],.158987294928,"volume",["<meter>","<meter>","<meter>"]],"<beerbarrel>":[["bl","bl-us","beer-barrel","beer-barrels"],.1173477658,"volume",["<meter>","<meter>","<meter>"]],"<beerbarrel-imp>":[["blimp","bl-imp","beer-barrel-imp","beer-barrels-imp"],.16365924,"volume",["<meter>","<meter>","<meter>"]],"<kph>":[["kph"],.277777778,"speed",["<meter>"],["<second>"]],"<mph>":[["mph"],.44704,"speed",["<meter>"],["<second>"]],"<knot>":[["kt","kn","kts","knot","knots"],.514444444,"speed",["<meter>"],["<second>"]],"<fps>":[["fps"],.3048,"speed",["<meter>"],["<second>"]],"<gee>":[["gee"],9.80665,"acceleration",["<meter>"],["<second>","<second>"]],"<kelvin>":[["degK","kelvin"],1,"temperature",["<kelvin>"]],"<celsius>":[["degC","celsius","celsius","centigrade"],1,"temperature",["<kelvin>"]],"<fahrenheit>":[["degF","fahrenheit"],5/9,"temperature",["<kelvin>"]],"<rankine>":[["degR","rankine"],5/9,"temperature",["<kelvin>"]],"<temp-K>":[["tempK","temp-K"],1,"temperature",["<temp-K>"]],"<temp-C>":[["tempC","temp-C"],1,"temperature",["<temp-K>"]],"<temp-F>":[["tempF","temp-F"],5/9,"temperature",["<temp-K>"]],"<temp-R>":[["tempR","temp-R"],5/9,"temperature",["<temp-K>"]],"<second>":[["s","sec","secs","second","seconds"],1,"time",["<second>"]],"<minute>":[["min","mins","minute","minutes"],60,"time",["<second>"]],"<hour>":[["h","hr","hrs","hour","hours"],3600,"time",["<second>"]],"<day>":[["d","day","days"],3600*24,"time",["<second>"]],"<week>":[["wk","week","weeks"],7*3600*24,"time",["<second>"]],"<fortnight>":[["fortnight","fortnights"],1209600,"time",["<second>"]],"<year>":[["y","yr","year","years","annum"],31556926,"time",["<second>"]],"<decade>":[["decade","decades"],315569260,"time",["<second>"]],"<century>":[["century","centuries"],3155692600,"time",["<second>"]],"<pascal>":[["Pa","pascal","Pascal"],1,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<bar>":[["bar","bars"],1e5,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<mmHg>":[["mmHg"],133.322368,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<inHg>":[["inHg"],3386.3881472,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<torr>":[["torr"],133.322368,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<atm>":[["atm","ATM","atmosphere","atmospheres"],101325,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<psi>":[["psi"],6894.76,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<cmh2o>":[["cmH2O","cmh2o"],98.0638,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<inh2o>":[["inH2O","inh2o"],249.082052,"pressure",["<kilogram>"],["<meter>","<second>","<second>"]],"<poise>":[["P","poise"],.1,"viscosity",["<kilogram>"],["<meter>","<second>"]],"<stokes>":[["St","stokes"],1e-4,"viscosity",["<meter>","<meter>"],["<second>"]],"<mole>":[["mol","mole"],1,"substance",["<mole>"]],"<molar>":[["M","molar"],1e3,"concentration",["<mole>"],["<meter>","<meter>","<meter>"]],"<wtpercent>":[["wt%","wtpercent"],10,"concentration",["<kilogram>"],["<meter>","<meter>","<meter>"]],"<katal>":[["kat","katal","Katal"],1,"activity",["<mole>"],["<second>"]],"<unit>":[["U","enzUnit","unit"],16667e-19,"activity",["<mole>"],["<second>"]],"<farad>":[["F","farad","Farad"],1,"capacitance",["<second>","<second>","<second>","<second>","<ampere>","<ampere>"],["<meter>","<meter>","<kilogram>"]],"<coulomb>":[["C","coulomb","Coulomb"],1,"charge",["<ampere>","<second>"]],"<Ah>":[["Ah"],3600,"charge",["<ampere>","<second>"]],"<ampere>":[["A","Ampere","ampere","amp","amps"],1,"current",["<ampere>"]],"<siemens>":[["S","Siemens","siemens"],1,"conductance",["<second>","<second>","<second>","<ampere>","<ampere>"],["<kilogram>","<meter>","<meter>"]],"<henry>":[["H","Henry","henry"],1,"inductance",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<ampere>","<ampere>"]],"<volt>":[["V","Volt","volt","volts"],1,"potential",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<second>","<ampere>"]],"<ohm>":[["Ohm","ohm","Ω","Ω"],1,"resistance",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<second>","<ampere>","<ampere>"]],"<weber>":[["Wb","weber","webers"],1,"magnetism",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<ampere>"]],"<tesla>":[["T","tesla","teslas"],1,"magnetism",["<kilogram>"],["<second>","<second>","<ampere>"]],"<gauss>":[["G","gauss"],1e-4,"magnetism",["<kilogram>"],["<second>","<second>","<ampere>"]],"<maxwell>":[["Mx","maxwell","maxwells"],1e-8,"magnetism",["<meter>","<meter>","<kilogram>"],["<second>","<second>","<ampere>"]],"<oersted>":[["Oe","oersted","oersteds"],250/Math.PI,"magnetism",["<ampere>"],["<meter>"]],"<joule>":[["J","joule","Joule","joules"],1,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<erg>":[["erg","ergs"],1e-7,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<btu>":[["BTU","btu","BTUs"],1055.056,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<calorie>":[["cal","calorie","calories"],4.184,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<Calorie>":[["Cal","Calorie","Calories"],4184,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<therm-US>":[["th","therm","therms","Therm","therm-US"],105480400,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<Wh>":[["Wh"],3600,"energy",["<meter>","<meter>","<kilogram>"],["<second>","<second>"]],"<newton>":[["N","Newton","newton"],1,"force",["<kilogram>","<meter>"],["<second>","<second>"]],"<dyne>":[["dyn","dyne"],1e-5,"force",["<kilogram>","<meter>"],["<second>","<second>"]],"<pound-force>":[["lbf","pound-force"],4.448222,"force",["<kilogram>","<meter>"],["<second>","<second>"]],"<hertz>":[["Hz","hertz","Hertz"],1,"frequency",["<1>"],["<second>"]],"<radian>":[["rad","radian","radians"],1,"angle",["<radian>"]],"<degree>":[["deg","degree","degrees"],Math.PI/180,"angle",["<radian>"]],"<gradian>":[["gon","grad","gradian","grads"],Math.PI/200,"angle",["<radian>"]],"<steradian>":[["sr","steradian","steradians"],1,"solid_angle",["<steradian>"]],"<rotation>":[["rotation"],2*Math.PI,"angle",["<radian>"]],"<rpm>":[["rpm"],2*Math.PI/60,"angular_velocity",["<radian>"],["<second>"]],"<byte>":[["B","byte","bytes"],1,"information",["<byte>"]],"<bit>":[["b","bit","bits"],.125,"information",["<byte>"]],"<Bps>":[["Bps"],1,"information_rate",["<byte>"],["<second>"]],"<bps>":[["bps"],.125,"information_rate",["<byte>"],["<second>"]],"<dollar>":[["USD","dollar"],1,"currency",["<dollar>"]],"<cents>":[["cents"],.01,"currency",["<dollar>"]],"<candela>":[["cd","candela"],1,"luminosity",["<candela>"]],"<lumen>":[["lm","lumen"],1,"luminous_power",["<candela>","<steradian>"]],"<lux>":[["lux"],1,"illuminance",["<candela>","<steradian>"],["<meter>","<meter>"]],"<watt>":[["W","watt","watts"],1,"power",["<kilogram>","<meter>","<meter>"],["<second>","<second>","<second>"]],"<volt-ampere>":[["VA","volt-ampere"],1,"power",["<kilogram>","<meter>","<meter>"],["<second>","<second>","<second>"]],"<volt-ampere-reactive>":[["var","Var","VAr","VAR","volt-ampere-reactive"],1,"power",["<kilogram>","<meter>","<meter>"],["<second>","<second>","<second>"]],"<horsepower>":[["hp","horsepower"],745.699872,"power",["<kilogram>","<meter>","<meter>"],["<second>","<second>","<second>"]],"<gray>":[["Gy","gray","grays"],1,"radiation",["<meter>","<meter>"],["<second>","<second>"]],"<roentgen>":[["R","roentgen"],.00933,"radiation",["<meter>","<meter>"],["<second>","<second>"]],"<sievert>":[["Sv","sievert","sieverts"],1,"radiation",["<meter>","<meter>"],["<second>","<second>"]],"<becquerel>":[["Bq","becquerel","becquerels"],1,"radiation",["<1>"],["<second>"]],"<curie>":[["Ci","curie","curies"],37e9,"radiation",["<1>"],["<second>"]],"<cpm>":[["cpm"],1/60,"rate",["<count>"],["<second>"]],"<dpm>":[["dpm"],1/60,"rate",["<count>"],["<second>"]],"<bpm>":[["bpm"],1/60,"rate",["<count>"],["<second>"]],"<dot>":[["dot","dots"],1,"resolution",["<each>"]],"<pixel>":[["pixel","px"],1,"resolution",["<each>"]],"<ppi>":[["ppi"],1,"resolution",["<pixel>"],["<inch>"]],"<dpi>":[["dpi"],1,"typography",["<dot>"],["<inch>"]],"<cell>":[["cells","cell"],1,"counting",["<each>"]],"<each>":[["each"],1,"counting",["<each>"]],"<count>":[["count"],1,"counting",["<each>"]],"<base-pair>":[["bp","base-pair"],1,"counting",["<each>"]],"<nucleotide>":[["nt","nucleotide"],1,"counting",["<each>"]],"<molecule>":[["molecule","molecules"],1,"counting",["<1>"]],"<dozen>":[["doz","dz","dozen"],12,"prefix_only",["<each>"]],"<percent>":[["%","percent"],.01,"prefix_only",["<1>"]],"<ppm>":[["ppm"],1e-6,"prefix_only",["<1>"]],"<ppt>":[["ppt"],1e-9,"prefix_only",["<1>"]],"<gross>":[["gr","gross"],144,"prefix_only",["<dozen>","<dozen>"]],"<decibel>":[["dB","decibel","decibels"],1,"logarithmic",["<decibel>"]]},n=["<meter>","<kilogram>","<second>","<mole>","<ampere>","<radian>","<kelvin>","<temp-K>","<byte>","<dollar>","<candela>","<each>","<steradian>","<decibel>"],d="<1>",g=[d];function v(t,e){var r=e[1];var n=e[3]||[];var i=e[4]||[];if(!a(r))throw new c(t+": Invalid unit definition. "+"'scalar' must be a number");n.forEach(function(e){if(p[e]===undefined)throw new c(t+": Invalid unit definition. "+"Unit "+e+" in 'numerator' is not recognized")});i.forEach(function(e){if(p[e]===undefined)throw new c(t+": Invalid unit definition. "+"Unit "+e+" in 'denominator' is not recognized")})}var y={},b={},w={},k={},x={},_;for(_ in p)if(p.hasOwnProperty(_)){var C=p[_];if(C[2]==="prefix"){y[_]=C[1];for(var z=0;z<C[0].length;z++)b[C[0][z]]=_}else{v(_,C);w[_]={scalar:C[1],numerator:C[3],denominator:C[4]};for(var S=0;S<C[0].length;S++)k[C[0][S]]=_}x[_]=C[0][0]}function U(e){var t;var r=[];var n=Object.keys(p);if(typeof e==="undefined"){for(t=0;t<n.length;t++)if(["","prefix"].indexOf(p[n[t]][2])===-1)r.push(n[t].substr(1,n[t].length-2))}else if(this.getKinds().indexOf(e)===-1)throw new c("Kind not recognized");else for(t=0;t<n.length;t++)if(p[n[t]][2]===e)r.push(n[t].substr(1,n[t].length-2));return r.sort(function(e,t){if(e.toLowerCase()<t.toLowerCase())return-1;if(e.toLowerCase()>t.toLowerCase())return 1;return 0})}function M(e){if(!k[e])throw new c("Unit not recognized");return p[k[e]][0]}var T=["length","time","temperature","mass","current","substance","luminosity","currency","information","angle"];function K(){if(this.signature)return this.signature;var e=O.call(this);for(var t=0;t<e.length;t++)e[t]*=Math.pow(20,t);return e.reduce(function(e,t){return e+t},0)}function O(){if(!this.isBase())return O.call(this.toBase());var e=new Array(T.length);for(var t=0;t<e.length;t++)e[t]=0;var r,n;for(var i=0;i<this.numerator.length;i++)if(r=p[this.numerator[i]]){n=T.indexOf(r[2]);if(n>=0)e[n]=e[n]+1}for(var a=0;a<this.denominator.length;a++)if(r=p[this.denominator[a]]){n=T.indexOf(r[2]);if(n>=0)e[n]=e[n]-1}return e}var A="[+-]",F="\\d+",N,B="\\."+F,j,R,E,P,q,D=new RegExp("^"+("("+(A+"?\\s*"+("(?:"+("(?:"+F+"(?:"+B+")?"+")"+"|"+"(?:"+B+")")+")(?:"+("[Ee]"+(A+"?"+F))+")?"))+")?"+"\\s*([^/]*)(?:/(.+))?")+"$"),V="\\^|\\*{2}",I="[01234]",H=new RegExp("([^ \\*\\d]+?)(?:"+V+")?(-?"+I+"(?![a-zA-Z]))"),Z=new RegExp("([^ \\*\\d]+?)(?:"+V+")?("+I+"(?![a-zA-Z]))");function G(e){if(!m(e))e=e.toString();e=e.trim();var t=D.exec(e);if(!t)throw new c(e+": Quantity not recognized");var r=t[1];if(r){r=r.replace(/\s/g,"");this.scalar=parseFloat(r)}else this.scalar=1;var n=t[2];var i=t[3];var a,o,s;while(t=H.exec(n)){a=parseFloat(t[2]);if(isNaN(a))throw new c("Unit exponent is not a number");if(a===0&&!$.test(t[1]))throw new c("Unit not recognized");o=t[1]+" ";s="";for(var l=0;l<Math.abs(a);l++)s+=o;if(a>=0)n=n.replace(t[0],s);else{i=i?i+s:s;n=n.replace(t[0],"")}}while(t=Z.exec(i)){a=parseFloat(t[2]);if(isNaN(a))throw new c("Unit exponent is not a number");if(a===0&&!$.test(t[1]))throw new c("Unit not recognized");o=t[1]+" ";s="";for(var u=0;u<a;u++)s+=o;i=i.replace(t[0],s)}if(n)this.numerator=ee(n.trim());if(i)this.denominator=ee(i.trim())}var J=Object.keys(b).sort(function(e,t){return t.length-e.length}).join("|"),L=Object.keys(k).sort(function(e,t){return t.length-e.length}).join("|"),Y,W="("+J+")??("+L+")(?:"+"\\b|$"+")",$=new RegExp("^\\s*("+W+"[\\s\\*]*)+$"),Q=new RegExp(W,"g"),X={};function ee(e){var t=X[e];if(t)return t;var r,n=[];if(!$.test(e))throw new c("Unit not recognized");while(r=Q.exec(e))n.push(r.slice(1));n=n.map(function(e){return b[e[0]]?[b[e[0]],k[e[1]]]:[k[e[1]]]});n=n.reduce(function(e,t){return e.concat(t)},[]);n=n.filter(function(e){return e});X[e]=n;return n}function te(e){if(!m(e))throw new c("Argument should be a string");try{return this(e)}catch(e){return null}}function re(e){return e instanceof ne}function ne(e,t){ie.apply(null,arguments);if(!re(this))return new ne(e,t);this.scalar=null;this.baseScalar=null;this.signature=null;this._conversionCache={};this.numerator=g;this.denominator=g;if(ae(e)){this.scalar=e.scalar;this.numerator=e.numerator&&e.numerator.length!==0?e.numerator:g;this.denominator=e.denominator&&e.denominator.length!==0?e.denominator:g}else if(t){G.call(this,t);this.scalar=e}else G.call(this,e);if(this.denominator.join("*").indexOf("temp")>=0)throw new c("Cannot divide with temperatures");if(this.numerator.join("*").indexOf("temp")>=0){if(this.numerator.length>1)throw new c("Cannot multiply by temperatures");if(!o(this.denominator,g))throw new c("Cannot divide with temperatures")}this.initValue=e;oe.call(this);if(this.isTemperature()&&this.baseScalar<0)throw new c("Temperatures must not be less than absolute zero")}function ie(e,t){if(t){if(!(a(e)&&m(t)))throw new c("Only number accepted as initialization value "+"when units are explicitly provided")}else if(!(m(e)||a(e)||re(e)||ae(e)))throw new c("Only string, number or quantity accepted as "+"single initialization value")}function ae(e){return e&&typeof e==="object"&&e.hasOwnProperty("scalar")}function oe(){if(this.baseScalar)return this.baseScalar;if(this.isBase()){this.baseScalar=this.scalar;this.signature=K.call(this)}else{var e=this.toBase();this.baseScalar=e.scalar;this.signature=e.signature}}var se={"-312078":"elastance","-312058":"resistance","-312038":"inductance","-152058":"potential","-152040":"magnetism","-152038":"magnetism","-7997":"specific_volume","-79":"snap","-59":"jolt","-39":"acceleration","-38":"radiation","-20":"frequency","-19":"speed","-18":"viscosity","-17":"volumetric_flow","-1":"wavenumber",0:"unitless",1:"length",2:"area",3:"volume",20:"time",400:"temperature",7941:"yank",7942:"power",7959:"pressure",7961:"force",7962:"energy",7979:"viscosity",7981:"momentum",7982:"angular_momentum",7997:"density",7998:"area_density",8e3:"mass",152020:"radiation_exposure",159999:"magnetism",16e4:"current",160020:"charge",312058:"conductance",312078:"capacitance",3199980:"activity",3199997:"molar_concentration",32e5:"substance",63999998:"illuminance",64e6:"luminous_power",128e7:"currency",25599999980:"information_rate",256e8:"information",511999999980:"angular_velocity",512e9:"angle"};function le(){return e(Object.keys(se).map(function(e){return se[e]}))}function ue(e,t){var r=e.units();var n=t.to(r);var i=ne(he(r));return ne({scalar:e.scalar-n.scalar,numerator:i.numerator,denominator:i.denominator})}function me(e,t){var r=t.to(he(e.units()));return ne({scalar:e.scalar-r.scalar,numerator:e.numerator,denominator:e.denominator})}function ce(e,t){var r=t.to(he(e.units()));return ne({scalar:e.scalar+r.scalar,numerator:e.numerator,denominator:e.denominator})}function he(e){if(e==="tempK")return"degK";else if(e==="tempC")return"degC";else if(e==="tempF")return"degF";else if(e==="tempR")return"degR";else throw new c("Unknown type for temp conversion from: "+e)}function fe(e,t){var r=pe(e);var n=t.units();var i;if(n==="degK")i=r.scalar;else if(n==="degC")i=r.scalar;else if(n==="degF")i=r.scalar*9/5;else if(n==="degR")i=r.scalar*9/5;else throw new c("Unknown type for degree conversion to: "+n);return ne({scalar:i,numerator:t.numerator,denominator:t.denominator})}function pe(e){var t=e.units();var r;if(t.match(/(deg)[CFRK]/))r=e.baseScalar;else if(t==="tempK")r=e.scalar;else if(t==="tempC")r=e.scalar;else if(t==="tempF")r=e.scalar*5/9;else if(t==="tempR")r=e.scalar*5/9;else throw new c("Unknown type for temp conversion from: "+t);return ne({scalar:r,numerator:["<kelvin>"],denominator:g})}function de(e,t){var r=t.units();var n;if(r==="tempK")n=e.baseScalar;else if(r==="tempC")n=e.baseScalar-273.15;else if(r==="tempF")n=e.baseScalar*9/5-459.67;else if(r==="tempR")n=e.baseScalar*9/5;else throw new c("Unknown type for temp conversion to: "+r);return ne({scalar:n,numerator:t.numerator,denominator:t.denominator})}function ge(e){var t=e.units();var r;if(t.match(/(deg)[CFRK]/))r=e.baseScalar;else if(t==="tempK")r=e.scalar;else if(t==="tempC")r=e.scalar+273.15;else if(t==="tempF")r=(e.scalar+459.67)*5/9;else if(t==="tempR")r=e.scalar*5/9;else throw new c("Unknown type for temp conversion from: "+t);return ne({scalar:r,numerator:["<temp-K>"],denominator:g})}function ve(e,t){var r=ne(e);var n=ne(t);if(r.eq(n))return i;var a;if(!r.isTemperature())a=function(e){return e*r.baseScalar/n.baseScalar};else a=function(e){return r.mul(e).to(n).scalar};return function e(t){var r,n,i;if(!Array.isArray(t))return a(t);else{n=t.length;i=[];for(r=0;r<n;r++)i.push(a(t[r]));return i}}}(ne.prototype={constructor:ne}).kind=function(){return se[this.signature.toString()]},r(ne.prototype,{isDegrees:function(){return(this.signature===null||this.signature===400)&&this.numerator.length===1&&o(this.denominator,g)&&(this.numerator[0].match(/<temp-[CFRK]>/)||this.numerator[0].match(/<(kelvin|celsius|rankine|fahrenheit)>/))},isTemperature:function(){return this.isDegrees()&&this.numerator[0].match(/<temp-[CFRK]>/)}}),r(ne.prototype,{to:function(e){var t,r;if(e===undefined||e===null)return this;if(!m(e))return this.to(e.units());t=this._conversionCache[e];if(t)return t;r=ne(e);if(r.units()===this.units())return this;if(!this.isCompatible(r))if(this.isInverse(r))r=this.inverse().to(e);else h(this.units(),r.units());else if(r.isTemperature())r=de(this,r);else if(r.isDegrees())r=fe(this,r);else{var n=f(this.baseScalar,r.baseScalar);r=ne({scalar:n,numerator:r.numerator,denominator:r.denominator})}this._conversionCache[e]=r;return r},toBase:function(){if(this.isBase())return this;if(this.isTemperature())return ge(this);var e=ye[this.units()];if(!e){e=be(this.numerator,this.denominator);ye[this.units()]=e}return e.mul(this.scalar)},toFloat:function(){if(this.isUnitless())return this.scalar;throw new c("Can't convert to Float unless unitless.  Use Unit#scalar")},toPrec:function(e){if(m(e))e=ne(e);if(a(e))e=ne(e+" "+this.units());if(!this.isUnitless())e=e.to(this.units());else if(!e.isUnitless())h(this.units(),e.units());if(e.scalar===0)throw new c("Divide by zero");var t=l(Math.round(this.scalar/e.scalar),e.scalar);return ne(t+this.units())}});var ye={};function be(e,t){var r=[];var n=[];var i=1;var a;for(var o=0;o<e.length;o++){a=e[o];if(y[a])i=l(i,y[a]);else if(w[a]){i*=w[a].scalar;if(w[a].numerator)r.push(w[a].numerator);if(w[a].denominator)n.push(w[a].denominator)}}for(var s=0;s<t.length;s++){a=t[s];if(y[a])i/=y[a];else if(w[a]){i/=w[a].scalar;if(w[a].numerator)n.push(w[a].numerator);if(w[a].denominator)r.push(w[a].denominator)}}r=r.reduce(function(e,t){return e.concat(t)},[]);n=n.reduce(function(e,t){return e.concat(t)},[]);return ne({scalar:i,numerator:r,denominator:n})}function we(e,t,r,n){function i(e){return e!==d}e=e.filter(i);r=r.filter(i);t=t.filter(i);n=n.filter(i);var s={};function a(e,t){var r;var n;var i;for(var a=0;a<e.length;a++){if(y[e[a]]){r=e[a+1];n=e[a];i=y[n];a++}else{r=e[a];n=null;i=1}if(r&&r!==d)if(s[r]){s[r][0]+=t;var o=s[r][2]?y[s[r][2]]:1;s[r][t===1?3:4]*=f(i,o)}else s[r]=[t,r,n,1,1]}}a(e,1);a(t,-1);a(r,1);a(n,-1);var o=[];var l=[];var u=1;for(var m in s)if(s.hasOwnProperty(m)){var c=s[m];var h;if(c[0]>0)for(h=0;h<c[0];h++)o.push(c[2]===null?c[1]:[c[2],c[1]]);else if(c[0]<0)for(h=0;h<-c[0];h++)l.push(c[2]===null?c[1]:[c[2],c[1]]);u*=f(c[3],c[4])}if(o.length===0)o=g;if(l.length===0)l=g;o=o.reduce(function(e,t){return e.concat(t)},[]);l=l.reduce(function(e,t){return e.concat(t)},[]);return[o,l,u]}function ke(){}function xe(e,t){return(e+" "+t).trim()}ne.parse=te,ne.getUnits=U,ne.getAliases=M,ne.mulSafe=l,ne.divSafe=f,ne.getKinds=le,ne.swiftConverter=ve,ne.Error=c,r(ne.prototype,{add:function(e){if(m(e))e=ne(e);if(!this.isCompatible(e))h(this.units(),e.units());if(this.isTemperature()&&e.isTemperature())throw new c("Cannot add two temperatures");else if(this.isTemperature())return ce(this,e);else if(e.isTemperature())return ce(e,this);return ne({scalar:this.scalar+e.to(this).scalar,numerator:this.numerator,denominator:this.denominator})},sub:function(e){if(m(e))e=ne(e);if(!this.isCompatible(e))h(this.units(),e.units());if(this.isTemperature()&&e.isTemperature())return ue(this,e);else if(this.isTemperature())return me(this,e);else if(e.isTemperature())throw new c("Cannot subtract a temperature from a differential degree unit");return ne({scalar:this.scalar-e.to(this).scalar,numerator:this.numerator,denominator:this.denominator})},mul:function(e){if(a(e))return ne({scalar:l(this.scalar,e),numerator:this.numerator,denominator:this.denominator});else if(m(e))e=ne(e);if((this.isTemperature()||e.isTemperature())&&!(this.isUnitless()||e.isUnitless()))throw new c("Cannot multiply by temperatures");var t=this;var r=e;if(t.isCompatible(r)&&t.signature!==400)r=r.to(t);var n=we(t.numerator,t.denominator,r.numerator,r.denominator);return ne({scalar:l(t.scalar,r.scalar,n[2]),numerator:n[0],denominator:n[1]})},div:function(e){if(a(e)){if(e===0)throw new c("Divide by zero");return ne({scalar:this.scalar/e,numerator:this.numerator,denominator:this.denominator})}else if(m(e))e=ne(e);if(e.scalar===0)throw new c("Divide by zero");if(e.isTemperature())throw new c("Cannot divide with temperatures");else if(this.isTemperature()&&!e.isUnitless())throw new c("Cannot divide with temperatures");var t=this;var r=e;if(t.isCompatible(r)&&t.signature!==400)r=r.to(t);var n=we(t.numerator,t.denominator,r.denominator,r.numerator);return ne({scalar:l(t.scalar,n[2])/r.scalar,numerator:n[0],denominator:n[1]})},inverse:function(){if(this.isTemperature())throw new c("Cannot divide with temperatures");if(this.scalar===0)throw new c("Divide by zero");return ne({scalar:1/this.scalar,numerator:this.denominator,denominator:this.numerator})}}),r(ne.prototype,{eq:function(e){return this.compareTo(e)===0},lt:function(e){return this.compareTo(e)===-1},lte:function(e){return this.eq(e)||this.lt(e)},gt:function(e){return this.compareTo(e)===1},gte:function(e){return this.eq(e)||this.gt(e)},compareTo:function(e){if(m(e))return this.compareTo(ne(e));if(!this.isCompatible(e))h(this.units(),e.units());if(this.baseScalar<e.baseScalar)return-1;else if(this.baseScalar===e.baseScalar)return 0;else if(this.baseScalar>e.baseScalar)return 1},same:function(e){return this.scalar===e.scalar&&this.units()===e.units()}}),r(ne.prototype,{isUnitless:function(){return[this.numerator,this.denominator].every(function(e){return o(e,g)})},isCompatible:function(e){if(m(e))return this.isCompatible(ne(e));if(!re(e))return false;if(e.signature!==undefined)return this.signature===e.signature;else return false},isInverse:function(e){return this.inverse().isCompatible(e)},isBase:function(){if(this._isBase!==undefined)return this._isBase;if(this.isDegrees()&&this.numerator[0].match(/<(kelvin|temp-K)>/)){this._isBase=true;return this._isBase}this.numerator.concat(this.denominator).forEach(function(e){if(e!==d&&n.indexOf(e)===-1)this._isBase=false},this);if(this._isBase===false)return this._isBase;this._isBase=true;return this._isBase}}),ke.prototype.get=function(i){if(arguments.length>1)i=Array.apply(null,arguments);return i.reduce(function(e,t,r){if(e){var n=e[t];if(r===i.length-1)return n?n.data:undefined;else return n}},this)},ke.prototype.set=function(i,a){if(arguments.length>2){i=Array.prototype.slice.call(arguments,0,-1);a=arguments[arguments.length-1]}return i.reduce(function(e,t,r){var n=e[t];if(n===undefined)n=e[t]={};if(r===i.length-1){n.data=a;return a}else return n},this)},ne.formatter=xe,r(ne.prototype,{units:function(){if(this._units!==undefined)return this._units;var e=o(this.numerator,g);var t=o(this.denominator,g);if(e&&t){this._units="";return this._units}var r=Ce(this.numerator);var n=Ce(this.denominator);this._units=r+(t?"":"/"+n);return this._units},toString:function(e,t){var r;if(a(e)){r=this.units();t=e}else if(m(e))r=e;else if(re(e))return this.toPrec(e).toString(t);var n=this.to(r);var i=t!==undefined?s(n.scalar,t):n.scalar;n=(i+" "+n.units()).trim();return n},format:function(e,t){if(arguments.length===1)if(typeof e==="function"){t=e;e=undefined}t=t||ne.formatter;var r=this.to(e);return t.call(this,r.scalar,r.units())}});var _e=new ke;function Ce(e){var t=_e.get(e);if(t)return t;var r=o(e,g);if(r)t="1";else t=Se(ze(e)).join("*");_e.set(e,t);return t}function ze(e){var t=[],r,n;for(var i=0;i<e.length;i++){r=e[i];n=e[i+1];if(y[r]){t.push(x[r]+x[n]);i++}else t.push(x[r])}return t}function Se(e){var t=e.reduce(function(e,t){var r=e[t];if(!r)e.push(r=e[t]=[t,0]);r[1]++;return e},[]);return t.map(function(e){return e[0]+(e[1]>1?e[1]:"")})}return ne.version="1.7.5",ne}()}(e={exports:{}}),e.exports);function i(e){this.val=e}return i.prototype.value=function(){return i.toIdValue(this.val)},i.prototype.attr=function(e){return i.newValue(this.val[e])},i.prototype.isValidJson=function(){try{JSON.parse(this.val),this.val=!0}catch(e){this.val=!1}return this},i.prototype.plus=function(e){return i._isNull(e)||(this.val="object"==typeof e||"function"==typeof e?this.val+e.value():this.val+e),this},i.prototype.pow=function(e){return"object"==typeof denominator&&"function"==typeof denominator.value&&(e=e.value()),this.val=Math.pow(this.val,e),this},i.prototype.times=function(e){return"object"==typeof e&&"function"==typeof e.value&&(e=e.value()),this.val=this.val*e,this},i.prototype.div=function(e){return"object"==typeof e&&"function"==typeof e.value&&(e=e.value()),this.val=this.val/e,this},i.prototype.age=function(){return i._isNull(this.val)?this.val=void 0:this.val=Math.floor((Date.now()-this.val)/(525949.2*60*1e3)),this},i.prototype.map=function(e,t,r){var n;return"function"==typeof e?this.val=this.val.map(i.newValue).map(e):(n=i.toIdValue(this.val))in e?this.val=e[n]:void 0===r||void 0!==this.val&&null!==this.val?this.val=t:this.val=r,this},i.prototype.group=function(e,t,r){if(t&&0<t.length)for(var n=0;n<t.length;n++)if(this.val===t[n])return this;if(e&&0<e.length){var i=this.val;if(i<e[0]?this.val="-"+e[0]:i>=e[e.length-1]&&(this.val=e[e.length-1]+"+"),1<e.length)for(n=1;n<e.length;n++){var a=e[n-1],o=e[n];if(o<a){this.val=r||null;break}if(a<=i&&i<o){this.val=a+"-"+o;break}}return this}return this.val=r||null,this},i.prototype.eq=function(e){return i._isNull(this.val)&&i._isNull(e)||i._isNull(this.val)&&!i._isNull(e)?this.val=!1:this.val=this.value()===e,this},i.prototype.matches=function(e){return this.val=e.test(this.val),this},i.prototype.isNull=function(){return this.val=i._isNull(this.val),this},i.prototype.not=function(){return this.val=!this.val,this},i.prototype.or=function(e){return this.val=this.val||e.value(),this},i.prototype.and=function(e){return this.val=this.val&&e.value(),this},i.prototype.gt=function(e){return this.val=!i._isNull(this.val)&&this.value()>e,this},i.prototype.lt=function(e){return this.val=!i._isNull(this.val)&&this.value()<e,this},i.prototype.ge=function(e){return this.val=!i._isNull(this.val)&&this.value()>=e,this},i.prototype.le=function(e){return this.val=!i._isNull(this.val)&&this.value()<=e,this},i.prototype.unit=function(e){return e?(this.unit=e,this):this.unit},i.prototype.toUnit=function(e){return this.val=new t(this.val,this.unit).to(e).scalar,this},i.$=function(e){if(!(e in this))throw"Unknown attribute '"+e+"'";this[e];return new i(this[e])},i._isNull=function(e){return null==e||"string"==typeof e&&0===e.length},i.newValue=function(e){return new i(e)},i.toIdValue=function(e){return null===e?null:void 0!==e?Array.isArray(e)?e.map(i.toIdValue):"object"==typeof e&&void 0!==e._idValue?e._idValue:JSON.parse(JSON.stringify(e)):void 0},i}();