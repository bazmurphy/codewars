// Safen User Input Part I - console.log(htmlspecialchars

// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. 
// Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). 
// This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

// Mission

// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;

function htmlspecialchars(formData) {
  let output = formData.split("");
  for (let i = 0; i < formData.length; i++) {
    if (formData[i] === "<") {
      output[i] = "&lt;"
    } else if (formData[i] === ">") {
      output[i] = "&gt;"
    } else if (formData[i] === `"`) {
      output[i] = "&quot;"
    } else if (formData[i] === "&") {
      output[i] = "&amp;"
    } else {
      output[i] = formData[i];
    }
  }
  return output.join("");
}

console.log(htmlspecialchars("<h2>Hello World</h2>"));
// "&lt;h2&gt;Hello World&lt;/h2&gt;"
console.log(htmlspecialchars("Hello, how would you & I fare?"));
// "Hello, how would you &amp; I fare?"
console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?'));
// 'How was &quot;The Matrix&quot;?  Did you like it?'
console.log(htmlspecialchars("<script>alert('Website Hacked!');</script>"));
// "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"


// Solution 1
function htmlspecialchars(formData) {
  return formData.replace(/&/g, "&amp;")
                 .replace(/"/g, "&quot;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;");
}


// Solution 2
function htmlspecialchars(formData) {
  return formData.replace(/[<>"&]/g, ch => ({"<":"&lt;",">":"&gt;","\"":"&quot;","&":"&amp;"}[ch]));
}


// Solution 3
function htmlspecialchars(formData) {
    const dict = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    return formData.replace(/[<>"&]/g, char => dict[char]);
}


// Solution 4
const htmlspecialchars = formData => formData.replace(/[<>"&]/g, m => ({"<": "&lt;", ">": "&gt;", "\"": "&quot;", "&": "&amp;"})[m])


// Solution 5
function htmlspecialchars(formData) {
  let harmfulCharactersResult = '';
  for (let i = 0; i < formData.length ; i++){
    if (formData[i] === '<'){
      harmfulCharactersResult += '&lt;'
    } else if (formData[i] === '>'){
      harmfulCharactersResult += '&gt;'
    } else if (formData[i] === '"'){
      harmfulCharactersResult += '&quot;'
    } else if (formData[i] === '&'){
      harmfulCharactersResult += '&amp;' 
    } else {
      harmfulCharactersResult += formData[i]
    }
  }
  return harmfulCharactersResult;
}


// Solution 6
const htmlspecialchars = (formData) => formData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')


// Solution 7
var htmlspecialchars=s=>s.replace(/[<>"&]/g,c=>`&${{'<':'lt','>':'gt','"':'quot','&':'amp'}[c]};`)


// Solution 8
const htmlspecialchars = formData =>
  formData.replace(/[<>"&]/g, val => `&${{['<']: `lt`, ['>']: `gt`, ['"']: `quot`, ['&']: `amp`}[val]};`);


// Solution 9
function htmlspecialchars (formData) {
    let map = { '<': 'lt', '>': 'gt', '"': 'quot', '&': 'amp' }
    return formData.replace(/[<>"&]/g, m => `&${map[m]};`);
}


// Solution 10
function htmlspecialchars(formData) {
  const map = {'<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;'};
  return formData.replace(/./g, char => map[char] || char);
}


// Solution 11
function htmlspecialchars(formData) {
  let str = '';
  for (let char of formData) {
    switch(char) {
        case '<':
          str += '&lt;';
          break;
        case '>':
          str += '&gt;';
          break;
        case '"':
          str += '&quot;';
          break;
        case '&':
          str += '&amp;';
          break;
        default: 
          str += char;
    }
  } 
  return str;
}


// Solution 12
function htmlspecialchars(formData) {
  var filter = {
    '<' : 'lt',
    '>' : 'gt',
    '"' : 'quot',
    '&' : 'amp',
  };
  return formData.replace(/[<>"&]/g,_=>'&'+filter[_]+';');
//  return encodeURIComponent(formData).replace(/%([A-F0-9]{2})/g,(a,b)=>'&#'+parseInt(b,16)+';');
}


// Solution 13
function htmlspecialchars(s) {
  return s.replace(/[<>"&]/g,x=>"&"+(x=="<" ? "lt" : x==">" ? "gt" : x=='"' ? "quot" : "amp")+";");
}


// Solution 14
htmlspecialchars = formData => formData.replace(/[<>"&]/g,replacerFunction =>({'<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;'})[replacerFunction])