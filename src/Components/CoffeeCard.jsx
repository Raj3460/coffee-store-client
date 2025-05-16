import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee ,coffees, setCoffees}) => {
  const { _id, name, photo, Price, chef } = coffee;

  const handleDeleteCoffee = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // for delete request
        fetch(`http://localhost:3000/coffees/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // remove the coffee from the state
              const remainingCoffee = coffees.filter(cof => cof._id !== _id);
              setCoffees(remainingCoffee) 
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="flex rounded-2xl items-center justify-between border-2 p-6">
        <div>
          <img src={photo} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">
            Name : <span className="text-yellow-500">{name}</span>
          </h1>
          <h1 className="text-xl font-semibold">
            Chef : <span className="text-yellow-500">{chef}</span>
          </h1>
          <h1 className="text-xl font-semibold">
            Price : <span className="text-yellow-500">{Price}</span>{" "}
          </h1>
        </div>
        <div className="join join-vertical">
          <Link to={`/coffee/${_id}`}>
            
            <button className="btn join-item">View</button>
          </Link>
          <Link to={`updateCoffee/${_id}`}>
          <button className="btn join-item">Edit</button>
          </Link>
          <button
            onClick={() => handleDeleteCoffee(_id)}
            className="btn join-item"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
