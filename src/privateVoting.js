import web3 from "./web3";
import { PrivateVotingAbi } from "./privateVotingAbi";

// const address = "0xa340115540Cd87c4c8Bf90459C89736198E9ecE7"; // rinkeby
// const address = "0xe365FbD57EcFF1B6a1931A91957E12cf7aAF19AD"; // ganache
const address = "0x1405e3635e7A2Bf551CA49e95Ea7a2d1193C1240"; // rinkeby2

export default new web3.eth.Contract(PrivateVotingAbi, address);