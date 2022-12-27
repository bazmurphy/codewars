// Job Matching #2

// Consider a matchmaking system that is designed to deliver jobs to software developers on a continual basis. 
// As more quality jobs are handpicked into the system, they will be matched to all the enrolled developers; affording them better opportunities daily.

// This means that somewhere in the system there exists functionality to take a job and match it against enrolled candidates. 
// There are several factors that go into this matching, but we'll focus on two for the purposes of this Kata.

// Create a function match which takes a job, and filters a list of candidates to the ones that match the job. 
// We'll focus on two matching properties for this Kata: equity and location.

// Equity
// The candidate has a equity property (boolean) indicating if they desire equity, while the job will have a maximum equity property (float) representing the max amount of equity offered. 
// If the maximum equity is zero, we can infer there is no equity offered. 
// A job will match unless the candidate desires equity, but the job does not offer any.

// Location
// The candidate will have two location properties: current location and desired locations. 
// A job can be located in multiple places as well which will be represented by its locations property. 
// A match is when a job location is either in the candidate's current location or any of the candidate's desired locations.

// So the candidate list might look like this:

// let candidates = [{
//   desiresEquity: true, 
//   currentLocation: 'New York',
//   desiredLocations: ['San Francisco', 'Los Angeles', 'Colorado']
// }, ...];

// And a job might look like this:

// let job = { 
//   equityMax: 1.2, 
//   locations: ['New York', 'Kentucky'] 
// }


function match(job, candidates) {
    // console.log(job);
    // console.log(candidates);

    let matches = [];

    for (let candidate in candidates) {

        // console.log("=== NEW CANDIDATE ===")

        if (job.equityMax >= candidates[candidate].desiresEquity) {
            // console.log("Equity MATCH")
        } else {
            // console.log("Equity FAIL, skipping...")
            continue;
        }

        if (job.locations.includes(candidates[candidate].currentLocation)) {
            // console.log("Current Location MATCH")
            // console.log("Equity & Current Location Conditions Met, Pushing...")
            matches.push(candidates[candidate]);
            continue;
        } else {
            for (let element in candidates[candidate].desiredLocations) {
                // console.log(candidates[candidate].desiredLocations[element]);
                if (job.locations.includes(candidates[candidate].desiredLocations[element])) {
                    // console.log("Desired Location MATCH");
                    // console.log("Equity & Desired Location Conditions Met, Pushing...")
                    matches.push(candidates[candidate]);
                    break;
                }
            }
        }
    }

    return matches;
}

// READABLE
// const match = (job, candidates) => {
//     return candidates
//         .filter(candidate =>
//             job.equityMax >= candidate.desiresEquity &&
//             (job.locations.includes(candidate.currentLocation) ||
//                 job.locations.some(element => candidate.desiredLocations.includes(element)))
//         );
// }

// DISGUSTING ONE LINER
// const match = (job, candidates) => candidates.filter(candidate => job.equityMax >= candidate.desiresEquity && (job.locations.includes(candidate.currentLocation) || job.locations.some(element => candidate.desiredLocations.includes(element))));


let job1 = { 
    equityMax: 0, 
    locations: ['Los Angeles', 'New York'] 
}
let job2 = { 
    equityMax: 1.2, 
    locations: ['New York', 'Kentucky'] 
};
let candidates = [
    {
        desiresEquity: true,
        currentLocation: 'New York',
        desiredLocations: ['San Francisco', 'Los Angeles']
    }, 
    {
        desiresEquity: false,
        currentLocation: 'San Francisco',
        desiredLocations: ['Kentucky', 'New Mexico']
    }
];
console.log(match(job1, candidates));
console.log(match(job2, candidates));

let job3 = { equityMax: 0, locations: ['NY', 'SF', 'LA'] }
let candidates3 = [{
    desiresEquity: false,
    currentLocation: 'NY',
    desiredLocations: []
},
{
    desiresEquity: false,
    currentLocation: 'SF',
    desiredLocations: []
},
{
    desiresEquity: false,
    currentLocation: 'LA',
    desiredLocations: []
},
{
    desiresEquity: false,
    currentLocation: 'CO',
    desiredLocations: []
}]
console.log(match(job3, candidates3));

let job4 = { equityMax: 1.2, locations: ['NY', 'SF', 'CO', 'WA'] }
let candidates4 = [{
    desiresEquity: false,
    currentLocation: 'WY',
    desiredLocations: ['NY', 'SF']
},
{
    desiresEquity: false,
    currentLocation: 'WY',
    desiredLocations: ['LA']
},
{
    desiresEquity: false,
    currentLocation: 'WY',
    desiredLocations: ['CO']
},
{
    desiresEquity: false,
    currentLocation: 'WY',
    desiredLocations: ['ME']
},
{
    desiresEquity: false,
    currentLocation: 'WY',
    desiredLocations: ['LA', 'WA']
}]
console.log(match(job4, candidates4));

let job5 = { equityMax: 0, locations: ['NY', 'SF', 'LA', 'CO'] }
let candidates5 = [{
    desiresEquity: true,
    currentLocation: 'NY',
    desiredLocations: []
},
{
    desiresEquity: true,
    currentLocation: 'SF',
    desiredLocations: []
},
{
    desiresEquity: true,
    currentLocation: 'LA',
    desiredLocations: []
},
{
    desiresEquity: true,
    currentLocation: 'CO',
    desiredLocations: []
}]
console.log(match(job5, candidates5));

