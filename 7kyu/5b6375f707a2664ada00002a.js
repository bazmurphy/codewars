// // Who's Online?

// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]

// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }

// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }

// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

const whosOnline = (friends) => {

    let online = [];
    let away = [];
    let offline  = [];
    
    friends.forEach(element => {
        if (element.status === "online" && element.lastActivity <= 10) {
            online.push(element.username);
        } else if (element.status === "online" && element.lastActivity > 10) {
            away.push(element.username);
        } else if (element.status === "offline") {
            offline.push(element.username);
        }
    })

    let result = {};

    if (online.length) {
        result.online = online;
    }
    if (away.length) {
        result.away = away;
    }
    if (offline.length) {
        result.offline = offline;
    }

    return result;
}

console.log(whosOnline(
    [  
        {
            username: 'David',
            status: 'online',
            lastActivity: 10
        }, 
        {
            username: 'Lucy', 
            status: 'offline',
            lastActivity: 22
        }, 
        {
            username: 'Bob', 
            status: 'online',
            lastActivity: 104
        }
    ]
));
// { online: [ 'David' ], away: [ 'Bob' ], offline: [ 'Lucy' ] }


// Solution 1
const whosOnline = (friends) => {
    let output = {};
    friends.forEach(e => {
        let status = e.status;
        if(status === 'online' && e.lastActivity > 10) status = 'away';
        let temp = output[status];
        if(output[status]) {
            output[status].push(e.username);
        }
        else {
            output[status] = [e.username];
        }
    });
    return output;
}


// Solution 2
const whosOnline = friends => friends.reduce((a,{username, status, lastActivity}) => {
    const fStatus = status === 'online' && lastActivity > 10 ? 'away' : status;
    a[fStatus] ? a[fStatus].push(username) : a[fStatus] = [username];
    return a;
  }, {})


// Solution 3
const whosOnline = (friends) => {
    const output = {}
    friends.forEach((n) => {
        if (n.status === 'online' && n.lastActivity <= 10) {
            if (!output.online) output.online = [];
            output.online.push(n.username)
        } else if (n.status === 'offline') {
            if(!output.offline) output.offline = [];
            output.offline.push(n.username)
        } else {
            if(!output.away) output.away = [];
            output.away.push(n.username)
        }
    })
    return output;
}


// Solution 4
const whosOnline = friends =>
    [['online',  friend => friend.status === 'online' && friend.lastActivity <= 10],
     ['away',    friend => friend.status === 'online' && friend.lastActivity >  10],
     ['offline', friend => friend.status === 'offline']]
    .map(([status, func]) => [status, friends.filter(func).map(friend => friend.username)])
    .reduce((result, [status, array]) => {
        if (array.length) result[status] = array;
        return result;
    }, {});


// Solution 5
const whosOnline = (friends) => {

    let status;  
  
    const getStatus = friend => 
      friend.status === 'online' && friend.lastActivity > 10 
      ? 'away' 
      : friend.status;
  
    return friends.reduce((state, friend) => (
      status = getStatus(friend),
      state[status] = state[status] || [],
      state[status].push(friend.username),
      state
    ), {});
  
  }


// Solution 6
const R = require('ramda');

const whosOnline = R.pipe(
  R.groupBy(f => f.status != 'online' ? 'offline' : f.lastActivity > 10 ? 'away' : 'online'),
  R.map(R.pluck('username')),
);


// Solution 7
const whosOnline = (friends) => {
    const whosonline = {
      online : [],
      offline : [],
      away : []
    }
    for(let a of friends){
      if(a['status'] == 'online' && a['lastActivity'] <= 10){
        whosonline['online'].push(a['username']);
      }
      else if(a['status'] == 'offline'){
        whosonline['offline'].push(a['username']);
      }
      else{
        whosonline['away'].push(a['username']);
      }
    }
    if(whosonline['online'].length == 0){
      delete whosonline['online'];
    }
    if(whosonline['offline'].length == 0){
      delete whosonline['offline'];
    }
    if(whosonline['away'].length == 0){
      delete whosonline['away'];
    }
    return whosonline;
  }


// Solution 8
const whosOnline = (friends) => {
    const status = {
      online: [],
      offline: [],
      away: []
    }
  
    for(const friend of friends) {
      if(friend.status === 'offline') {
        status.offline.push(friend.username)
      }
      else {
        if(friend.lastActivity > 10 && friend.status === 'online') {
          status.away.push(friend.username)
        } else {
          status.online.push(friend.username)
        } 
      }
    }
    for(const guests in status) {
      if(status[guests].length === 0) {
        delete status[guests];
      }
    }
    return status;
  }


// Solution 9
const whosOnline = friends =>
  friends.reduce((pre, {username, status, lastActivity}) =>
    ((val => pre[val] ? pre[val].push(username) : pre[val] = [username])
    (status === `online` && lastActivity > 10 ? `away` : status), pre), {});


// Solution 10
const whosOnline = (friends) => {
    let online = []
    let away = []
    let offline = []
    let result = {}
    for(let i in friends){
        if(friends[i].status == 'online' && friends[i].lastActivity <= 10){            
            online.push(friends[i].username)
            result.online = online
        }
        else if(friends[i].status == 'offline'){
            offline.push(friends[i].username)
            result.offline = offline
        }
        else{            
            away.push(friends[i].username)
            result.away = away
      }
    }
    
    return result
}


// Solution 11
const whosOnline = (f) => {
    const obj = {}
    if(f.length === 0) return obj;
    f.map( el => { 
      if (el.lastActivity > 10 && el.status === 'online') el.status = 'away';
      if (!obj[el.status]) obj[el.status] = [];
      return obj[el.status].push(el.username);
    })
    return obj
  }


// Solution 12
function whosOnline(arr) {
    let res = {'away': [], 'online': [], 'offline': []};
    for (let x of arr) {
      if (x.status == 'online') {
        if (x.lastActivity > 10) res.away.push(x.username);
        else res.online.push(x.username);
      }
      else res.offline.push(x.username);
    }
    if (!res.away.length) delete res.away;
    if (!res.online.length) delete res.online;
    if (!res.offline.length) delete res.offline;
    return res;
  }