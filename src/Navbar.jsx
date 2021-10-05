import React from 'react'

export default function Navbar() {
    return (
        <div>
    <div className="nav-container">
    <nav className="navbar navbar-expand-lg navbar-light container">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">HOME <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">ABOUT</a>
      <a className="nav-item nav-link" href="#">SERVICE</a>
      <a className="nav-item nav-link " href="#">TEAM</a>
      <a className="nav-item nav-link" href="#">APPOITNMENT</a>
      <a className="nav-item nav-link" href="#">CONTACT</a>
    </div>
  </div>
</nav>
    </div>
        </div>
    )
}
