import React, { Component } from 'react';
import privateVoting from "../privateVoting";
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/styles.css';

class VoterRegistrationComponent extends Component {
    state = {
        voterAddress: "",
    }

    async componentDidMount() {
        privateVoting.events.VoterRegisteredEvent(function (error, event) {
            document.getElementById('voter-warning').hidden = true;

            if (!error) {
                document.getElementById('voter-success').hidden = false;
            }
            else {
                console.log(error);
                document.getElementById('voter-danger').hidden = false;
            }
        });
    }

    setVoterAddress = (event) => {
        this.setState({voterAddress: event.target.value});
    }

    registerVoter = async (event) => {
        event.preventDefault();

        document.getElementById('voter-warning').hidden = true;
        document.getElementById('voter-success').hidden = true;
        document.getElementById('voter-danger').hidden = true;

        if (this.props.isAdmin()) {
            if (this.props.workflowStatus < 1) {
                document.getElementById('voter-danger').textContent = 'The voters registration session has not started yet';
                document.getElementById('voter-danger').hidden = false;
            } else if (this.props.workflowStatus > 1) {
                document.getElementById('voter-danger').textContent = 'The voters registration session has already ended';
                document.getElementById('voter-danger').hidden = false;
            }
            else {
                document.getElementById('voter-warning').hidden = false;
                try {
                    await privateVoting.methods.registerVoter(this.state.voterAddress)
                        .send({from: this.props.currentUser, gas: 100000});
                } catch (e) {
                    document.getElementById('voter-warning').hidden = true;
                    document.getElementById('voter-danger').hidden = false;
                }

            }
        } else
        {
            document.getElementById("voter-danger").textContent = 'The given address does not correspond to the administrator';
            document.getElementById('voter-danger').hidden = false;
        }
    }

    render() {
        if (this.props.workflowStatus === "1") {
            return(
                <div className="container" id="voter-reg-container">
                    <h4>Register voters</h4>

                    <form>
                        <div className="row flex-column flex-lg-row">

                            <div className="col-auto col-lg-2 text-center text-lg-end">
                                <label className="col-form-label">Voter address</label>
                            </div>

                            <div className="col-auto col-lg-10">
                                <input className="form-control" type="text" placeholder="0x..." onChange={this.setVoterAddress}/>
                            </div>
                        </div>

                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-2 d-none d-lg-inline">
                                <p className="text-center"/>
                            </div>
                            <div className="col-auto col-lg-4">
                                <h6 className="text-uppercase text-start text-warning" id="voter-warning" hidden>Processing...</h6>
                                <h6 className="text-uppercase text-start text-success" id="voter-success" hidden>voter has been registered</h6>
                                <h6 className="text-uppercase text-start text-danger" id="voter-danger" hidden>voter could not be registered</h6>
                            </div>
                            <div className="col-auto col-lg-2 text-center text-lg-end">
                                <button className="btn btn-outline-dark" type="submit" onClick={this.registerVoter}>Register</button>
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

export default VoterRegistrationComponent;