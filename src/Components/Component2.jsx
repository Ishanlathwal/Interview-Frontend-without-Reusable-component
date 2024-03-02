import { useEffect, useState } from "react";
import {
  useCreateComponent2DataMutation,
  useGetcomponent2CountsQuery,
  useGetcomponent2DataQuery,
} from "../Rtk Query/RtkQuery";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import DialogBox from "./DialogBox";

const Component2 = () => {
  // Get component 2 data

  const { data, isLoading, isError, error } = useGetcomponent2DataQuery();
  const { component2 = [] } = data || [];

  // Create component 2 data
  const [addData, { isSuccess }] = useCreateComponent2DataMutation();

  // Get api Hitcount for component 2
  const { data: countData } = useGetcomponent2CountsQuery();
  const { updateData2HitCount = 0, createData2HitCount = 0 } = countData || {};

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
      component2: componentData,
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
      {component2 &&
        component2.map((d) => {
          return (
            <div key={d._id}>
              <h5>{d.component2}</h5>
              <button onClick={submitReviewToggle} className="btn">
                Update Data
              </button>
              <DialogBox
                open={open}
                submitReviewToggle={submitReviewToggle}
                componentName="component2"
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
        placeholder="Component 2 Data"
        required
      />
      <button onClick={addDataButton} className="btn">
        Add Data
      </button>
      <p>
        Add Api Hit {createData2HitCount} /
        <span> Update Api Hit {updateData2HitCount}</span>
      </p>
      <p>Total Api Hit count = {createData2HitCount + updateData2HitCount}</p>
    </>
  );
};

export default Component2;
