import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageRequestsList = ({ details }) => {
    const { _id, food_id, DonorName, DonorEmail, DonorImage, requesterEmail, requesterName, Location, Notes, Donate, FoodImage, FoodName, FoodQuantity, ExpiredDay, Status, requesterImage, requestDate, Details, Description } = details || {};

    const handleConfirm = (_id, food_id) => {
        const updatedStatus = 0;
        const updated = {
            DonorName, food_id, updatedStatus, requesterEmail, requesterName, Location, Notes, Donate, FoodImage, FoodName, FoodQuantity, ExpiredDay, requesterImage, requestDate, Details
        };
        const updatedFood = {
            FoodName, FoodImage, Location, FoodQuantity, ExpiredDay, updatedStatus, Description, Details, DonorEmail, DonorName, DonorImage
        }
        fetch(`https://foodshare-server-mu.vercel.app/requested/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updated)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Confirmed!',
                        'You confirmed the food request.',
                        'success'
                    )
                }

            })
        fetch(`https://foodshare-server-mu.vercel.app/service/${food_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedFood)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    window.location.reload();
                }

            })


    }
    return (
        <tr class="bg-white border hover:bg-gray-50 ">
            <th scope="row" class="px-3 py-2 font-medium text-gray-900">
                <Link to={`https://foodshare-server-mu.vercel.app/food_details/${food_id}`}><img className="w-10 h-10 object-cover rounded-full" src={requesterImage} /></Link>
            </th>
            <td class="px-3 py-2">
                {Status ? (<p className='text-green-600 font-bold'>Available</p>) : (<p className='text-[#FF6C22] font-bold'>Confirmed</p>)}
            </td>
            <td class="px-3 py-2">
                {requesterName}
            </td>
            <td class="px-3 py-2">
                {ExpiredDay} Days
            </td>
            <td class="px-3 py-2 ">
                {requesterEmail}
            </td>
            <td class="px-3 py-2 ">
                {
                    Donate ? (<p>${Donate}</p>) : (<p>$ 0</p>)
                }
            </td>
            <td class="px-3 py-2 ">
                {requestDate}
            </td>
            <td class="px-3 py-2">
                {Status ? (<button onClick={() => { handleConfirm(_id, food_id) }} className="btn">Confirm</button>) : (<p className='text-[#FF6C22] font-bold'>Already Confirmed</p>)}
            </td>
        </tr>
    );
};

export default ManageRequestsList;