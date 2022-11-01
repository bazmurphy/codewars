// Job Matching #3

// Consider a matchmaking system which asks developers for their skills.
// This includes all the skills a developer has used in the past, desires to continue to use, and would like to avoid.
// A candidate has many skills, one may look like this:

// {
//     name: 'JavaScript',
//         experience: 7, // in years 
//             preference: 'desired' // could be desired, neutral or avoid
// }

// On the flip side, the company can create a job with skill requirements.
// Many companies are just looking for bright developers, so Strive also encourages the use of substitute skills.
// For example, a company can configure 3 years of JavaScript to substitute for 3 years of CoffeeScript.
// A job has many skills, one may look like this:

// {
//     name: 'CoffeeScript',
//         idealYears: 3, // in years
//             substitutions: [{
//                 name: 'JavaScript'
//             }]
// }

// A job skill can be satisfied if the candidate's years experience with the skill is greater than or equal to the ideal years. 
// For a valid match, all job skills must be satisfied by the candidate's skills.
// Additionally, if the candidate desires to use the skill, that skill can recieve a 50 % experience boost.
// However, if the candidate wants to avoid a primary(non - substitute) job skill that a company requires the match is invalid.
// At that point, there is no need to check for valid substitutions.

// Create a method match(candidate, job) that will take a candidate and a job and return a boolean indicating if it is a valid match.

function match(candidate, job) {

    // this is the overall matrix of the matches
    let overallMatch = [];

    // this is to adjust the candidate experience
    const modifier = {
        desired: 1.5,
        neutral: 1,
        avoid: 0,
    };

    // iterate over each of the array items in the skills array
    for (let jobItem of job.skills) {

        let individualMatch = [];

        for (let candidateItem of candidate.skills) {

            // first check for "avoid" on the primary skill
            if (jobItem.name === candidateItem.name && candidateItem.preference === "avoid") {
                return false;
                // check the skill names are the same and that the experience(with modification) meets the requirement
            } else if (jobItem.name === candidateItem.name &&
                (candidateItem.experience * modifier[candidateItem.preference] >= jobItem.idealYears)) {
                individualMatch.push(true)
                // check the substitute skill matches and that the experience(with modification) meets the requirement
            } else if (
                (jobItem.substitutions.length && jobItem.substitutions[0].name === candidateItem.name) &&
                (candidateItem.experience * modifier[candidateItem.preference] >= jobItem.idealYears)) {
                individualMatch.push(true)
                // if none of the above pass
            } else {
                individualMatch.push(false)
            };

        };
        // aggregate the responses to each in an array
        overallMatch.push(individualMatch);
    };

    // this gives a good visual matrix guide to the outcomes of each match
    console.log(overallMatch)

    // iterate over each subarray in the matrix to find any false values, which means the match is false overall
    for (let subarray of overallMatch) {
        if (subarray.includes(true)) {
            continue;
        } else {
            return false;
        }
    }
    // if there are no false values, then the match is true overall
    return true;

}

// ============ BAZ NOTES

// ==== CANDIDATE ====
// SKILLS [] ARRAY
// ONE OBJECT INSIDE
// 3 PROPERTY/VALUES

// name: STRING "name of language"
// experience: NUMBER (of years)
// preference: "desired/neutral/avoid"


// ==== JOB ====
// SKILLS [] ARRAY
// ONE OBJECT INSIDE
// 3 PROPERTY/VALUES

// name: STRING "name of language" CHECK THIS AGAINST CANDIDATE NAME
// idealYears: NUMBER (of years)    
//   --- CANDIDATE EXPERIENCE MUST BE GREATER THAN OR EQUAL TO IDEALYEARS
//   --- IF PREFERENCE "desired" EXPERIENCE (number of years) + 50%;
//   --- IF PREFRRENCE "avoid" then MATCH = FAIL
// substitutions: ARRAY with 1 OBJECT inside with NAME property

// is the job a match for this candidate?

