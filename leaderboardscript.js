const leadersData = 
[
  {
    "currentRank": 1,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/01/64.png",
    "name": "Vaibhav Soni",
    "correctAns": "",
    "score": 5000
  },
  {
    "currentRank": 2,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/02/64.png",
    "name": "Ashish",
    "correctAns": "",
    "score": 4000
  },
  {
    "currentRank": 3,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/03/64.png",
    "name": "Ravi",
    "correctAns": "",
    "score": 3500
  },
  {
    "currentRank": 4,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/04/64.png",
    "name": "Abhishek",
    "correctAns": "",
    "score": 2500
  },
  {
    "currentRank": 5,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/05/64.png",
    "name": "Shubhanshi",
    "correctAns": "",
    "score": 1500
  },
  {
    "currentRank": 6,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/06/64.png",
    "name": "Alka",
    "correctAns": "",
    "score": 1300
  },
  {
    "currentRank": 7,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/07/64.png",
    "name": "Harshit",
    "correctAns": "",
    "score": 1200
  },
  {
    "currentRank": 8,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/08/64.png",
    "name": "Aditya",
    "correctAns": "",
    "score": 1100
  },
  {
    "currentRank": 9,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/09/64.png",
    "name": "Ujjwal",
    "correctAns": "",
    "score": 1000
  },
  {
    "currentRank": 10,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/10/64.png",
    "name": "Suraj",
    "correctAns": "",
    "score": 900
  },
  {
    "currentRank": 11,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/11/64.png",
    "name": "Amit",
    "correctAns": "",
    "score": 800
  },
  {
    "currentRank": 12,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/00/64.png",
    "name": "Arindam",
    "correctAns": "",
    "score": 700
  },
  {
    "currentRank": 13,
    "avatarUrl": "https://i1.wp.com/cdn.mxpnl.com/static/tracked-user-icons/01/64.png",
    "name": "Gayathry",
    "correctAns": "",
    "score": 500
  }
 ]
 ;

function pageTemplate(leader) {
  return `
    <div class="leaderSingle">
      <div class="leftCol">
        <p class="rank">#${leader.currentRank}</p>
        <div class="leaderImg">
          <img src="${leader.avatarUrl}" />
        </div>
        <div class="nameCont">
          <p class="name">${leader.name}</p>
          <p class="correctAns">${leader.correctAns} </p>
        </div>
      </div>
      <div class="rightCol">
        <div class="points">${leader.score} ☆</div>
      </div>
    </div>
  `;
}

document.getElementById("app").innerHTML = `
<div class="leaderBoard">
  <div class="leaderHead">
    <p class="title">LEADER BOARD</p>
  </div>
  <div class="leadersStatsCont">
  ${leadersData.map(pageTemplate).join("")}
  </div>
</div>
`;
