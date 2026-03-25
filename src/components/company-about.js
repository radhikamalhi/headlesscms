import company from '../assets/images/company.jpg'
function Companyabout() {
    return (
        <>
            <section className='company-about section-pd'>
                <div class='container'>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className='about-left'>
                                <h2 className='heading'>Collaborate and Organize with Ease</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='about-right'>
                                <img src={company} alt="company" className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Companyabout;