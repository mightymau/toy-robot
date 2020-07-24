import React from 'react';

function Commands({commands, onChange, onSubmit}) {
    return (
      <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="commandsTextaArea">Commands</label>
        <textarea className="form-control" id="commandsTextArea" rows="10" value={commands} onChange={onChange}></textarea>
      </div>  
      <button id="run-command" type="submit" className="btn btn-primary">Run Commands</button>
      </form>
    )
}

export default Commands;