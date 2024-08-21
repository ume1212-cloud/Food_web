
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const RatingReview = ({ rating, setRating }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"><br/>
          <div style={{
            padding: '0.5rem',
            border: '1px solid #d3d3d3',
            backgroundColor: 'red',
            color: 'white',
          }}>
            <b>CATEGORIES</b>
          </div>
          <div style={{
            
            border: '2px solid red',
            backgroundColor: 'white',
          }}>
            <img
              src='data:image/jpeg;base64,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'
              alt='Pizza kabab'
              style={{ height: '150px', width: '150px',borderRadius:'100px' }}
            />

<div style={{
            padding: '0.5rem',
            border: '1px solid #d3d3d3',
            backgroundColor: 'white',
            color: 'black',
          }}>
            <div style={{backgroundColor:'white'}}>
           <img src='data:image/jpeg;base64,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' style={{height:'20px'}}/> <img src='https://img.icons8.com/?size=24&id=112741&format=png'style={{height:'20px'}}/> <img src='data:image/png;base64,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'style={{height:'20px'}}/></div> 
            <p style={{ textAlign: 'center' ,fontSize:'15px'}}>Pizza kabab</p>
            <div style={{ textAlign: 'center',fontSize:'10px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    cursor: 'pointer',
                    color: rating >= star ? 'gold' : 'gray',
                    fontSize: '35px',
                    display: 'inline-block',
                    fontSize:'15px'
                  }}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>$1999<span style={{fontSize:'7px'}}>$33.33.00</span></p>
            
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>269 | 09 | 26 | 49</p>
        
          </div>
            </div>
  {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
         <br/>
         <div style={{
            padding: '0.5rem',
            border: '1px solid #d3d3d3',
            backgroundColor: 'red',
            color:'white'
          }}>
          <b>  Services</b>
          </div>
        
          <div style={{
            padding: '0.05rem',
            border: '1px solid #f8f9fa',
            backgroundColor: '#f8f9fa',color:'GrayText'
          }}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJ9sEsVHhTKpUEb6ZvZQuWJPdKw80oDaH2w&s' style={{height:'40px',borderRadius:'50%'}}/>
            User Profile
            
          </div>
          
            
          <div style={{
            padding: '0.05rem',
            border: '1px solid #f8f9fa',
            backgroundColor: 'white'
            ,color:'GrayText'
          }}>
                <img src='data:image/png;base64,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' style={{height:'40px',borderRadius:'50%'}}/>
            free delivery
          </div>
         
         
          <div style={{
            padding: '0.05rem',
            border: '1px solid #f8f9fa',
            backgroundColor: 'white',color:'GrayText'
          }}>
              <img src='data:image/png;base64,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'style={{borderRadius:'50%',height:'40px'}}/>
            cash return
          </div> <div style={{
            padding: '0.05rem',
            border: '1px solid #f8f9fa',
            backgroundColor: 'white',color:'GrayText'
          }}>
            <img src='data:image/png;base64,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' style={{height:'40px',borderRadius:'50%'}}/>
           card payment 
          </div>
           {/* /////////////////////////////////////////////////////////////////////////// */}
           <br/>
           <div style={{
            padding: '0.5rem',
            border: '1px solid #d3d3d3',
            backgroundColor: 'red',
            color:'white'
          }}>
          <b>  Resturant</b>
          </div>
        
          <div style={{
            padding: '0.05rem',
            border: '1px solid #f8f9fa',
            backgroundColor: '#f8f9fa'
          }}>  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2vYqFl25QZ9t1Oi12KMzCIfgP3w-ASIs11lrJcwxPrZ2kf8NPRVULSt-tcNF_jYaYsE&usqp=CAU' style={{height:'50px',borderRadius:'50%'}}/>
          <p style={{textAlign:'center',color:'GrayText',fontSize:'10px'}}> It is developed by MahardhiThemes of the author on themeforest marketplace to download now & live preview click on image. </p><br/>
         <b><p style={{textAlign:'center',color:'GrayText',fontSize:'15px'}}><span><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsnvkcvGO_36VSBbcMdH1EQkVd6IPZbLlCQ&s' style={{height:'40px',borderRadius:'50%',textAlign:'left'}}/>  </span>Ume Habiba </p></b>
  

            
          </div>
         {/* ///////////////////////////////////////////////////////////////////////////// */}

         <br/>
         <div style={{

  color: 'white',
  position: 'relative'
}}>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfI7QhQwQ5QQPDVHvoAJ7QjjdyOzpt1n_rUA&s' 
  style={{ height: '170px' }} />
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color:'red'
  }}>
   <h4> Get up to 70% off</h4> 
  </div>
