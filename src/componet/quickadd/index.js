import React from "react";
import {FaCartArrowDown} from "react-icons/fa";
import "./quick.css";
import {Button, Group, Input, NumberField} from "react-aria-components";
import {MdDeleteForever} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Clearcart, Delete, Qty} from "../../feathers/Addquick";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
function Quick() {
  const [value, setValue] = React.useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.cart);
  useEffect(() => {
    console.log(cart);
  });
  const handleChange = (e, obj) => {
    // const {name, valu} = event.target;
    const newobj = {
      id: obj.id,
      qty: e,
    };
    dispatch(Qty(newobj));
  };

  const handleDelete = (e, id) => {
    Swal.fire({
      title: "Are you sure you want to delete the product?",
      icon: "question",
      iconHtml: "؟",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(Delete(id));
      }
    });
  };
  const Clear = () => {
    Swal.fire({
      title: "Are you sure you want to delete All products?",
      icon: "question",
      iconHtml: "؟",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(Clearcart());
      }
    });
  };
  return (
    <div className="cart-list">
      <div className="cotain">
        <div className="big">Cart</div>
        <div className="wish">
          Cart <span>[{cart.length}]</span>
        </div>
      </div>
      {cart.length === 0 ? (
        <div className="card-list">
          <div>
            <div class="big-icon hearty car">
              <FaCartArrowDown />
            </div>
            <div className="no">Shopping Cart is Empty.</div>
          </div>
        </div>
      ) : (
        <div className="card-list">
          <table>
            <thead className="titoftable">
              <tr>
                <th colSpan={2}>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th colSpan={2}>TOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((e) => {
                return (
                  <tr>
                    <td className="watch-pic">
                      <a>
                        <img className="sm-pic" src={e.imageCover} />
                      </a>
                    </td>
                    <td className="tit-table">{e.title}</td>
                    <td className="price-table">${e.price}</td>
                    <td className="qty-table">
                      {" "}
                      <NumberField
                        defaultValue={e.qty}
                        minValue={0}
                        // value={value}
                        // onChange={setValue}
                        onChange={(el) => handleChange(el, e)}
                        maxValue={9}>
                        <Group>
                          <Button slot="decrement" id="decrement">
                            -
                          </Button>
                          <Input className="input" />
                          <Button slot="increment" id="increment">
                            +
                          </Button>
                        </Group>
                      </NumberField>
                    </td>
                    <td className="price-table" colSpan={2}>
                      ${e.qty * e.price}
                    </td>
                    <td className="qty-table">
                      <MdDeleteForever
                        className="dele"
                        onClick={(el) => handleDelete(el, e.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="btns">
            <div className="btn-cart">Update Cart</div>
            <div className="btn-cart">
              <Link to="/allproducts" className="shopping">
                Continue Shopping
              </Link>{" "}
            </div>
            <div className="btn-cart" onClick={Clear}>
              Clear Cart
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quick;
