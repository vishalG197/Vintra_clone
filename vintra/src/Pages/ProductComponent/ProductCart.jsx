import React from "react";
import { Box} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const ProductCart = (props) => {
let navigate=useNavigate();
  return (
    <Box className="col-md-3 my-1"  onClick={()=>navigate(`/products/${props.id}`)}>
      <div
        className="card border-0 shadow-sm p-3 mb-5 bg-white rounded px-0 py-0"
        style={{ width: "17.5rem" }}
      >
       
          <img
            src={props.img}
            className="card-img-top"
            alt={props.product}
            style={{ width: "245", height: "326" }}
          />
          <div className="card-body text-wrap" style={{ height: "130px" }}>
            <h5 className="card-title">{props.brand}</h5>
            <h6 className="ard-subtitle mb-2 text-muted">{props.product}</h6>
            <p className="card-text">
              Rs. {props.price}{" "}
              <s style={{ color: "#FFD39F" }}>Rs. {props.mrp}</s> {props.dis}
            </p>
          </div>
       
      </div>
    </Box>
  );
};

export default ProductCart;