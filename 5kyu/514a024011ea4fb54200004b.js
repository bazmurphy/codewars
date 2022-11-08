// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  // try to complete this without RegEx
  let domain;
  if (url.includes("http") === false && url.includes("www") === false) {
    return url.split(".")[0]
  } else if (url.includes("www.")) {
    domain = url.split("www.")[1]
  } else {
    domain = url.split("//")[1]
  }
  return domain.split(".")[0] 
}

console.log(domainName("http://google.com"));
// "google"
console.log(domainName("http://google.co.jp"));
// "google"
console.log(domainName("www.xakep.ru"));
// "xakep"
console.log(domainName("https://youtube.com"));
// "youtube"
console.log(domainName("cnx0ucb4a5aa.pro/warez/"));
// cnx0ucb4a5aa


