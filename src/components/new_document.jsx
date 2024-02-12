import { React, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewDocument = ({ prevNewDocument, updateNewDocument }) => {
  const [isNewDocument, setNewDocument] = useState(prevNewDocument);

  useEffect(() => {
    updateNewDocument(isNewDocument);
  }, [isNewDocument]);

  const initialValues = {
    title: "",
    owner_name: "",
  };

  const documentSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    owner_name: Yup.string().required("Owner name is required"),
  });

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: documentSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex items-center justify-center border border-black w-screen h-screen">
      <div className="bg-white shadow-2xl rounded-md w-[500px] mob_screen:w-[400px] new_document:w-[300px] h-[400px] p-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold mob_screen:text-lg">
            Add a new document
          </div>
          <div>
            <img
              onClick={() => setNewDocument(!isNewDocument)}
              className="cursor-pointer"
              src="
            /images/cross.png"
              alt=""
              height={20}
              width={20}
            />
          </div>
        </div>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="label" htmlFor="title">
              Title
            </label>
            <input
              className="input_field"
              type="text"
              id="title"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs">{errors.title}</p>
          </div>
          <div>
            <label className="label" htmlFor="owner_name">
              Owner Name
            </label>
            <input
              className="input_field"
              type="text"
              id="owner_name"
              name="owner_name"
              value={values.owner_name}
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs">{errors.owner_name}</p>
          </div>
          <button
            className="mt-4 w-24 text-md font-semibold flex justify-center gap-3 items-center bg-slate-200 p-1 rounded-md hover:bg-slate-300 duration-200"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewDocument;
