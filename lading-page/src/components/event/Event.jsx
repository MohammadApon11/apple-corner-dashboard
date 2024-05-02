import useGetEvent from "../../hooks/events/useGetEvent";
import GridProduct from "../GridProduct";

const Event = () => {
  const { events, eventsLoading } = useGetEvent();
  const displayEvent = events?.find((event) => event?.selected === true);
  return (
    <>
      {eventsLoading ? (
        <span className="loading loading-spinner text-3xl py-5">
          Please wait...
        </span>
      ) : (
        <GridProduct
          imageUrl={displayEvent?.image}
          description1={displayEvent?.description1}
          description2={displayEvent?.description2}
          textColor="text-gray-200"
          buyBtn={true}
          icon={false}
          title={displayEvent?.title}
          justify="justify-end"
          margin="pb-12"
          iconColor="text-primary"
        />
      )}
    </>
  );
};

export default Event;
