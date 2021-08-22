var abi = [
	{
		constant: true,
		inputs: [],
		name: "FFN",
		outputs: [
			{
				name: "",
				type: "address",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "newsurl",
				type: "string",
			},
			{
				indexed: true,
				name: "username",
				type: "string",
			},
			{
				indexed: true,
				name: "vote",
				type: "string",
			},
			{
				indexed: false,
				name: "time",
				type: "string",
			},
		],
		name: "voteEvent",
		type: "event",
	},
	{
		constant: false,
		inputs: [
			{
				name: "newsurl",
				type: "string",
			},
			{
				name: "username",
				type: "string",
			},
			{
				name: "vote",
				type: "string",
			},
			{
				name: "time",
				type: "string",
			},
			{
				name: "pk",
				type: "string",
			},
		],
		name: "voteInfo",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				name: "newsurl",
				type: "string",
			},
		],
		name: "getVoteInfo",
		outputs: [
			{
				name: "username",
				type: "string",
			},
			{
				name: "vote",
				type: "string",
			},
			{
				name: "time",
				type: "string",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
];
var contract_address = "0xD07804751d79F09d08affe2647ED32423EF99cf3";
var userAccount;
// load smartcontract
let voteContract = web3.eth.contract(abi);
let voteContractInstance = voteContract.at(contract_address);

async function buttonFunction(e, voter, status) {
	// get date
	myDate = new Date().toString();

	// get voter
	voter = localStorage.getItem("name");

	// get post url
	e = localStorage.getItem("ele");

	// 檢查metamask有沒有加載ethereum
	if (window.ethereum) {
		window.web3 = new Web3(ethereum);
		try {
			// Request account access if needed
			await ethereum.enable();
			if (typeof web3 !== "undefined") {
				console.log("Web3 Detected! " + web3.currentProvider.constructor.name);
				window.web3 = new Web3(web3.currentProvider);
				console.log(web3.version.api);
			} else {
				console.log("No Web3 Detected using HTTP Provider");
			}

			// Acccounts now exposed
			await web3.eth.getAccounts(function (err, accounts) {
				console.log("vote account : " + accounts);
				userAccount = accounts[0];
			});

			// call vote
			var pk = voter + e;
			await voteContractInstance.voteInfo(
				e,
				voter,
				status,
				myDate,
				pk,
				{ gasPrice: 0 },
				function (err, result) {
					console.log(result);
				}
			);
		} catch (error) {
			// User denied account access
			console.log(error);
		}
	}

	alert(
		"使用者:" +
			localStorage.getItem("name") +
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
