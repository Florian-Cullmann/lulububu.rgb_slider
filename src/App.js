import logo from './logo.svg';
import './App.css';
import 'rc-slider/assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sliders from './components/Sliders';

function App() {
  return (
    <div className="App">
        <div className="row m-5">
            <div className="col-6">
                <Sliders />

                <div className="row mt-4">
                    <div className="col-4">
                        <input type="text" id="number_r" className="form-control" value="0" readOnly/>
                    </div>
                    <div className="col-4">
                        <input type="text" id="number_g" className="form-control" value="0" readOnly/>
                    </div>
                    <div className="col-4">
                        <input type="text" id="number_b" className="form-control" value="0" readOnly/>
                    </div>
                </div>
            </div>

            <div className="col-6">

            </div>
        </div>
    </div>
  );
}

export default App;
