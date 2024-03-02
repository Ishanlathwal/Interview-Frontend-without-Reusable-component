import { useEffect, useState } from "react";
import {
  useCreateComponent3DataMutation,
  useGetcomponent3CountsQuery,
  useGetcomponent3DataQuery,
} from "../Rtk Query/RtkQuery";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import DialogBox from "./DialogBox";

const Component3 = () => {
  // Get component 3 data

  const { data, isLoading, isError, error } = useGetcomponent3DataQuery();
  const { component3 = [] } = data || [];

  // Create component 2 data
  const [addData, { isSuccess }] = useCreateComponent3DataMutation();

  // Get api Hitcount for component 3
  const { data: countData } = useGetcomponent3CountsQuery();
  const { updateData3HitCount = 0, createData3HitCount = 0 } = countData || {};

  // States

  const [componentData, setComponentData] = useState("");
  const [open, setOpen] = useState(false);

  // Update dialog open/close function
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  // Save data function
  const addDataButton = (e) => {
    e.preventDefault();
    if (componentData.trim() === "") {
      toast.error("Please enter a valid value");
      return;
    }
    const data = {
      component3: componentData,
    };

    addData(data);
    setComponentData("");
  };

  // Use effects for toast
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success("Data added successfully");
    }
  }, [error?.data?.message, isError, isSuccess]);

  // Loader component
  if (isLoading) return <Loader />;
  return (
    <>
      {component3 &&
        component3.map((d) => {
          return (
            <div key={d._id} className="div">
              <h5>{d.component3}</h5>
              <button className="btn" onClick={submitReviewToggle}>
                Update Data
              </button>
              <DialogBox
                open={open}
                submitReviewToggle={submitReviewToggle}
                componentName="component3"
                id={d._id}
              />
            </div>
          );
        })}
      <input
        type="text"
        value={componentData}
        onChange={(e) => setComponentData(e.target.value)}
        className="input"
        placeholder="Component 3 Data"
        required
      />
      <button className="btn" onClick={addDataButton}>
        Add Data
      </button>
      <p>
        Add Api Hit {createData3HitCount} /
        <span> Update Api Hit {updateData3HitCount}</span>
      </p>
      <p>Total Api Hit count = {createData3HitCount + updateData3HitCount}</p>
    </>
  );
};

export default Component3;