// ALL JOB SKILLS MUST BE MATCHED BY THE CANDIDATES SKILLS
// BUT IF AVOID THEN MATCH = FAIL

// RETURN A BOOLEAN IF MATCH OR NOT (true for match, false for not match)

// console.log(candidate.skills)
// console.log(job.skills)

// if the candidate wants to avoid a primary(non - substitute) job skill that a company requires the match is invalid.


// let job = {
//     skills: [{ name: 'Python', idealYears: 3, substitutions: [] }]
// };

// let candidate = {
//     skills: [
//         { name: 'JavaScript', experience: 7, preference: 'neutral' },
//         { name: 'Ruby', experience: 7, preference: 'neutral' },
//         { name: 'Python', experience: 7, preference: 'neutral' }
//     ]
// }

// let candidate = {
//     skills: [{ name: 'CoffeeScript', experience: 3, preference: 'neutral' }]
// }
// let job = {
//     skills: [{ name: 'CoffeeScript', idealYears: 3, substitutions: [{ name: 'JavaScript' }] }]
// }

// console.log(match(candidate, job))
// // 'should match on primary skill'

// candidate.skills[0].name = 'JavaScript'
// // candidate skill satisfies substitute
// console.log(match(candidate, job));
// // 'should match on substitute skill');

// job.skills[0].idealYears = 10
// // raise the ideal years above candidate years
// console.log(!match(candidate, job));
// // 'should not match when ideal years are higher');

// let candidate1 = {
//     skills: [{ name: 'JavaScript', experience: 3, preference: 'neutral' }]
// }
// let job1 = {
//     skills: [{ name: 'CoffeeScript', idealYears: 3, substitutions: [{ name: 'JavaScript' }] }]
// }
// console.log(match(candidate1, job1))

// let candidate2 = {
//     skills:
//     [{ name: 'JavaScript', experience: 7, preference: 'neutral' },
//     { name: 'Ruby', experience: 7, preference: 'neutral' },
//     { name: 'Python', experience: 7, preference: 'neutral' }]
// }
// let job2 = {
//     skills:
//     [{ name: 'JavaScript', idealYears: 3, substitutions: [] },
//     { name: 'Ruby', idealYears: 3, substitutions: [] },
//     { name: 'Python', idealYears: 3, substitutions: [] }]
// }
// console.log(match(candidate2, job2))

// let candidate3 = {
//     skills:
//         [{ name: 'JavaScript', experience: 3, preference: 'neutral' },
//         { name: 'Ruby', experience: 3, preference: 'neutral' },
//         { name: 'Python', experience: 3, preference: 'neutral' }]
// }
// let job3 = {
//     skills:
//         [{ name: 'JavaScript', idealYears: 3, substitutions: [] },
//         { name: 'Ruby', idealYears: 3, substitutions: [] },
//         { name: 'Python', idealYears: 3, substitutions: [] }]
// }
// console.log(match(candidate3, job3))

// let candidate4 = {
//     skills:
//         [{ name: 'JavaScript', experience: 2, preference: 'desired' },
//         { name: 'Ruby', experience: 2, preference: 'desired' },
//         { name: 'Python', experience: 2, preference: 'desired' }]
// }
// let job4 = {
//     skills:
//         [{ name: 'JavaScript', idealYears: 3, substitutions: [] },
//         { name: 'Ruby', idealYears: 3, substitutions: [] },
//         { name: 'Python', idealYears: 3, substitutions: [] }]
// }
// console.log(match(candidate4, job4))


// let candidate5 = {
//     skills:
//     [{
//         name: 'Python',
//         experience: 4,
//         preference: 'neutral'
//     }, {
//         name: 'Java',
//         experience: 4,
//         preference: 'neutral'
//     }, {
//         name: 'Haskell',
//         experience: 7,
//         preference: 'avoid'
//     }
//     ]
// }
// let job5 = {
//     skills:
//     [{
//         name: 'Python',
//         idealYears: 3,
//         substitutions: [{ name: 'Python' }]
//     }
//     ]
// }


