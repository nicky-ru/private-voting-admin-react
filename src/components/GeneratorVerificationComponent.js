import React, { Component } from 'react';
import privateVoting from "../privateVoting";

class GeneratorVerificationComponent extends Component {
    state = {
        verifierAddress: "",
    }

    async componentDidMount() {
        privateVoting.events.VerifierConnectedEvent(function (error, event) {
            document.getElementById('verifier-warning').hidden = true;
            if (!error) {
                document.getElementById('verifier-success').hidden = false;
            }
            else {
                document.getElementById('verifier-warning').hidden = true;
                console.log(error);
                document.getElementById('verifier-danger').hidden = false;
            }
        });
    }

    setVerifierAddress = (event) => {
        this.setState({verifierAddress: event.target.value});
    }

    connectVerifier = async (event) => {
        event.preventDefault();

        document.getElementById('verifier-warning').hidden = true;
        document.getElementById('verifier-success').hidden = true;
        document.getElementById('verifier-danger').hidden = true;

        if (this.props.isAdmin()) {
            if (this.props.workflowStatus < 4) {
                document.getElementById('verifier-danger').textContent = 'The verifier generation session has not started yet';
                document.getElementById('verifier-danger').hidden = false;
            } else if (this.props.workflowStatus > 4) {
                document.getElementById('verifier-danger').textContent = 'The verifier generation session has already ended';
                document.getElementById('verifier-danger').hidden = false;
            }
            else {
                document.getElementById('verifier-warning').hidden = false;
                try {
                    await privateVoting.methods.connectVerifier(this.state.verifierAddress)
                        .send({from: this.props.currentUser, gas: 100000});
                } catch (e) {
                    document.getElementById('verifier-warning').hidden = true;
                    document.getElementById('verifier-danger').hidden = false;
                }
            }
        } else
        {
            document.getElementById("verifier-danger").textContent = 'The given address does not correspond to the administrator';
            document.getElementById('verifier-danger').hidden = false;
        }
    }

    render() {
        if (this.props.workflowStatus === "4") {
            return(
                <div className="container" id="verify-generator-container">
                    <h4>Connect verifier</h4>
                    <form>
                        <div className="row flex-column flex-lg-row">
                            <div className="col-auto col-lg-2 text-center text-lg-end">
                                <label className="col-form-label">Verifier address</label>
                            </div>
                            <div className="col-auto col-lg-10">
                                <input className="form-control" type="text" placeholder="0x..." onChange={this.setVerifierAddress}/>
                            </div>
                        </div>
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-2 d-none d-lg-inline">
                                <p className="text-center"/>
                            </div>
                            <div className="col-auto col-lg-4">
                                <h6 className="text-uppercase text-start text-warning" id="verifier-warning" hidden>processing</h6>
                                <h6 className="text-uppercase text-start text-success" id="verifier-success" hidden>verifier has been connected</h6>
                                <h6 className="text-uppercase text-start text-danger" id="verifier-danger" hidden>verifier could not be connected</h6>
                            </div>
                            <div className="col-auto col-lg-2 text-center text-lg-end">
                                <button className="btn btn-outline-dark" type="submit" onClick={this.connectVerifier}>Connect</button>
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

export default GeneratorVerificationComponent;