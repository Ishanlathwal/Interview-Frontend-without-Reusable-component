import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import {
  useCreateComponent1DataMutation,
  useGetcomponent1CountsQuery,
  useGetcomponent1DataQuery,
} from "../Rtk Query/RtkQuery";
import { toast } from "react-toastify";
import DialogBox from "./DialogBox";

const Component1 = () => {
  const { data, isLoading, isError, error } = useGetcomponent1DataQuery();
  const { component1 = [] } = data || [];

  const [addData, { isSuccess }] = useCreateComponent1DataMutation();

  const { data: countData } = useGetcomponent1CountsQuery();
  const { updateData1HitCount = 0, createData1HitCount = 0 } = countData || {};

  const [componentData, setComponentData] = useState("");
  const [open, setOpen] = useState(false);
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const addDataButton = (e) => {
    e.preventDefault();
    if (componentData.trim() === "") {
      toast.error("Please enter a valid value");
      return;
    }
    const data = {
      component1: componentData,
    };

    addData(data);
    setComponentData("");
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success("Data added successfully");
    }
  }, [error?.data?.message, isError, isSuccess]);

  if (isLoading) return <Loader />;
  return (
    <>
      {component1 &&
        component1.map((d) => {
          return (
            <div key={d._id}>
              <h5>{d.component1}</h5>
              <button className="btn" onClick={submitReviewToggle}>
                Update Data
              </button>
              <DialogBox
                open={open}
                submitReviewToggle={submitReviewToggle}
                componentName="component1"
                id={d._id}
              />
            </div>
          );
        })}
      <input
        type="text"
        value={componentData}
        className="input"
        onChange={(e) => setComponentData(e.target.value)}
        placeholder="Component 1 Data"
        required
      />
      <button onClick={addDataButton} className="btn">
        Add Data
      </button>
      <p>
        Add Api Hit {createData1HitCount} /
        <span> Update Api Hit {updateData1HitCount}</span>
      </p>
      <p>Total Api Hit count = {createData1HitCount + updateData1HitCount}</p>
    </>
  );
};

export default Component1;