</div>
         

         
        </div>
        {/* /////////////////////////////////////////////////////////////////////////// */}
        
        
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="col-md-10" >
          <br/>

          <Container fluid>
  <Row className="d-flex justify-content-center align-items-center" style={{ flexWrap: 'nowrap', backgroundColor: 'white' }}>
    <div className="d-flex flex-nowrap" style={{ gap: '10px' }}>
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/1494273340/photo/pizza-with-pepperoni-arugula-ketchup-tomatoes-and-cheese-in-a-plate-on-a-white-background.webp?b=1&s=612x612&w=0&k=20&c=kF0TcNtpkCEZQHrQqz9u1r6_HipIM7OUcWc0Vbmw8Rc=" alt="Pizza" className="img-fluid" style={{ height: '100px' }} />
        <p className="fw-bold">PIZZA</p>
      </div>
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/1353260814/photo/meat-doner.webp?b=1&s=612x612&w=0&k=20&c=wJi4mpvmrTX7_Cd78A3iT-SC9dixuJL3xMoSamXzzXA=" alt="Shawarma" className="img-fluid" style={{ height: '100px' }} />
        <p className="fw-bold">Shawarma</p>
      </div>
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/1472849554/photo/birthday-cake-with-a-blue-ganache-drip-and-colorful-sprinkles-isolated-on-a-white-background.webp?b=1&s=612x612&w=0&k=20&c=pnsIfLxbK9VAuD6uMlaYJaWFwEjbfN7ZxhjEyn9bNK8=" alt="Cake" className="img-fluid" style={{ height: '100px' }} />
        <p className="fw-bold">Cake</p>
      </div>
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.webp?b=1&s=612x612&w=0&k=20&c=Fg5ZhECbjUQ4PkSkTsEwwX7BbCSrCU3IUgoEEwAIFjo=" alt="Burger" className="img-fluid" style={{ height: '100px' }} />
        <p className="fw-bold">Burger</p>
      </div>
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/2148995852/photo/broccoli-cream-soup-with-croutons-isolated-on-white-background.webp?b=1&s=612x612&w=0&k=20&c=L_WToecO57aalw6yhSZxHscH8CBbJe1u5OZHE-2lzIg=" alt="Pasta" className="img-fluid" style={{ height: '100px' }} />
        <p className="fw-bold">Pasta</p>
      </div>
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.webp?b=1&s=612x612&w=0&k=20&c=Fg5ZhECbjUQ4PkSkTsEwwX7BbCSrCU3IUgoEEwAIFjo=" alt="Soup" className="img-fluid" style={{ height: '100px' }} />
        <p className="fw-bold">Soup</p>
      </div>
    </div>
  </Row>
