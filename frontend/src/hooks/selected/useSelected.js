import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
import { baseURL } from "../../utils";
import { useUtilesContext } from "../../context/UtilesContext";

const useSelected = () => {
  const { updateFlag } = useUtilesContext();

  const updateSelected = async (subURL) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${baseURL}/${subURL}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      updateFlag();

      await Swal.fire({
        title: "Good job!",
        text: "Displayed successfully",
        icon: "success",
      });

      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Permission to Visit Lading page how look like!",
        text: "Do you want to visit Lading page now?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, visit page",
        cancelButtonText: "No, thanks",
      });

      if (result.isConfirmed) {
        // Open GitHub URL in a new tab
        window.open("https://github.com/", "_blank");
      }
    } catch (error) {
      console.error("Error updating selected item:", error);
      toast.error("Failed to update selected item");
    }
  };

  return { updateSelected };
};

export default useSelected;
