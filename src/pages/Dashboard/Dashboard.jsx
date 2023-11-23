import { Link } from "react-router-dom";
import "./Dashboard.css";


export const Dashboard = () => {
  return (
  <>
  <div className="pictures">
    <figure className="dataDashboard">
      <Link to="/aves">
      <img src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1700501606/milano_zb9f0t.jpg" alt="dashboard image" className="avePhotoDashboard"/>
      </Link>
      <h3 className="titlePicture">Aves</h3>
    </figure>

    <figure className="dataDashboard">
      <Link to="/parques">
      <img src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1700501235/picos_haijzo.jpg" alt="dashboard image" className="parquePhotoDashboard"/>
      </Link>
      <h3 className="titlePicture">Parques Nacionales</h3>
    </figure>
    </div>
</>
  )
};
