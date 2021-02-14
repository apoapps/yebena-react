import SelectionCard from '../Components/SelectionCard.jsx';
import Navbar from '../Components/Navbar';

export default function HomePage (){

    return(
        <div className="container-fluid">
            <div className="row">
                
                <div className="title col-12">
                    <h1>
                        ¿Qué se te antoja?
                    </h1>
                </div>
                <SelectionCard
                    title='Sandwiches'
                    url='/sandwiches'
                    
                />
                <SelectionCard
                    title='Ensaladas'
                    url='/ensaladas'
                />
                <SelectionCard
                    title='Sopas'
                    url='/sopas'
                />
                <SelectionCard
                    title='Nieves'
                    url='/nieves'
                />
                <SelectionCard
                    title='Paletas'
                    url='/paletas'
                />
                <SelectionCard
                    title='Combos'
                    url='/combos'
                />
            </div>
        </div>
    );
}