// Solution 1
function match(candidate, job) {
  const result = job.skills.every(req => fulfillsRequirement(candidate, req));  
  return result
}

function fulfillsRequirement(candidate, req) {
  let skill = findSkill(candidate, req.name);
  if (skill) {
    if (skill.preference === 'avoid') return false;
    
    let experience = skill.experience;
    if (skill.preference === 'desired') experience *= 1.5;
    if (experience >= req.idealYears) return true; 
  }
  
  if (req.substitutions) {
    return req.substitutions.some(subst => {
      skill = findSkill(candidate, subst.name);
      if (!skill) return false;
      if (skill.preference === 'avoid') return false;
      if (skill.experience < req.idealYears) return false;
      return true;
    });
  }
  
  return false;
}

function findSkill(candidate, name) {
  return candidate.skills.find(skill => skill.name === name);
}


// Solution 2
function match(candidate, job) {
  let skills = candidate.skills
  return job.skills.every(jobSkill => 
    !candidate.skills.some(skill =>
      skill.name == jobSkill.name && skill.preference == 'avoid'
    ) && candidate.skills.some(skill =>
      jobSkill.substitutions.map(x => x.name).concat(jobSkill.name).includes(skill.name) &&
      skill.experience * [1, 1.5][+(skill.preference == 'desired')] >= jobSkill.idealYears
    )
  )
}


// Solution 3
function match(candidate, job)
{
  for (let i=0; i<job.skills.length; ++i)
  {
    var matched = false;
    
    // Checking primary skills
    for (let j=0; j<candidate.skills.length; ++j)
    {
      var result = check_skill(candidate.skills[j], job.skills[i], job.skills[i].name);
      if (result === true)
        matched = true;
      else if (result === false)
        return false;
    }
    
    if (!matched)
    {
      // Checking substitute skills
      for (let j=0; j<candidate.skills.length; ++j)
      {
        for (let k=0; k<job.skills[i].substitutions.length; ++k)
        {
          var result = check_skill(candidate.skills[j], job.skills[i], job.skills[i].substitutions[k].name);
          
          if (result === true)
            matched = true;
          else if (result === false)
            return false;
        }
      }
    }
    
    if (!matched) return false;
  }
  
  return true;
}

function check_skill(candidate_skill, job_skill, job_skill_name)
{
  if (candidate_skill.name == job_skill_name)
  {
    return !(candidate_skill.preference == 'avoid' 
    || (candidate_skill.preference == 'neutral' && candidate_skill.experience < job_skill.idealYears) 
    || (candidate_skill.preference == 'desired' && candidate_skill.experience < job_skill.idealYears / 2));
  }
  else return null;
}


// Solution 4
function match(candidate, job) {
    for (var i = 0; i < job.skills.length; i++) {
        var skill = job.skills[i];
        var substitutions = skill.substitutions;
        var matchSkill = candidate.skills.find(x => x.name === skill.name);
        if (matchSkill == null || matchSkill.length == 0) {
            for (var j = 0; j < substitutions.length; j++) {
                matchSkill = candidate.skills.find(x => x.name === substitutions[j].name);
                break;
            }
        }
        if (matchSkill == null || matchSkill.length == 0) { return false; }
        if (matchSkill.preference === 'avoid') { return false; }
        if (matchSkill.preference === 'desired') {
            matchSkill.experience *= 1.5;
        }
        if (matchSkill.experience < skill.idealYears) { return false; }
    }
    return true;
}


// Solution 5
function match(candidate, job) { 
  // is the job a match for this candidate?
  return job.skills.every(skill => hasRequiredSkill(candidate, skill));
}

function hasRequiredSkill(candidate, jobSkill) {
  // Check whether candidate's list of skills contains required skill or substitutions
  if (candidate.skills.some(skill => skill.name === jobSkill.name && skill.preference === 'avoid')) {
    return false;
  }
  return candidate.skills.some(candidateSkill => skillsMatch(candidateSkill, jobSkill));
}

