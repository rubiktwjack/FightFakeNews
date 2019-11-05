var abi = [{
  "constant": true,
  "inputs": [],
  "name": "FFN",
  "outputs": [
    {
      "name": "",
      "type": "address"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "name": "newsurl",
      "type": "string"
    },
    {
      "indexed": true,
      "name": "username",
      "type": "string"
    },
    {
      "indexed": true,
      "name": "vote",
      "type": "string"
    },
    {
      "indexed": false,
      "name": "time",
      "type": "string"
    }
  ],
  "name": "voteEvent",
  "type": "event"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "newsurl",
      "type": "string"
    },
    {
      "name": "username",
      "type": "string"
    },
    {
      "name": "vote",
      "type": "string"
    },
    {
      "name": "time",
      "type": "string"
    },
    {
      "name": "pk",
      "type": "string"
    }
  ],
  "name": "voteInfo",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "newsurl",
      "type": "string"
    }
  ],
  "name": "getVoteInfo",
  "outputs": [
    {
      "name": "username",
      "type": "string"
    },
    {
      "name": "vote",
      "type": "string"
    },
    {
      "name": "time",
      "type": "string"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}
];
var contract_address = "0x64BBFEc1DD7d3A7900bD49053D89A8800a86f606";
var userAccount;
// load smartcontract
let voteContract = web3.eth.contract(abi);
let voteContractInstance = voteContract.at(contract_address);

async function buttonFunction(e, voter, status) {
  // get date
  myDate = new Date().toString();

  // 檢查metamask有沒有加載ethereum
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      await ethereum.enable();
      if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
        window.web3 = new Web3(web3.currentProvider);
        console.log(web3.version.api);
      } else {
        console.log('No Web3 Detected using HTTP Provider')
      }

      // Acccounts now exposed
      await web3.eth.getAccounts(function (err, accounts) {
        console.log(accounts);
        userAccount = accounts[0];
      })

      // call vote
      var pk = voter + e;
      await voteContractInstance.voteInfo(e, voter, status, myDate, pk, { gasPrice: 0 }, function (err, result) { console.log(result) })
      // get vote
      // await voteContractInstance.getVoteInfo.call(e, function (err, result) { console.log(result) })
      // get event
      // voteContractInstance.voteEvent({ newsurl: e, username: voter }, { fromBlock: 0, toBlock: 'latest' }).get((error, eventResult) => {
      //   if (error)
      //     console.log('Error in myEvent event handler: ' + error);
      //   else
      //     console.log('myEvent: ' + eventResult);
      // });
      voteContractInstance.allEvents({}, { fromBlock: 0, toBlock: 'latest' }, function (error, log) {
        if (!error) console.log(log);
      });


    } catch (error) {
      // User denied account access
      console.log(error);
    }
  }

  alert(
    "使用者:" +
    voter +
    "\n投票文章連結:" +
    e +
    "\n感謝您的投票!!"
  );

  console.log("clicked!");
  console.log(e);
  console.log(voter);
  console.log(status);
  console.log(myDate);
}
// FB那邊的
// events = voteContractInstance.allEvents({}, { fromBlock: 0, toBlock: 'latest' }, function (error, log) {  if (!error)    console.log(log);});