let job6 = {
    equityMax: 2,
        locations:
    ['AP', 'AA', 'WV', 'AE', 'AK', 'AZ', 'WA', 'DC', 'NC', 'AK']
}
let candidates6 = [{
    desiresEquity: false,
    currentLocation: 'NY',
    desiredLocations: ['WY', 'ND']
},
{
    desiresEquity: false,
    currentLocation: 'FM',
    desiredLocations: ['WA']
},
{
    desiresEquity: false,
    currentLocation: 'ND',
    desiredLocations: ['NE']
},
{
    desiresEquity: false,
    currentLocation: 'AE',
    desiredLocations: ['NV', 'CO', 'DE']
}]
console.log(match(job6, candidates6));


// Solution 1
const equityMatch = function (candidate, job) {
    return candidate.desiresEquity === false || job.equityMax > 0;
}

const locationMatch = function (candidate, job) {
    for (const location of job.locations) {
        if (candidate.desiredLocations.includes(location) || candidate.currentLocation === location) {
            return true;
        }
    }

    return false;
}

const match = function (job, candidates) {
    const matches = [];
    for (const candidate of candidates) {
        if (equityMatch(candidate, job) && locationMatch(candidate, job)) {
            matches.push(candidate);
        }
    }

    return matches;
}


// Solution 2
const intersect = (arra, arrb) => arra.filter(el => arrb.indexOf(el) > -1);

const matchCandidate = (job, candidate) => {
    let equityMatches = !(candidate.desiresEquity && job.equityMax === 0);
    let desiredLocations = [...candidate.desiredLocations, candidate.currentLocation];
    let locationMatches = intersect(job.locations, desiredLocations).length > 0;
    return equityMatches && locationMatches;
};

const match = (job, candidates) => candidates.filter(matchCandidate.bind(null, job));


// Solution 3
function match(job, candidates) {
    return candidates.filter(c => (job.equityMax > 0 || !c.desiresEquity) && job.locations.some(l => c.currentLocation === l || c.desiredLocations.includes(l)));
}


// Solution 4
const match = (job, candidates) =>
    candidates.filter(val => job.locations.some(v => [val.currentLocation, ...val.desiredLocations].includes(v)) && (job.equityMax || !val.desiresEquity));


// Solution 5
function match(job, candidates) {
    return candidates.filter(x => !(x.desiresEquity && !job.equityMax) && job.locations.some(y => [x.currentLocation].concat(x.desiredLocations).includes(y)))
}


// Solution 6
function match(job, candidates) {
    let shortlistedCandidates = [];

    for (let i = 0; i < candidates.length; i++) {
        let equityMatch, currentLocationMatch, desiredLocationMatch = false;
        // 1: match equity
        if (!candidates[i].desiresEquity || job.equityMax > 0) {
            equityMatch = true
        }
        // 2: match current location
        let candidateCurrentLocation = candidates[i].currentLocation;
        if (job.locations.includes(candidateCurrentLocation)) {
            currentLocationMatch = true
        }
        // 3: match desired location
        let candidateDesiredLocations = candidates[i].desiredLocations;
        if (job.locations.some(r => candidateDesiredLocations.indexOf(r) >= 0)) {
            desiredLocationMatch = true
        }
        if (equityMatch && (currentLocationMatch || desiredLocationMatch)) {
            shortlistedCandidates.push(candidates[i]);
        }
    }
    return shortlistedCandidates;
}


// Solution 7
function matchEquity(job, candidates) {
    if (job.equityMax > 0 || candidates.desiresEquity !== true) {
        return true
    }
}

function matchLocation(job, candidates) {

    for (const location of job.locations) {

        if (location === candidates.currentLocation || candidates.desiredLocations.includes(location)) {
            return true
        }
    }
    return false
}

function match(job, candidates) {

    let matches = [];

    for (const candidate of candidates) {

        if (matchEquity(job, candidate) && matchLocation(job, candidate)) {
            matches.push(candidate)
        }
    }

    return matches
}


// Solution 8
function match(job, candidates) {
    matches = []
    for (i = 0; i < candidates.length; i++) {
        locations = candidates[i].desiredLocations
        locations.push(candidates[i].currentLocation)

        pass_location = false
        pass_equity = candidates[i].desiresEquity ? job.equityMax > 0 : true

        for (j = 0; j < locations.length; j++) {
            for (k = 0; k < job.locations.length; k++) {
                if (locations[j] == job.locations[k]) {
                    pass_location = true
                    break
                }
            }
        }

        if (pass_location && pass_equity) {
            matches.push(candidates[i])
        }
    }
    return matches
}


// Solution 9
function match(job, candidates) {
    var valid_candidates = [];

    for (let i = 0; i < candidates.length; ++i) {
        if (match_candidate(job, candidates[i]))
            valid_candidates.push(candidates[i]);
    }

    return valid_candidates;
}

function match_candidate(job, candidate) {
    if (!candidate.desiresEquity || job.equityMax > 0) {
        for (let j = 0; j < job.locations.length; ++j) {
            candidate.desiredLocations.push(candidate.currentLocation);

            for (let c = 0; c < candidate.desiredLocations.length; ++c)
                if (job.locations[j] == candidate.desiredLocations[c]) return true;
        }
    }

    return false;
}


// Solution 10
const match = (job, candidates) =>
    candidates.filter(c => (!c.desiresEquity || job.equityMax !== 0) &&
        c.desiredLocations.concat(c.currentLocation).some(l => job.locations.indexOf(l) !== -1)
    )


// Solution 11
const match = (j, c) => c.map(a => (!!j['equityMax'] || !a['desiresEquity']) && a['desiredLocations'].concat(a['currentLocation']).map(b => j['locations'].indexOf(b) != -1).reduce((p, q) => p || q, false)).filter(a => a);


// Solution 12
function match(job, candidates) {
    return candidates.filter((c) => (!c.desiresEquity || job.equityMax != 0) && c.desiredLocations.concat([c.currentLocation]).some(l => job.locations.indexOf(l) != -1));
}