</Container>
 {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
      
<br/>
<div style={{textAlign:'left',backgroundColor:'white'}}><span style={{color:'red'}}>Feature</span> Best-quality<span style={{marginLeft:'10px'}}>Resturant</span></div>

<Container fluid>
  <Row className="d-flex justify-content-center align-items-center" style={{ flexWrap: 'nowrap', backgroundColor: 'white', overflowX: 'auto', paddingBottom: '10px' }}>
  
  <br/> <div className="d-flex flex-nowrap" style={{ gap: '10px', whiteSpace: 'nowrap' ,backgroundColor:"white"}}>
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/1494273340/photo/pizza-with-pepperoni-arugula-ketchup-tomatoes-and-cheese-in-a-plate-on-a-white-background.webp?b=1&s=612x612&w=0&k=20&c=kF0TcNtpkCEZQHrQqz9u1r6_HipIM7OUcWc0Vbmw8Rc=" alt="Pizza" className="img-fluid" style={{ height: '100px' }} />
        <div style={{backgroundColor:'white'}}>
           <img src='data:image/jpeg;base64,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' style={{height:'10px',backgroundColor:'orangered'}}/> <img src='https://img.icons8.com/?size=24&id=112741&format=png'style={{height:'10px'}}/> <img src='data:image/png;base64,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'style={{height:'10px'}}/></div> 
         
        <p className="fw-bold">PIZZA</p>
        <button className="btn btn-danger" style={{backgroundColor:'orangered'}}>add to cart</button>
      </div>
     
      
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/1472849554/photo/birthday-cake-with-a-blue-ganache-drip-and-colorful-sprinkles-isolated-on-a-white-background.webp?b=1&s=612x612&w=0&k=20&c=pnsIfLxbK9VAuD6uMlaYJaWFwEjbfN7ZxhjEyn9bNK8=" alt="Cake" className="img-fluid" style={{ height: '100px',backgroundColor:'black' }} />
        <p className="fw-bold">Cake</p>
        <div style={{ textAlign: 'center',fontSize:'10px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    cursor: 'pointer',
                    color: rating >= star ? 'gold' : 'gray',
                    fontSize: '35px',
                    display: 'inline-block',
                    fontSize:'15px'
                  }}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>$1999<span style={{fontSize:'7px'}}>$33.33.00</span></p>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>269 | 09 | 26 | 49</p>
      </div>
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.webp?b=1&s=612x612&w=0&k=20&c=Fg5ZhECbjUQ4PkSkTsEwwX7BbCSrCU3IUgoEEwAIFjo=" alt="Burger" className="img-fluid" style={{ height: '100px' }} />
        <p className="fw-bold">Burger</p>
        <div style={{ textAlign: 'center',fontSize:'10px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    cursor: 'pointer',
                    color: rating >= star ? 'gold' : 'gray',
                    fontSize: '35px',
                    display: 'inline-block',
                    fontSize:'15px'
                  }}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>$1999<span style={{fontSize:'7px'}}>$33.33.00</span></p>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>269 | 09 | 26 | 49</p>
      </div>
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/2148995852/photo/broccoli-cream-soup-with-croutons-isolated-on-white-background.webp?b=1&s=612x612&w=0&k=20&c=L_WToecO57aalw6yhSZxHscH8CBbJe1u5OZHE-2lzIg=" alt="Pasta" className="img-fluid" style={{ height: '100px' }} />
        <p className="fw-bold">Pasta</p>
        <div style={{ textAlign: 'center',fontSize:'10px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    cursor: 'pointer',
                    color: rating >= star ? 'gold' : 'gray',
                    fontSize: '35px',
                    display: 'inline-block',
                    fontSize:'15px'
                  }}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>$1999<span style={{fontSize:'7px'}}>$33.33.00</span></p>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>269 | 09 | 26 | 49</p>
      </div>
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.webp?b=1&s=612x612&w=0&k=20&c=Fg5ZhECbjUQ4PkSkTsEwwX7BbCSrCU3IUgoEEwAIFjo=" alt="Soup" className="img-fluid" style={{ height: '100px' }} />
        <p className="fw-bold">Soup</p>
        <div style={{ textAlign: 'center',fontSize:'10px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    cursor: 'pointer',
                    color: rating >= star ? 'gold' : 'gray',
                    fontSize: '35px',
                    display: 'inline-block',
                    fontSize:'15px'
                  }}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>$1999<span style={{fontSize:'7px'}}>$33.33.00</span></p>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>269 | 09 | 26 | 49</p>
      </div>
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/1472849554/photo/birthday-cake-with-a-blue-ganache-drip-and-colorful-sprinkles-isolated-on-a-white-background.webp?b=1&s=612x612&w=0&k=20&c=pnsIfLxbK9VAuD6uMlaYJaWFwEjbfN7ZxhjEyn9bNK8=" alt="Cake" className="img-fluid" style={{ height: '100px' }} />
        <p className="fw-bold">Cake</p>
        <div style={{ textAlign: 'center',fontSize:'10px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    cursor: 'pointer',
                    color: rating >= star ? 'gold' : 'gray',
                    fontSize: '35px',
                    display: 'inline-block',
                    fontSize:'15px'
                  }}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>$1999<span style={{fontSize:'7px'}}>$33.33.00</span></p>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>269 | 09 | 26 | 49</p>
      </div>
      <div className="text-center">
        <img src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.webp?b=1&s=612x612&w=0&k=20&c=Fg5ZhECbjUQ4PkSkTsEwwX7BbCSrCU3IUgoEEwAIFjo=" alt="Burger" className="img-fluid" style={{ height: '100px' }} />
        <p className="fw-bold">Burger</p>
        <div style={{ textAlign: 'center',fontSize:'10px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    cursor: 'pointer',
                    color: rating >= star ? 'gold' : 'gray',
                    fontSize: '35px',
                    display: 'inline-block',
                    fontSize:'15px'
                  }}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>$1999<span style={{fontSize:'7px'}}>$33.33.00</span></p>
            <p style={{ textAlign: 'center' ,fontSize:'10px'}}>269 | 09 | 26 | 49</p>
      </div>
     
    </div>
  </Row>
</Container>



      
        </div>
        
      
        </div>
    </div>
  );
};

const Screen2 = () => {
  const [rating, setRating] = useState(0);

  return <RatingReview rating={rating} setRating={setRating} />;
};

export default Screen2;
