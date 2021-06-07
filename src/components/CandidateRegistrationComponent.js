import React, { Component } from 'react';
import privateVoting from "../privateVoting";
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/styles.css';

class CandidateRegistrationComponent extends Component {
    state = {
        candidateName: "",
        candidateMotto: "",
        candidatePhoto: "",
    }

    async componentDidMount() {
        privateVoting.events.CandidateRegisteredEvent(function (error, event) {
            document.getElementById('candidate-warning').hidden = true;
            if (!error) {
                document.getElementById('candidate-success').hidden = false;
            }
            else {
                console.log(error);
                document.getElementById('candidate-danger').hidden = false;
            }
        });
    }

    setCandidateName = (event) => {
        this.setState({candidateName: event.target.value});
    }

    setCandidateMotto = (event) => {
        this.setState({candidateMotto: event.target.value});
    }

    setCandidatePhoto = (event) => {
        this.setState({candidatePhoto: event.target.value});
    }

    parseCandidateUrl = (bbcode) => {
        let urls = bbcode.split('https://');
        let _url = 'https://' + urls[1].slice(0, -6);
        let _img = 'https://' + urls[2].slice(0, -12);
        return _url + ',' + _img;
    }

    registerCandidate = async (event) => {
        event.preventDefault();

        document.getElementById('candidate-warning').hidden = true;
        document.getElementById('candidate-success').hidden = true;
        document.getElementById('candidate-danger').hidden = true;

        if (this.props.isAdmin()) {
            if (this.props.workflowStatus < 3) {
                document.getElementById('candidate-danger').textContent = 'The candidates registration session has not started yet';
                document.getElementById('candidate-danger').hidden = false;
            } else if (this.props.workflowStatus > 3) {
                document.getElementById('candidate-danger').textContent = 'The candidates registration session has already ended';
                document.getElementById('candidate-danger').hidden = false;
            }
            else {
                document.getElementById('candidate-warning').hidden = false;
                let photoUrl = this.parseCandidateUrl(this.state.candidatePhoto);
                try {
                    await privateVoting.methods.registerCandidate(this.state.candidateName, this.state.candidateMotto, photoUrl)
                        .send({from: this.props.currentUser, gas: 1000000});
                } catch (e) {
                    document.getElementById('candidate-warning').hidden = true;
                    document.getElementById('candidate-danger').hidden = false;
                }

            }
        } else
        {
            document.getElementById("candidate-danger").textContent = 'The given address does not correspond to the administrator';
            document.getElementById('candidate-danger').hidden = false;
        }
    }

    render() {
        if (this.props.workflowStatus === "3") {
            return(
                <div className="container" id="candidate-reg-container">
                    <h4>Register candidate</h4>
                    <form>
                        <div className="row flex-column flex-lg-row">
                            <div className="col-auto col-lg-2 text-center text-lg-end">
                                <label className="col-form-label">Candidate name</label>
                            </div>
                            <div className="col-auto col-lg-10">
                                <input className="form-control" type="text" placeholder="John Doe" onChange={this.setCandidateName}/>
                            </div>
                        </div>
                        <div className="row flex-column flex-lg-row">
                            <div className="col-auto col-lg-2 text-center text-lg-end">
                                <label className="col-form-label">Candidate motto</label>
                            </div>
                            <div className="col-auto col-lg-10">
                                <input className="form-control" type="text" placeholder="Up only" onChange={this.setCandidateMotto}/>
                            </div>
                        </div>
                        <div className="row flex-column flex-lg-row">
                            <div className="col-auto col-lg-2 text-center text-lg-end">
                                <label className="col-form-label">Photo url</label>
                            </div>
                            <div className="col-auto col-lg-10">
                                <input className="form-control" type="text" placeholder="http://image.com" onChange={this.setCandidatePhoto}/>
                            </div>
                        </div>
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-2 d-none d-lg-inline">
                                <p className="text-center"/>
                            </div>
                            <div className="col-auto col-lg-4">
                                <h6 className="text-uppercase text-start text-warning" id="candidate-warning" hidden>processing...</h6>
                                <h6 className="text-uppercase text-start text-success" id="candidate-success" hidden>candidate has been registered</h6>
                                <h6 className="text-uppercase text-start text-danger" id="candidate-danger" hidden>candidate could not be registered</h6>
                            </div>
                            <div className="col-auto col-lg-2 text-center text-lg-end">
                                <button className="btn btn-outline-dark" type="submit" onClick={this.registerCandidate}>Register</button>
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

export default CandidateRegistrationComponent;