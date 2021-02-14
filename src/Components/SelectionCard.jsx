import {Link} from 'react-router-dom';

export default function SelectionCard (props){

    return(
        <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card">
            {props.img != null? <img src={props.img}  className="card-img-top" alt="menu item"></img> : ''}
            <div className="card-body">
                <h5 className="card-title"> {props.title}</h5>
                <p className="card-text">{props.text}</p>
                <Link to={props.url ?? '/'} className="btn btn-primary">Ir a {props.title}</Link>
            </div>
        </div>
        </div>
    );
}