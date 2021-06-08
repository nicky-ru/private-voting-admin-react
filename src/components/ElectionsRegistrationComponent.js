import React, { Component } from 'react';
import privateVoting from "../privateVoting";

class ElectionsRegistrationComponent extends Component {
    state = {
        electionsName: "",
        electionsDescription: "",
    }

    async componentDidMount() {
        privateVoting.events.ElectionsRegisteredEvent(function (error, event) {
            document.getElementById('election-warning').hidden = true;
            if (!error) {

                document.getElementById('election-success').hidden = false;
            }
            else {
                document.getElementById('election-danger').hidden = false;
                console.log(error);
            }
        });
    }

    setElectionName = (event) => {
        this.setState({ electionsName: event.target.value });
    }

    setElectionDescription = (event) => {
        this.setState({ electionsDescription: event.target.value });
    }

    updateElections = async (event) => {
        event.preventDefault();

        document.getElementById('election-warning').hidden = true;
        document.getElementById('election-success').hidden = true;
        document.getElementById('election-danger').hidden = true;

        if (this.props.isAdmin()) {
            if (this.props.workflowStatus > 0) {
                document.getElementById('election-danger').textContent = 'The elections registration session has already ended';
                document.getElementById('election-danger').hidden = false;
            } else {
                document.getElementById('election-warning').hidden = false;
                try {
                    await privateVoting.methods.registerElection(this.state.electionsName, this.state.electionsDescription)
                        .send({from: this.props.currentUser, gas: 2000000});
                } catch (e) {
                    document.getElementById('election-warning').hidden = true;
                    document.getElementById('election-danger').hidden = false;
                }

            }
        } else
        {
            document.getElementById("election-danger").textContent = 'The given address does not correspond to the administrator';
            document.getElementById('election-danger').hidden = false;
        }
    }

    render() {
        if (this.props.workflowStatus === "0") {
            return(
                <div className="container" id="elections-container">

                    <h4>Register elections</h4>
                    <form>

                        <div className="row flex-column flex-lg-row">

                            <div className="col-auto col-lg-2 text-center text-lg-end">
                                <label className="col-form-label">Name of elections</label>
                            </div>

                            <div className="col-auto col-lg-10">
                                <input className="form-control" type="text" onChange={this.setElectionName} placeholder="ex. Presidential elections 2021"/>
                            </div>
                        </div>

                        <div className="row flex-column flex-lg-row">
                            <div className="col-auto col-lg-2 text-center text-lg-end">
                                <label className="col-form-label">Description</label>
                            </div>
                            <div className="col-auto col-lg-10">
                                <input className="form-control" type="text" onChange={this.setElectionDescription} placeholder="input the description of the elections here"/>
                            </div>
                        </div>

                        <div className="row flex-column-reverse flex-lg-row">

                            <div className="col-2 d-none d-lg-inline">
                                <p className="text-center"/>
                            </div>

                            <div className="col-auto col-lg-4">
                                <h6 className="text-uppercase text-start text-warning" id="election-warning" hidden>Processing...</h6>
                                <h6 className="text-uppercase text-start text-success" id="election-success" hidden>Elections has been registered</h6>
                                <h6 className="text-uppercase text-start text-danger" id="election-danger" hidden>Elections could not be registered</h6>
                            </div>

                            <div className="col-auto col-lg-2 text-center text-lg-end">
                                <button className="btn btn-outline-dark" onClick={this.updateElections} type="submit">Update</button>
                            </div>

                        </div>

                    </form>
                    <hr />

                </div>
            );
        }
        else return (<div/>);
    }
}

export default ElectionsRegistrationComponent;