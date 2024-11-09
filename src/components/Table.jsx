import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteBooking } from "../redux/actions";

const Table = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    dispatch(deleteBooking(parseInt(e.currentTarget.id)));
  };
  console.log(data)

  return (
    <>
      {data.length && (
      <div className="sectioncontainer">
          <div className=" section ">
          <table className="table">
            {/* head */}
            <thead className="tablehead">
              <tr>
                
                <th> Destination From </th>
                <th> Destination To </th>
                <th> Journey Date </th>
                <th> Guests </th>
                <th> Class Name </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, i) => (
                <tr key={i}>
                  
                  <td>{data.from}</td>
                  <td>{data.to}</td>
                  <td>{data.date}</td>
                  <td>{data.guests}</td>
                  <td>{data.ticketclassName}</td>
                  <td><button className="btn-xs btn" id={`${data.id}`} onClick={(e) => handleDelete(e)}> <MdDelete /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      )}
    </>
  );
};

export default Table;