import React, { Component } from 'react';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/styles.css';
import WorkflowButtonsComponent from "./WorkflowButtonsComponent";

class HeaderComponent extends Component {

    render() {
        return(
            <div className="container" id="header-container">

                <div className="row" id="header-row">
                    <div className="col">
                        <h1 className="text-center">Admin Panel</h1>

                        <div className="row row-cols-1 row-cols-lg-2 d-flex">
                            <div className="col">
                                <div className="input-group input-group-sm align-self-center"><span
                                    className="input-group-text">Admin:</span>
                                    <input type="text" className="form-control" value={this.props.administrator} readOnly/></div>
                            </div>
                            <div className="col">
                                <div className="input-group input-group-sm"><span className="input-group-text">Connected:</span><input
                                    type="text" className="form-control" value={this.props.currentUser} readOnly/></div>
                            </div>
                        </div>

                        <p className="lead text-center" id="workflow-status-msg">
                            Current Workflow Status: <strong>{this.props.workflowStatusDescription}</strong>
                        </p>

                    </div>
                </div>
                <hr />

                <div className="row justify-content-between align-items-center" id="workflow-status-row" hidden>
                    <div className="col">
                        <p className="text-center">Registering Elections</p>
                    </div>
                    <div className="col">
                        <p className="text-center">Registering Voters</p>
                    </div>
                    <div className="col">
                        <p className="text-center">Burn and Retrieve</p>
                    </div>
                    <div className="col">
                        <p className="text-center">Registering Candidates</p>
                    </div>
                    <div className="col">
                        <p className="text-center">Generating Verifier</p>
                    </div>
                    <div className="col">
                        <p className="text-center">Verification Session</p>
                    </div>
                    <div className="col">
                        <p className="text-center">Voting Session</p>
                    </div>
                    <div className="col">
                        <p className="text-center">Votes Tallied</p>
                    </div>
                </div>

                <WorkflowButtonsComponent
                    isAdmin={this.props.isAdmin}
                    currentUser={this.props.currentUser}
                    workflowStatus={this.props.workflowStatus}
                />

                <hr />
            </div>
        );
    }
}

export default HeaderComponent;