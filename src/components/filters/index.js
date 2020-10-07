import React from  'react';
import  './filter.css';

export default class Filters extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        let years =['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020',]
        return <div className='filterSections'>
            <div className='filterLabel'>Filters</div>
            
            {/* Year */}
            <section className='filter'>
                <label>Launch Year</label>
                <div className='options'>
                    {
                        years.map ( (year,i) => <div onClick={()=>this.props.setYear(year)} key={`year${i}`}>
                            <span className={ this.props.config.year  === year ? 'active' : ''}>{ year }</span>
                        </div>)
                    }
                </div>
            </section>

            {/* Launch */}
            <section className='filter'>
                <label>Successfull Launch</label>
                <div className='options'>
                    <div onClick={()=>this.props.setLaunch('true')}>
                    {/* eslint-disable-next-line */}
                        <span className={ this.props.config.launch  == 'true' ? 'active' : ''} >True </span>
                    </div>
                    <div onClick={()=>this.props.setLaunch('false')}>
                    {/* eslint-disable-next-line */}
                        <span className={ this.props.config.launch  == 'false' ? 'active' : ''} >False</span>
                    </div>
                </div>
            </section>

            {/* Landing */}
            <section className='filter'>
                <label>Successfull Landing</label>
                <div className='options'>
                    <div onClick={()=>this.props.setLand('true')}>
                    {/* eslint-disable-next-line */}
                        <span className={ this.props.config.land  == 'true' ? 'active' : ''} >True </span>
                    </div>
                    <div onClick={()=>this.props.setLand('false')}>
                    {/*  eslint-disable-next-line */}
                        <span className={ this.props.config.land  == 'false' ? 'active' : ''} >False</span>
                    </div>
                </div>
            </section>
        </div>
    }
}