import { React, useEffect } from "react";
import Button from "../../component/base/Button";
import Navbar from "../../component/module/navbar";
import styles from "./home.module.css";
import Card from "../../component/base/card";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../config/redux/action/productAction";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product, isGeting } = useSelector((state) => state.product);
    function moveToDetailProduct(id) {
    navigate(`/Product/${id}`);
  }

  useEffect(() => {
    // fetchData();
    dispatch(getData());
  }, []);
  console.log(isGeting);
  return (
    <div>
      {/* <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" home={true} onClickButton={handleSearch} onChange={(e) => setSearch(e.target.value)}></Navbar> */}
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top"></Navbar>
      <main>
        {/* <p>{searchParams}</p> */}
        <section className={styles.caraousell}>
          <div className="container">
            <div className="row" justify-content-center mt-4>
              <div className={"col-12 d-flex " + styles.caraousell}>
                <div>
                  <img className={"img-fluid " + styles.j1} src="./images/home/jumbotron/1.png" alt="" />
                </div>
                <div>
                  <img className={"img-fluid " + styles.j2} src="./images/home/jumbotron/2.png" alt="" />
                </div>
                <div>
                  <img className={"img-fluid " + styles.j3} src="./images/home/jumbotron/3ty.png" alt="" />
                </div>
                <div>
                  <img className={"img-fluid " + styles.j4} src="./images/home/jumbotron/4.png" alt="" />
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
            <div className="row position-relative row-cols-2 row-cols-md-3 row-cols-lg-5">
              <div className="col">
                <div className="card align-items-center bg-danger" style={{ height: "180px" }}>
                  <div className="card-body d-flex flex-column">
                    <img className="img-fluid" src="./images/home/category/t-shirt.png" alt="" />
                    <p className={styles.card_text}>T-shirt</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-primary align-items-center" style={{ height: "180px" }}>
                  <div className="card-body d-flex flex-column">
                    <img className="img-fluid" src="./images/home/category/shorts.png" alt="" />
                    <p className={styles.card_text}>Shorts</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card align-items-center" style={{ height: "180px", backgroundColor: "#f67b02" }}>
                  <div className="card-body d-flex flex-column">
                    <img className="img-fluid" src="./images/home/category/jackets.png" alt="" />
                    <p className={styles.card_text}>Jacket</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card align-items-center" style={{ height: "180px", backgroundColor: "#e31f51" }}>
                  <div className="card-body d-flex flex-column">
                    <img className="img-fluid" src="./images/home/category/pants.png" alt="" />
                    <p className={styles.card_text}>Pants</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card align-items-center" style={{ height: "180px", backgroundColor: "#57cd9e" }}>
                  <div className="card-body d-flex flex-column">
                    <img className="img-fluid" src="./images/home/category/shoes.png" alt="" />
                    <p className={styles.card_text}>Shoes</p>
                  </div>
                </div>
              </div>
              <Button className={styles.btnCategory} width="52px" height="52px" borderRadius="50%" backgroundColor="white">
                <img src="./images/home/category/rigth.png" alt="" />
              </Button>
            </div>
          </div>
        </section>
        <section id="new-product">
          <div className="container mt-5">
            <div className="row text-start mb-3">
              <div className="col">
                <p className="fw-bolder fs-4">Produk</p>
                <p>What are you looking for</p>
              </div>
            </div>
            <div className="row row row-cols-2 row-cols-md-3 row-cols-lg-5 row-cols-xg-6">
              {/* { isGeting ? <p>{product.name}</p> : <p>produk kosong</p>} */}
              {product.map((item) => (
                <div className="col mb-3">
                  <Card className="card" height="278px" key={item.id}>
                    <div className="text-center">
                      <img style={{ height: "136px" }} src={item.photo} class="img-fluid" alt="produk" />
                    </div>
                    <div className="card-body ">
                      <p id={styles["name"]} onClick={()=>moveToDetailProduct(item.id)}>{item.name}</p>
                      <p id={styles["price"]}>{item.price}</p>
                      <p id={styles["seller"]}>{item.brand}</p>
                      <div class="rating">
                        <img src="./images/home/Star/star.png" alt="" />
                        <img src="./images/home/Star/star.png" alt="" />
                        <img src="./images/home/Star/star.png" alt="" />
                        <img src="./images/home/Star/star.png" alt="" />
                        <img src="./images/home/Star/star.png" alt="" />
                      </div>
                    </div>
                  </Card>
                  {/* <div className="editDelete">
                    <Button onClick={() => navigate(`/Edit/${item.id}`)}>Edit</Button>
                    <Button onClick={() => deleteProduct(item.id)}>Delete</Button>
                  </div> */}
                  <Button onClick={() => navigate(`/profile/storeprofile/myproduct`)}>All Product</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
