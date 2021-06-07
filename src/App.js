import React, { Component } from 'react';
// import './css/App.css';
import web3 from "./web3";
import privateVoting from "./privateVoting";
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/styles.css';
import ElectionsRegistrationComponent from "./components/ElectionsRegistrationComponent";
import VoterRegistrationComponent from "./components/VoterRegistrationComponent";
import CandidateRegistrationComponent from "./components/CandidateRegistrationComponent";
import SecretHashesComponent from "./components/SecretHashesComponent";
import GeneratorVerificationComponent from "./components/GeneratorVerificationComponent";
import HeaderComponent from "./components/HeaderComponent";

class App extends Component {
  state = {
    administrator: "",
    currentUser: "",
    workflowStatus: "",
    workflowStatusDescription: "",
    contractAddress: "",
  };

  async componentDidMount() {
    const administrator = await privateVoting.methods.administrator().call();
    this.startRefreshAccount();

    // subscribe to registering events: Election, Voter, Candidate
    privateVoting.events.WorkflowStatusChangeEvent(async (error, event) => {
      if (!error) {
        await this.refreshWorkflowStatus();
      }
    });

    this.setState({administrator});
    await this.refreshWorkflowStatus();
  }

  isAdmin =  () => {
    return this.state.administrator === this.state.currentUser;
  }

  refreshAccount = async () => {
    let currentAccount = await web3.eth.getAccounts().then(accounts => accounts[0]);
    if (currentAccount !== this.state.currentUser) {
      this.setState({currentUser: currentAccount});
      console.log("switched accounts " + currentAccount);
    }
  }

  startRefreshAccount = () => {
    setInterval(this.refreshAccount, 1000);
  }

  refreshWorkflowStatus = async () => {
    let workflowStatus = await privateVoting.methods.workflowStatus().call();

    let workflowStatusDescription;

    switch(workflowStatus.toString())
    {
      case '0':
        workflowStatusDescription = "Registering Elections";
        break;
      case '1':
        workflowStatusDescription = "Registering Voters";
        break;
      case '2':
        workflowStatusDescription = "Burn and Retrieve session started";
        break;
      case '3':
        workflowStatusDescription = "Registering Candidates";
        break;
      case '4':
        workflowStatusDescription = "Generating Verifier";
        break;
      case '5':
        workflowStatusDescription = "Verifying Accounts";
        break;
      case '6':
        workflowStatusDescription = "Voting session started";
        break;
      case '7':
        workflowStatusDescription = "Voting session ended";
        break;
      case '8':
        workflowStatusDescription = "Votes tallied";
        break;
      default:
        workflowStatusDescription = "Unknown status";
    }

    this.setState({workflowStatus: workflowStatus, workflowStatusDescription: workflowStatusDescription});
  }

  render() {
    return(
        <div>

          <HeaderComponent
              administrator={this.state.administrator}
              currentUser={this.state.currentUser}
              workflowStatusDescription={this.state.workflowStatusDescription}
              workflowStatus={this.state.workflowStatus}
              isAdmin={this.isAdmin}
          />

          <ElectionsRegistrationComponent
              currentUser={this.state.currentUser}
              workflowStatus={this.state.workflowStatus}
              isAdmin={this.isAdmin}
          />

          <VoterRegistrationComponent
              currentUser={this.state.currentUser}
              workflowStatus={this.state.workflowStatus}
              isAdmin={this.isAdmin}
          />

          <CandidateRegistrationComponent
              currentUser={this.state.currentUser}
              workflowStatus={this.state.workflowStatus}
              isAdmin={this.isAdmin}
          />

          <SecretHashesComponent
              currentUser={this.state.currentUser}
              workflowStatus={this.state.workflowStatus}
              isAdmin={this.isAdmin}
          />

          <GeneratorVerificationComponent
              currentUser={this.state.currentUser}
              workflowStatus={this.state.workflowStatus}
              isAdmin={this.isAdmin}
          />


        </div>
    );
  }
}

export default App;

