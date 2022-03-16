/** The Visual Nuts iterator
 *  @param {number} total - Total of iterations.
 */

//The value starts from 1
let num = 1;

/*This recursive function returns all the numbers from 1 to 100, 
except when numbers are divisible by 3, 5 or 3 and 5*/
function nuts(total){
  /*Print the word 'Visual Nuts' if num is divisible by 3 and 5
  Print the word 'Visual' if num is divisible by 3
  Print the word 'Nuts' if num is divisible by 5*/
  console.log(num % 3 === 0 && num % 5 === 0 ?
     "Visual Nuts" : num % 3 === 0 ?
      "Visual" : num % 5 === 0 ?
       "Nuts" : num);
  num++;
  //Exits the function when the number reachs total
  if(num > total) return;
  nuts(total);
}

//Pass the argument with the value for the iteration
nuts(100);

/*To keep this code safe from bugs, the first thing to do is to transform it into a module. 
To prevent future problems with small adjustments, I would comment the code, explaining the 
logic in it, and implement a test routine to ensure code security.*/

/****************************************** */

const countries = [
  {
    country:"US",
    languages: ["en"]
  },
  {
    country:"BE",
    languages: ["nl","fr","de"]
  },
  {
    country:"NL",
    languages: ["nl","fy"]
  },
  {
    country:"DE",
    languages: ["de"]
  },
  {
    country:"ES",
    languages: ["es"]
  }
]

function totalCountries() {
	return countries.length;
}

function mostOfficialLanguages(lang) {
	let countriesLang = countries.filter(c => c.languages.includes(lang));
	if (countriesLang.length>0) return countriesLang.sort((a,b) => a.languages.length - b.languages.length).pop().country; else return "none";
}

function totalCountriesLanguages() {
  let languagesTemp = [];
	for (let x = 0; x<countries.length; x++) {
  	for (let y = 0; y<countries[x].languages.length; y++) {
    	if (!languagesTemp.includes(countries[x].languages[y]))
    		languagesTemp.push(countries[x].languages[y]);
    }
  }
  return languagesTemp.length;
}

function countryWithMostOfficialLanguages() {
  if (!countries) return "-";
  let orderCountries = countries.sort((a,b) => b.languages.length - a.languages.length);
  const maxLangs = orderCountries[0].languages.length;
  let retCountries = [];
  orderCountries.forEach((c, i) => { 
    if(c.languages.length===maxLangs) 
      retCountries.push(orderCountries[i].country) 
  });
	return retCountries;
}

function mostCommonOfficialLanguage() {
  if (!countries) return "-";
	let languagesTemp = [];
	for (let x = 0; x<countries.length; x++)
    languagesTemp = languagesTemp.concat(countries[x].languages);
  let countLang = languagesTemp.map((a) => languagesTemp.filter((b) => a === b).length);
  let langs = [];
  countLang.forEach((l, i) => { 
    if (l===Math.max.apply(null, countLang) && !langs.includes(languagesTemp[i])) 
      langs.push(languagesTemp[i])
  });
	return langs;
}

console.log(`Total countries in the world: ${totalCountries()}`);
console.log(`Country with most official languages, including German: ${mostOfficialLanguages('de')}`);
console.log(`Total official languages in the countries: ${totalCountriesLanguages()}`);
console.log(`Country with the most official languages: ${countryWithMostOfficialLanguages()}`);
console.log(`Most common official language: ${mostCommonOfficialLanguage()}`);