export const PrivateVotingAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "AccountBurnedEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "candidateId",
                "type": "uint256"
            }
        ],
        "name": "CandidateRegisteredEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "ElectionsRegisteredEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "IncorrectSecretPhraseEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "verifierAddress",
                "type": "address"
            }
        ],
        "name": "VerifierConnectedEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "candidateId",
                "type": "uint256"
            }
        ],
        "name": "VotedEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "voterAddress",
                "type": "address"
            }
        ],
        "name": "VoterRegisteredEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "voterAddress",
                "type": "address"
            }
        ],
        "name": "VoterVerifiedEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "VotesTalliedEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "enum PrivateVoting.WorkflowStatus",
                "name": "previousStatus",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "enum PrivateVoting.WorkflowStatus",
                "name": "newStatus",
                "type": "uint8"
            }
        ],
        "name": "WorkflowStatusChangeEvent",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "administrator",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "election",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "workflowStatus",
        "outputs": [
            {
                "internalType": "enum PrivateVoting.WorkflowStatus",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint128",
                "name": "_secretHash1",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "_secretHash2",
                "type": "uint128"
            }
        ],
        "name": "burnAndRetrieve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[2]",
                "name": "a",
                "type": "uint256[2]"
            },
            {
                "internalType": "uint256[2][2]",
                "name": "b",
                "type": "uint256[2][2]"
            },
            {
                "internalType": "uint256[2]",
                "name": "c",
                "type": "uint256[2]"
            },
            {
                "internalType": "uint256[1]",
                "name": "input",
                "type": "uint256[1]"
            }
        ],
        "name": "verifyAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "_candidateId",
                "type": "uint8"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "myVoteIs",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_electionName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_electionDescription",
                "type": "string"
            }
        ],
        "name": "registerElection",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_voterAddress",
                "type": "address"
            }
        ],
        "name": "registerVoter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_candidateName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_candidateMotto",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_photoUrl",
                "type": "string"
            }
        ],
        "name": "registerCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_verifierAddress",
                "type": "address"
            }
        ],
        "name": "connectVerifier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startVotersRegistration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startBurnAndRetrieveSession",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startCandidatesRegistration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startVerifierGeneration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startVerificationSession",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startVotingSession",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endVotingSession",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tallyVotes",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "_candidateId",
                "type": "uint8"
            }
        ],
        "name": "getCandidate",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "getHashes1",
        "outputs": [
            {
                "internalType": "uint128[]",
                "name": "",
                "type": "uint128[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "getHashes2",
        "outputs": [
            {
                "internalType": "uint128[]",
                "name": "",
                "type": "uint128[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "getWinningCandidate",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "motto",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "photoUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "uint32",
                        "name": "voteCount",
                        "type": "uint32"
                    }
                ],
                "internalType": "struct PrivateVoting.Candidate",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "getCandidateNumber",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
]