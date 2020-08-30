import React from 'react';
import '../styles/treatments.css';

class Treatments extends React.Component {
  state= {
    treatments: [
      { id:"1", name: "Haircut", price: "10$"},
      { id:"2", name: "Coloring", price: "10$"},
      { id:"3", name: "Keratin", price: "10$"},
      { id:"4", name: "Scalp treatment", price: "10$"},
      { id:"5", name: "Relax treatment", price: "10$"},
    ]
  }
  
  constructor(props) {
    super(props)
    this.hairSelected = this.hairSelected.bind(this);
    this.nailsSelected = this.nailsSelected.bind(this);
    this.skinSelected = this.skinSelected.bind(this);
  }
  

  hairSelected() {
    this.setState({
      treatments: [
        { id:"1", name: "Haircut", price: "10$"},
        { id:"2", name: "Coloring", price: "10$"},
        { id:"3", name: "Keratin", price: "10$"},
        { id:"4", name: "Scalp treatment", price: "10$"},
        { id:"5", name: "Relax treatment", price: "10$"},
      ]
    })
  }

  nailsSelected() {
    this.setState({
      treatments: [
        { id:"6", name: "Nail art", price: "10$"},
        { id:"7", name: "Nail extentions", price: "10$"},
        { id:"8", name: "Nail repair", price: "10$"},
        { id:"9", name: "Gel nails", price: "10$"},
        { id:"10", name: "Manicure treatments", price: "10$"},
      ]
    })
    
    console.log(this.state.treatments);
  }

  skinSelected() {
    this.setState({
      treatments: [
        { id:"11", name: "Classic Facial", price: "10$"},
        { id:"12", name: "Green Science Skin Renewing Facial", price: "10$"},
        { id:"13", name: "Enbrightenment Facial", price: "10$"},
        { id:"14", name: "Anti-Aging Facial", price: "10$"},
        { id:"15", name: "Glycolic Peel Facial", price: "10$"},
      ]
    })
    
    console.log(this.state.treatments);
  }

  render() {
    
    return (
      <div className="treatments" id="treatments">
        <div className="title">
          <div className="line1"></div>
          <h1>Treatments</h1>
          <div className="line2"></div>
        </div>
  
        <div className='types'>
          <div className="side-nav">
            <button onClick={this.hairSelected}>Hair</button>
            <button onClick={this.nailsSelected}>Nails</button>
            <button onClick={this.skinSelected}>Skin</button>
          </div>
          <div className="descriptions">
    {this.state.treatments.map((elem, i) => <p key={i}>{ elem.name } <strong>{elem.price}</strong></p>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Treatments;