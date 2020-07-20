import React, {Component} from 'react'


export class Test1 extends Component{
    render(){
        return (
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-9">
                        <h4>
                            Mission: hi
                        </h4>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-secondary">Launch Details</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test1