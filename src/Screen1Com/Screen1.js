import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Screen1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <div style={{
            padding: '0.5rem',
            border: '1px solid #d3d3d3',
            backgroundColor: 'red',
            color:'white'
          }}>
          <b>  CATEGORIES</b>
          </div>
          <div style={{
            padding: '0.05rem',
            border: '1px solid #f8f9fa',
            backgroundColor: '#d3d3d3'
          }}>
           Pizza
          </div>
          <div style={{
            padding: '0.05rem',
            border: '1px solid #f8f9fa',
            backgroundColor: '#f8f9fa'
          }}>
            Burger
          </div>
          <div style={{
            padding: '0.05rem',
            border: '1px solid #f8f9fa',
            backgroundColor: '#f8f9fa'
          }}>
            Shawarma
          </div>
          <div style={{
            padding: '0.05rem',
            border: '1px solid #f8f9fa',
            backgroundColor: '#f8f9fa'
          }}>
            Zinger
          </div>
          <div style={{
            padding: '0.0.5rem',
            border: '1px solid #f8f9fa',
            backgroundColor: '#f8f9fa'
          }}>
            Pasta
          </div>
          <div style={{
            padding: '0.05rem',
            border: '1px solid #f8f9fa',
            backgroundColor: '#f8f9fa'
          }}>
            Chines
          </div>
          <div style={{
            padding: '0.05rem',
            border: '1px solid #f8f9fa',
            backgroundColor: '#f8f9fa'
          }}>
            Pizza
          </div> <div style={{
            padding: '0.05rem',
            border: '1px solid #f8f9fa',
            backgroundColor: '#f8f9fa'
          }}>
            Shawarma
          </div>






        </div>
        {/* ///////////////////////////////////////////////////////////// */}
        <div className="col-md-8">
  <div className="row" style={{backgroundColor: 'black', padding: '20px'}}>
    <div className="col-md-6" style={{color: 'white'}}>
      <h2>Spicy Food</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      <button className="btn btn-danger" style={{borderRadius: '10px'}}>Get Started</button>
    </div>
    <div className="col-md-6">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSp0sDlHzhIgBpHIaWP5XF65pai8EOrVUu-A&s"  
        className="img-fluid" 
        alt="Spicy Food" 
        style={{maxHeight: '300px', width: 'auto'}}
      />
    </div>
  </div>
</div>

        {/* ///////////////////////////////////////////////////////////// */}
        <div className="col-md-2">
          <div>
            <img src="https://media.istockphoto.com/id/1473559567/photo/fast-food-advertising-style-background.webp?b=1&s=612x612&w=0&k=20&c=PBfTTTbD7aZ0dKvFmgHUU-CJlymuQ8eAReRXEQbQehA="  className="img-fluid"  style={{height: '260px', width: 'auto'}}/>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen1;