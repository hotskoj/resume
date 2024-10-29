import React from "react";

export default function Project(props){
  return (
    <div className="d-flex justify-content-center">
        <div className="card shadow-sm">
            <img src={props.source} alt="Snapshot of project"/>
            <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-text">{props.content} {props.url.length > 0 && (<a target="_blank" href={props.url}>View</a>)}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <a target="_blank" className="btn btn-sm btn-outline-secondary" href={props.git} role="button">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}