import { React, useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../component/base/Button";
import Navbar from "../../component/module/navbar";
import styles from "./home.module.css";
import Card from "../../component/base/card";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  let [searchParams, setSearchParams] = useSearchParams({});
  
  const handleSearch = () => {
    setSearchParams({search: search})
  }

  function moveToDetailProduct(id) {
    navigate(`/Product/${id}`)
  }

  
  async function fetchData() {
    try {
      const result = await axios({
        method: "GET",
        baseURL: "http://localhost:4000/v1",
        url: `products?${searchParams}` /*"/products?page=1&limit=10"*/,
      });
      // console.log(result.data.data[5].photo);
      setProducts(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteProduct = (id) =>{
    axios.delete(`http://localhost:4000/v1/products/${id}`)
    .then(()=>{
      alert('delete success')
      fetchData()
      navigate('/Home')
    })
  }

  useEffect(() => {
    fetchData();
  }, [searchParams]);
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" home={true} onClickButton={handleSearch} onChange={(e)=>setSearch(e.target.value)}></Navbar>
      <main>
        <p>{searchParams}</p>
        <section className={styles.caraousell}>
          <div className="container">
            <div className="row" justify-content-center mt-4>
              <div className="col-12 d-flex">
                <div>
                  <img className="img-fluid" src="./images/home/jumbotron/1.png" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="./images/home/jumbotron/2.png" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="./images/home/jumbotron/3ty.png" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="./images/home/jumbotron/4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="category">
          <div className="container">
            <div className="row">
              <div className="col">
                <h4 className="text-dark">Category</h4>
                <p>What are you currently looking for</p>
              </div>
            </div>
            <div className="row row-cols-5">
              <div className="col">
                <div className="card align-items-center bg-danger" style={{ height: "180px" }}>
                  <div className="card-body d-flex flex-column">
                    <img src="./images/home/category/t-shirt.png" alt="" />
                    <p className="card-text">T-shirt</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-primary align-items-center" style={{ height: "180px" }}>
                  <div className="card-body d-flex flex-column">
                    <img src="./images/home/category/shorts.png" alt="" />
                    <p className="card-text">Shorts</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card align-items-center" style={{ height: "180px", backgroundColor: "#f67b02" }}>
                  <div className="card-body d-flex flex-column">
                    <img src="./images/home/category/jackets.png" alt="" />
                    <p className="card-text">Jacket</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card align-items-center" style={{ height: "180px", backgroundColor: "#e31f51" }}>
                  <div className="card-body d-flex flex-column">
                    <img className="img-fluid" src="./images/home/category/pants.png" alt="" />
                    <p className="card-text">Pants</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card align-items-center" style={{ height: "180px", backgroundColor: "#57cd9e" }}>
                  <div className="card-body d-flex flex-column">
                    <img className="img-fluid" src="./images/home/category/shoes.png" alt="" />
                    <p className="card-text">Shoes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="new-product">
          <div className="container">
            <div className="row text-start mb-3">
              <div className="col">
                <h4>Produk</h4>
                <p>What are you looking for</p>
              </div>
            </div>
            <div className="row row row-cols-2 row-cols-md-3 row-cols-lg-5 row-cols-xg-6">
              {products.map((item) => (
                <div className="col mb-3" >
                  <Card className="card" key={item.id}>
                    <img src="" class="img-fluid" alt="produk" />
                    <div class="card-body ">
                      <p class="card-text" id={item.id} onClick={()=>moveToDetailProduct(item.id)}>
                        {item.name}
                      </p>
                      <p id="price">{item.price}</p>
                      <p id="seller">Zalora Cloth</p>
                      <div class="rating">
                        <img src="assets/image/Star/Star.png" alt="" />
                        <img src="assets/image/Star/Star.png" alt="" />
                        <img src="assets/image/Star/Star.png" alt="" />
                        <img src="assets/image/Star/Star.png" alt="" />
                        <img src="assets/image/Star/Star.png" alt="" />
                      </div>
                    </div>
                  </Card>
                  <div className="editDelete">
                    <Button onClick={()=>navigate(`/Edit/${item.id}`)}>Edit</Button>
                    <Button onClick={()=>deleteProduct(item.id)}>Delete</Button>
                  </div>
                </div>
              ))}
              {/* {products ? (
                products.map((item) => (
                  <div className="col mb-3">
                    <Card className="card" key={item.id}>
                      <img src="assets/image/newproduk/fp.png" class="img-fluid" alt="..." />
                      <div class="card-body ">
                        <p class="card-text" id={item.id}>
                          {item.name}
                        </p>
                        <p id="price">{item.price}</p>
                        <p id="seller">Zalora Cloth</p>
                        <div class="rating">
                          <img src="assets/image/Star/Star.png" alt="" />
                          <img src="assets/image/Star/Star.png" alt="" />
                          <img src="assets/image/Star/Star.png" alt="" />
                          <img src="assets/image/Star/Star.png" alt="" />
                          <img src="assets/image/Star/Star.png" alt="" />
                        </div>
                      </div>
                    </Card>
                  </div>
                ))
              ) : (
                <p>Produk kosong</p>
              )} */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
