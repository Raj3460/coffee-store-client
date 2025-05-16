import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const newCoffee = Object.fromEntries(formdata.entries());
    console.log(newCoffee);

    // 1st work
    // send coffees data to the database server
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee added successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          console.log("after adding coffee", data);
        }
      });
  };
  return (
    <div className="px-24">
      <div className="text-center p-12 space-y-3.5">
        <h1 className="text-6xl ">Add Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <div>
        <form onSubmit={handleAddCoffe}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Name"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Chef</label>
              <input
                type="text"
                name="chef"
                className="input w-full"
                placeholder="Enter your coffee Chef"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full"
                placeholder=" Enter Coffee supplier"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full"
                placeholder="taste"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Price</label>
              <input
                type="text"
                name="Price"
                className="input w-full"
                placeholder="Price of the coffee"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                name="details"
                className="input w-full"
                placeholder="details"
              />
            </fieldset>
          </div>

          <div className="py-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Enter Your photo URL"
              />
            </fieldset>
            <input type="submit" className="btn w-full" value="add coffee" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
