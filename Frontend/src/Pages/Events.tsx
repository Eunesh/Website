import AddEvents from "../Components/AddEvents";
import DeleteEvents from "../Components/DeleteEvents";
import "../Components/Css/AddEvents.css";

const Events = () => {
  return (
    <>
      <div className="card">
        <AddEvents />
        <DeleteEvents />
      </div>
    </>
  );
};

export default Events;
