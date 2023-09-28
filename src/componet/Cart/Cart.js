import React, {useContext} from "react";

export default function Cart(props) {
  return <div className="prod">{props.data.length}</div>;
}
