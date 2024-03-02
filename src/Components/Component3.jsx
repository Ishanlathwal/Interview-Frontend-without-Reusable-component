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
  const { data, isLoading, isError, error } = useGetcomponent3DataQuery();
  const { component3 = [] } = data || [];

  const [addData, { isSuccess }] = useCreateComponent3DataMutation();

  const { data: countData } = useGetcomponent3CountsQuery();
  const { updateData3HitCount = 0, createData3HitCount = 0 } = countData || {};

  const [componentData, setComponentData] = useState("");
  const [open, setOpen] = useState(false);
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const addDataButton = (e) => {
    e.preventDefault();

    const data = {
      component3: componentData,
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
