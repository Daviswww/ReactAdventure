const Header = () => {
    return (
        <header>
            <div className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                <div className="row">
                    <div className="col-sm-4 offset-md-1 py-4">
                    <h4 className="text-white">Contact</h4>
                    <ul className="list-unstyled">
                        <li><a href="/" className="text-white">Follow on Twitter</a></li>
                        <li><a href="/" className="text-white">Like on Facebook</a></li>
                        <li><a href="/" className="text-white">Email me</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <strong>React</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
            </div>
        </header>
    )
}

// Header.defaultProps = {
//     titles : 'HHHH',
// }

// Header.propTypes = {
//     id: PropTypes.string,
// }

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
