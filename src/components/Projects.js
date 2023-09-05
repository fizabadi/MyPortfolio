import Data from './Data.json'
import './Projects.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Home(props){
	const navigate=useNavigate();
	const addToCartBtn=(index)=>{
		let product = Data[index];
	}
	return(
		<>
    <Navbar />
	  <div className="Projects">
	  <div className='container mx-auto'>
			<div className='row'>
				{Data.map((d,index)=>{
					return(
						<div className='col-sm-4 mt-3'>
							<img src={d.url}
							alt="LaptopPhoto" style={{width:"400px"}}/>
							<br/> <b>Title:</b> {d.title}<br/><b>Description:</b> {d.description}<br/><b>Technologies:</b> {d.technologies}<br/><b>Role: </b>{d.role}<br/>
							{/* <button className='button' onClick={()=>addToCartBtn(index)}>Add to Cart</button> <button classname="link" alt=github value=git name=git photo=12345mane pyema nhti kam nbr kiwb bsove nfoe he,*/}
							<Link className="link" to="https://github.com/fizabadi/fizabadi"><button>Github Link</button></Link>
							</div>
                       )
				})}
			</div>
		</div>
		</div>
		</>
	)
}
