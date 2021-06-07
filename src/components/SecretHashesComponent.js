import React, { Component } from 'react';
import privateVoting from "../privateVoting";
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/styles.css';

class SecretHashesComponent extends Component {
    state = {
    }

    getKeysOne = async (event) => {
        event.preventDefault();

        if (this.props.isAdmin()) {
            let keys = await privateVoting.methods.getHashes1().call();
            document.getElementById('keys-1').value = keys;
            navigator.clipboard.writeText(keys);
        }
    }

    getKeysTwo = async (event) => {
        event.preventDefault();

        if (this.props.isAdmin()) {
            let keys = await privateVoting.methods.getHashes2().call();
            document.getElementById('keys-2').value = keys;
            navigator.clipboard.writeText(keys);
        }
    }

    render() {
        if (this.props.workflowStatus === "4") {
            return(
                <div className="container" id="get-hashes">
                    <h4>Get Keys</h4>
                    <form>
                        <div className="row flex-column flex-lg-row">
                            <div className="col-auto col-lg-2 text-center text-lg-end">
                                <label className="col-form-label">Keys 1</label>
                            </div>
                            <div className="col-auto col-lg-10">
                                <input type="text" className="form-control" id="keys-1"/>
                            </div>
                            <div className="col">
                                <button className="btn btn-outline-dark" type="submit" onClick={this.getKeysOne}>Get and Copy</button>
                            </div>
                        </div>
                        <div className="row flex-column flex-lg-row">
                            <div className="col-auto col-lg-2 text-center text-lg-end"><label className="col-form-label">Keys 2</label></div>
                            <div className="col-auto col-lg-10">
                                <input type="text" className="form-control" id="keys-2"/>
                            </div>
                            <div className="col">
                                <button className="btn btn-outline-dark" type="submit" onClick={this.getKeysTwo}>Get and Copy</button>
                            </div>
                        </div>
                    </form>
                    <hr/>
                </div>
            );
        }
        else return (<div/>);
    }
}

export default SecretHashesComponent;