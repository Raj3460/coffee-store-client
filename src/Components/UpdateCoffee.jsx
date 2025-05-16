import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const UpdateCoffee = useLoaderData();
  const { _id, name, photo, chef, supplier, taste, Price, details } =
    UpdateCoffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData);
    console.log(updatedCoffee);

    //     send updated coffee to the database

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });

       }
       console.log(data);
      });
  };
  return (
    <div className="px-24">
      <div className="text-center p-12 space-y-3.5">
        <h1 className="text-6xl ">Update Coffee</h1>
      </div>
      <div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full"
                placeholder="Name"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Chef</label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                className="input w-full"
                placeholder="Enter your coffee Chef"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input w-full"
                placeholder=" Enter Coffee supplier"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input w-full"
                placeholder="taste"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Price</label>
              <input
                type="text"
                name="Price"
                defaultValue={Price}
                className="input w-full"
                placeholder="Price of the coffee"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
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
                defaultValue={photo}
                className="input w-full"
                placeholder="Enter Your photo URL"
              />
            </fieldset>
            <input type="submit" className="btn w-full" value="Update coffee" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
