import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./components/card";
import ButtonRed from './components/button-red'
import Navigation from "./components/navigation";

ReactDOM.render(
    <div>

        <Navigation />

        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col-md-4'}><Card title={'Saint Anger'} text={'Saint Anger Album'} image={'./image_1.jpg'} items={['item1', 'item2', 'item3']} /></div>
                <div className={'col-md-4'}><Card title={'Black Album'} text={'Black Album'} image={'./image_2.jpg'}  items={['item1', 'item2', 'item3']}/></div>
                <div className={'col-md-4'}><Card title={'Kill em All'} text={'Kill em All Album'} image={'./image_3.jpg'} items={['item1', 'item2', 'item3']} /></div>
            </div>

            <div className={'row'}>
                <div className={"col-md-12"}>
                    <ButtonRed />
                </div>
            </div>

        </div>

    </div>
,
document.getElementById('app'));