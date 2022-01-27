import logo from './logo.svg';
import './App.css';
import 'rc-slider/assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sliders from './components/Sliders';
import Number from './components/Number';

function App() {
  return (
    <div className="App">
        <div className="row m-5">
            <div className="col-6">
                <Sliders />

                <div className="row mt-4">
                    <div className="col-4">
                        <Number id="number_r" />
                    </div>
                    <div className="col-4">
                        <Number id="number_g" />
                    </div>
                    <div className="col-4">
                        <Number id="number_b" />
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div id="rgb_box"></div>
            </div>
        </div>
    </div>
  );
}

export default App;
