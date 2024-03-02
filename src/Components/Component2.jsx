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
  const { data, isLoading, isError, error } = useGetcomponent2DataQuery();
  const { component2 = [] } = data || [];

  const [addData, { isSuccess }] = useCreateComponent2DataMutation();

  const { data: countData } = useGetcomponent2CountsQuery();
  const { updateData2HitCount = 0, createData2HitCount = 0 } = countData || {};

  const [componentData, setComponentData] = useState("");
  const [open, setOpen] = useState(false);
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const addDataButton = (e) => {
    e.preventDefault();

    const data = {
      component2: componentData,
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