function skillsMatch(candidateSkill, jobSkill) {
   var experience = candidateSkill.experience;

   if (candidateSkill.preference === 'desired') {
     experience *= 1.5;
   }
   if (experience < jobSkill.idealYears) {
     return false;
   }
   if (candidateSkill.name === jobSkill.name) {
     return true;
   }
   if (!jobSkill.substitutions) {
     return false;
   }
   return jobSkill.substitutions.some(s => s.name === candidateSkill.name);
}


// Solution 6
const match = (candidate, job) =>
  job.skills.every(skill =>
    candidate.skills.every(cSkill => cSkill.name !== skill.name || cSkill.preference !== 'avoid') && 
    candidate.skills.some(cSkill =>  
      skill.substitutions.map(s => s.name).concat(skill.name).indexOf(cSkill.name) !== -1 && 
      skill.idealYears <= cSkill.experience * (cSkill.preference === 'desired' ? 1.5 : 1)
    )
  )


// Solution 7
function match(candidate, job) {
  const skills = candidate.skills
  return job.skills.every(jobSkill => 
    !candidate.skills.some(skill =>
      skill.name == jobSkill.name && skill.preference == 'avoid'
    ) && candidate.skills.some(skill =>
      jobSkill.substitutions.map(x => x.name).concat(jobSkill.name).includes(skill.name) &&
      skill.experience * [1, 1.5][+(skill.preference == 'desired')] >= jobSkill.idealYears
    )
  )
}


// Solution 8
function match(candidate, job) {
    const skills = candidate.skills
    return job.skills.every(jobSkill =>
        !candidate.skills.some(skill =>
            skill.name == jobSkill.name && skill.preference == 'avoid'
        ) && candidate.skills.some(skill =>
            jobSkill.substitutions.map(x => x.name).concat(jobSkill.name).includes(skill.name) &&
            skill.experience * [1, 1.5][+(skill.preference == 'desired')] >= jobSkill.idealYears
        )
    )
}


// Solution 9
function matchExperience(candidate, idealYears) {
  let experience = candidate.experience;
  if (candidate.preference === "desired") {
    experience *= 1.5;
  }
  return experience >= idealYears;
}

function matchJobSkill(candidate, jobSkill) {
  const matchSkillNames = candidate.skills.filter((candidateSkill) => {
    return jobSkill.name === candidateSkill.name;
  });
  for (const skillName of matchSkillNames) {
    if (skillName.preference === "avoid") {
      return false;
    }
    if (matchExperience(skillName, jobSkill.idealYears)) {
      return true;
    }
  }
  const matchSkillSubstitutions = candidate.skills.filter((candidateSkill) => {
    for (const skill of jobSkill["substitutions"]) {
      return skill.name === candidateSkill.name;
    }
  });
  for (const substitution of matchSkillSubstitutions) {
    if (matchExperience(substitution, jobSkill.idealYears)) {
      return true;
    }
  }
  return false;
}

function match(candidate, job) {
  for (const jobSkill of job.skills) {
    if (!matchJobSkill(candidate, jobSkill)) {
      return false;
    }
  }
  return true;
}


// Solution 10
function match(candidate, job) {
  for (const jobSkill of job.skills) {
    if (!matchJobSkill(candidate, jobSkill)) {
      return false;
    }
  }
  return true;
}

function matchJobSkill(candidate, jobSkill) {
  const matchSkillNames = candidate.skills.filter((candidateSkill) => {
    return jobSkill.name === candidateSkill.name;
  });

  for (const skillName of matchSkillNames) {
    if (skillName.preference === "avoid") {
      return false;
    }
    if (matchExperience(skillName, jobSkill.idealYears)) {
      return true;
    }
  }

  const matchSkillSubstitutions = candidate.skills.filter((candidateSkill) => {
    for (const skill of jobSkill["substitutions"]) {
      return skill.name === candidateSkill.name;
    }
  });
  for (const substitution of matchSkillSubstitutions) {
    if (matchExperience(substitution, jobSkill.idealYears)) {
      return true;
    }
  }
  return false;
}

