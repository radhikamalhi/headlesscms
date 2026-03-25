import Button from "./button";
import Whitebtn from "./whitebtn";
import api from '../api/api';
function HomeBanner(){
 return(
<>
<div className='banner-home section-pd'>
    <div className='container'>
        <div className='row'>
            <div className="col-lg-9">
                <div className='banner-left'>
                    <h1>Best Online App for Organizing Work</h1>
                    <p className="text-white">Boost your productivity with our Online App – manage tasks, projects, and teams all in one place.</p>
                    <Whitebtn text='Hire Us'/>
                </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
    </div>
</div>
</>

 )   
}
export default HomeBanner;