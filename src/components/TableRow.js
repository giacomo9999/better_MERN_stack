import React, { Component } from "react";
import { Link } from "react-router-dom";

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.person_name}</td>
        <td>{this.props.obj.business_name}</td>
        <td>{this.props.obj.business_gst_number}</td>
        <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">
          Edit
        </Link>
        <td className="btn btn-danger">Delete</td>
      </tr>
    );
  }
}

export default TableRow;
