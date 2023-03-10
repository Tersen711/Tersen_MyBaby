import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://media.voguebusiness.com/photos/60140c4680e198421a9ec8d1/3:4/w_1998,h_2664,c_limit/sneakers-sustainability-voguebus-janine-abrenilla-jan-21-promo.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://cdn.cliqueinc.com/posts/273895/the-coolest-sneakers-to-wear-now-273895-1588719453644-main.700x0c.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/WYK33VTTHVIVXDP6SFEVPFXL3E.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://www.apetogentleman.com/wp-content/uploads/2020/01/sneakertrends2021.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://i.ebayimg.com/images/g/6gUAAOSwyz5e-jw2/s-l1600.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/b32fff5c-5c42-47c1-b58a-397dca6d3fd8/men-s-shoes-clothing-accessories.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Socks
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
