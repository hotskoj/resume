import React from "react";

export default function Project(props){
  return (
    <div className="d-flex justify-content-center">
        <div className="card shadow-sm">
            <img src={props.source} alt="Profile Pic"/>
            <div className="card-body">
                <p className="card-text">{props.content}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <a target="_blank" href={props.url}>GitHub</a>
                </div>
            </div>
        </div>
    </div>
  )
}