import React, { Component } from 'react';
import privateVoting from "../privateVoting";
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/styles.css';

class WorkflowButtonsComponent extends Component {
    startVotersRegistration = async (event) => {
        event.preventDefault();

        if (this.props.isAdmin()) {
            await privateVoting.methods.startVotersRegistration().send({from: this.props.currentUser, gas: 100000});
        }
    }

    startBaRSession = async (event) => {
        event.preventDefault();

        if (this.props.isAdmin()) {
            await privateVoting.methods.startBurnAndRetrieveSession().send({from: this.props.currentUser, gas: 100000});
        }
    }

    startCandidatesRegistration = async (event) => {
        event.preventDefault();

        if (this.props.isAdmin()) {
            await privateVoting.methods.startCandidatesRegistration().send({from: this.props.currentUser, gas: 100000});
        }
    }

    startVerifierGeneration = async (event) => {
        event.preventDefault();

        if (this.props.isAdmin()) {
            await privateVoting.methods.startVerifierGeneration().send({from: this.props.currentUser, gas: 100000});
        }
    }

    startVerificationSession = async (event) => {
        event.preventDefault();

        if (this.props.isAdmin()) {
            await privateVoting.methods.startVerificationSession().send({from: this.props.currentUser, gas: 100000});
        }
    }

    startVotingSession = async (event) => {
        event.preventDefault();

        if (this.props.isAdmin()) {
            await privateVoting.methods.startVotingSession().send({from: this.props.currentUser, gas: 100000});
        }
    }

    endVotingSession = async (event) => {
        event.preventDefault();

        if (this.props.isAdmin()) {
            await privateVoting.methods.endVotingSession().send({from: this.props.currentUser, gas: 100000});
        }
    }

    tallyVotes = async (event) => {
        event.preventDefault();

        if (this.props.isAdmin()) {
            await privateVoting.methods.tallyVotes().send({from: this.props.currentUser, gas: 1000000});
        }
    }

    workFlowStatusGt = (_status) => {
        return this.props.workflowStatus > _status;
    }

    render() {
        return(
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4" id="workflow-button-row">
                <div className="col">

                    <button
                        className="btn btn-outline-secondary btn-sm text-center"
                        type="button"
                        onClick={this.startVotersRegistration}
                        disabled={this.workFlowStatusGt(0)}
                    >
                        Start voters registration
                    </button>

                </div>
                <div className="col">

                    <button
                        className="btn btn-outline-secondary btn-sm text-center"
                        type="button"
                        onClick={this.startBaRSession}
                        disabled={this.workFlowStatusGt(1)}
                    >
                        Start BaR Session
                    </button>

                </div>
                <div className="col">

                    <button
                        className="btn btn-outline-secondary btn-sm text-center"
                        type="button"
                        onClick={this.startCandidatesRegistration}
                        disabled={this.workFlowStatusGt(2)}
                    >
                        Start candidates registration
                    </button>

                </div>
                <div className="col">

                    <button
                        className="btn btn-outline-secondary btn-sm text-center"
                        type="button"
                        onClick={this.startVerifierGeneration}
                        disabled={this.workFlowStatusGt(3)}
                    >
                        Start verifier generation
                    </button>

                </div>
                <div className="col">

                    <button
                        className="btn btn-outline-secondary btn-sm text-center"
                        type="button"
                        onClick={this.startVerificationSession}
                        disabled={this.workFlowStatusGt(4)}
                    >
                        Start verification session
                    </button>

                </div>
                <div className="col">

                    <button
                        className="btn btn-outline-secondary btn-sm text-center"
                        type="button"
                        onClick={this.startVotingSession}
                        disabled={this.workFlowStatusGt(5)}
                    >
                        Start voting Session
                    </button>

                </div>
                <div className="col">

                    <button
                        className="btn btn-outline-secondary btn-sm text-center"
                        type="button"
                        onClick={this.endVotingSession}
                        disabled={this.workFlowStatusGt(6)}
                    >
                        End Voting Session
                    </button>

                </div>
                <div className="col">

                    <button
                        className="btn btn-outline-secondary btn-sm text-center"
                        type="button"
                        onClick={this.tallyVotes}
                        disabled={this.workFlowStatusGt(7)}
                    >
                        Tally votes
                    </button>

                </div>
            </div>
        );
    }
}

export default WorkflowButtonsComponent;