function matchExperience(candidate, idealYears) {
  let experience = candidate.experience;
  if (candidate.preference === "desired") {
    experience *= 1.5;
  }
  return experience >= idealYears;
}


// Solution 11
function match(candidate, job) { 
  const can = {};
  candidate.skills.forEach((e) => {
    can[e.name] = {'experience': e.preference == "desired"? e.experience * 1.5: e.experience, 'preference': e.preference}  
  })

  for(let i in job.skills) {
    if(can[job.skills[i].name]) {
      if(can[job.skills[i].name].experience >= job.skills[i].idealYears && can[job.skills[i].name].preference != "avoid") continue;
      return false;
    }
    else {
      let pass = false;
      for(let j in job.skills[i].substitutions) {
         let n = job.skills[i].substitutions[j];
         if(can[n.name]) {
            if(can[n.name].experience >= job.skills[i].idealYears && can[n.name].preference != "avoid"){
              pass = true
              break;
            
            }
        }
        
        if(pass == false) return false;
      }
    }
  }
  return true;
}


// Solution 12
function match(candidate, job) {
  return job.skills.every(
    (jobSkill) =>
      !candidate.skills.some(
        (skill) => jobSkill.name === skill.name && skill.preference === "avoid"
      ) &&
      candidate.skills.some(
        (skill) =>
          (skill.name === jobSkill.name ||
            jobSkill.substitutions.some((sub) => sub.name === skill.name)) &&
          jobSkill.idealYears <=
            skill.experience * (skill.preference === "desired" ? 1.5 : 1)
      )
  );
}


// Solution 13
function match(candidate, job) {
  return job.skills.every(
    (jobSkill) =>
      !candidate.skills.some(
        (skill) => jobSkill.name === skill.name && skill.preference === "avoid"
      ) &&
      candidate.skills.some(
        (skill) =>
          (skill.name === jobSkill.name ||
            jobSkill.substitutions.some((sub) => sub.name === skill.name)) &&
          (jobSkill.idealYears <= skill.experience ||
            (skill.preference === "desired" &&
              jobSkill.idealYears <= skill.experience * 1.5))
      )
  );
}


// Solution 14
function match(candidate, job) {
  for (const jobSkill of job.skills) {
    if (
      candidate.skills.some(
        (skill) => jobSkill.name === skill.name && skill.preference === "avoid"
      ) ||
      !candidate.skills.some(
        (skill) =>
          (skill.name === jobSkill.name ||
            jobSkill.substitutions.some((sub) => sub.name === skill.name)) &&
          (jobSkill.idealYears <= skill.experience ||
            (skill.preference === "desired" &&
              jobSkill.idealYears <= skill.experience * 1.5))
      )
    ) {
      return false;
    }
  }
  return true;
}


// Solution 15
function match(candidate, job) {
  for (const jobSkill of job.skills) {
    if (!matchJobSkill(candidate, jobSkill)) {
      return false;
    }
  }
  return true;
}

function matchJobSkill(candidate, jobSkill) {
  for (const candidateSkill of candidate.skills) {
    
    if (
      (!jobSkill.substitutions && 
       candidateSkill.name === jobSkill.substitutions.name) || 
       candidateSkill.name === jobSkill.name) {
      return matchExperience(candidateSkill, jobSkill);
    }
  }
}

function matchExperience(candidateSkill, jobSkill) {
  
  if (candidateSkill.preference === "desired") {
      candidateSkill.experience *= 1.5;
  }
  if (candidateSkill.preference === "avoid") {
    return false;
    }
  return candidateSkill.experience >= jobSkill.idealYears;
}