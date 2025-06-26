import React, { use } from 'react';
import { FaArrowLeft, FaArrowRight, FaChevronDown, FaList, FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { Fade, Slide } from 'react-awesome-reveal';
import SafetyTrust from '../components/SafetyTrust';

const AddRoommateForm = () => {

    const { user } = use(AuthContext);
    
    const navigate = useNavigate();

    // Add state for custom error messages
    const [errors, setErrors] = React.useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newPost = Object.fromEntries(formData.entries());


        // Custom validation
        const newErrors = {};
        if (!newPost.title?.trim()) newErrors.title = 'Title is required.';
        if (!newPost.location?.trim()) newErrors.location = 'Location is required.';
        if (!newPost.amount?.trim()) newErrors.amount = 'Rent amount is required.';
        if (!formData.get('room-type')) newErrors['room-type'] = 'Room type is required.';
        if (!formData.get('availability')) newErrors.availability = 'Availability is required.';
        if (!newPost.description?.trim()) newErrors.description = 'Description is required.';
        if (!newPost.roomPhoto?.trim()) newErrors.roomPhoto = 'Room photo URL is required.';
        if (!user?.displayName) newErrors.userName = 'User name is required.';
        if (!user?.email) newErrors.email = 'User email is required.';
        if (!newPost.phone?.trim()) newErrors.phone = 'Phone number is required.';
        // Optionally validate phone/chatLink if you want them required

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;


        // Get multiple checkbox values
        const preferences = formData.getAll('preferences');
        newPost.preferences = preferences;


        //send to db
        fetch('https://roomly-server.vercel.app/roommates', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Post Submitted successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
            .catch((err) => {
                console.error("Error Saving Roommate Data:", err);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong!",
                    icon: "error",
                });
            })
    }

    // Reset error for a field on change
    const handleFieldChange = (e) => {
        const { name } = e.target;
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
        // For select fields with custom error keys
        if (name === 'room-type' && errors['room-type']) {
            setErrors(prev => ({ ...prev, ['room-type']: undefined }));
        }
        if (name === 'availability' && errors['availability']) {
            setErrors(prev => ({ ...prev, ['availability']: undefined }));
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-20 z-10">
            <title>Add New Roommate List | Roomly</title>
            <div className='flex justify-between items-center py-5'>
                <button onClick={()=>navigate(-1)} className="flex btn btn-secondary btn-outline btn-sm text-sm font-medium">
                    <FaArrowLeft /> Go Back
                </button>
                <Link to='/browse-listing' className="flex btn btn-secondary btn-outline btn-sm text-sm font-medium">
                    View All <FaList/>
                </Link>
            </div>
            <Fade>
                <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-base-200 shadow-md rounded-md p-6 border-2 border-secondary/30"
                noValidate
            >
                  <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-2">
                    Add to Find <span className="text-secondary">Room / Roommate</span>
                  </h2>
                  <p className="text-center text-accent mb-12 max-w-2xl mx-auto">
                    Fill out the form below to list your room or find a compatible roommate. All fields are required for the best matching experience.
                  </p>
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Looking for a roommate in NYC"
                        className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                        onChange={handleFieldChange}
                    />
                    {errors.title && <p className="text-error text-xs mt-1">{errors.title}</p>}
                </div>

                {/* Location & Rent */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="123 Main St, NY, US."
                            className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                            onChange={handleFieldChange}
                        />
                        {errors.location && <p className="text-error text-xs mt-1">{errors.location}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Rent Amount ($/mo)</label>
                        <input
                            type="number"
                            name="amount"
                            placeholder="e.g. 1200"
                            className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                            onChange={handleFieldChange}
                        />
                        {errors.amount && <p className="text-error text-xs mt-1">{errors.amount}</p>}
                    </div>
                </div>

                {/* Room Type & Lifestyle Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Room Type</label>
                        <div className='relative'>
                            <select
                                name='room-type'
                                className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                                onChange={handleFieldChange}
                            >
                                <option value="">Select Room Type</option>
                                <option value="Single">Single</option>
                                <option value="Shared">Shared</option>
                                <option value="Studio">Studio</option>
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-accent">
                                <FaChevronDown className="text-sm" />
                            </div>
                        </div>
                        {errors['room-type'] && <p className="text-error text-xs mt-1">{errors['room-type']}</p>}
                    </div>
                    {/* Availability */}
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Availability</label>
                        <div className="relative">
                            <select
                                name='availability'
                                className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary appearance-none pr-10"
                                onChange={handleFieldChange}
                            >
                                <option value="">Select Availability</option>
                                <option value="available">Available</option>
                                <option value="not-available">Not Available</option>
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-accent">
                                <FaChevronDown className="text-sm" />
                            </div>
                        </div>
                        {errors.availability && <p className="text-error text-xs mt-1">{errors.availability}</p>}
                    </div>
                </div>
                {/* lifestyle preferences */}
                <div>
                    <label className="label">
                        <span className="label-text text-primary font-medium">Lifestyle Preferences</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                        {['Pets', 'Smoking', 'Night Owl', 'Early Riser'].map((item) => (
                            <label key={item} className="flex items-center gap-2 text-accent">
                                <input name="preferences" type="checkbox" value={item} className="checkbox checkbox-sm checkbox-secondary" onChange={handleFieldChange} />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                </div>


                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">Description</label>
                    <textarea
                        rows={10}
                        name="description"
                        className="input input-bordered w-full h-30 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary overflow-x-hidden overflow-y-auto whitespace-pre-wrap break-words"
                        placeholder="Write something about the room or preferences..."
                        onChange={handleFieldChange}
                    ></textarea>
                    {errors.description && <p className="text-error text-xs mt-1">{errors.description}</p>}
                </div>
                {/* Room Photo URL */}
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">Room Photo URL</label>
                    <input
                        type="text"
                        name="roomPhoto"
                        placeholder="https://example.com/room.jpg"
                        className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                        onChange={handleFieldChange}
                    />
                    {errors.roomPhoto && <p className="text-error text-xs mt-1">{errors.roomPhoto}</p>}
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Phone No</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder='+1 234 567 8900'
                            className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                            onChange={handleFieldChange}
                        />
                        {errors.phone && <p className="text-error text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Social Chat <span className='text-xs italic'>(whatsapp/messenger/team)</span></label>
                        <input
                            type="text"
                            name="chatLink"
                            placeholder='wa.me/username'
                            className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                            onChange={handleFieldChange}
                        />
                    </div>
                </div>

                {/* Read-Only User Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            value={user?.displayName}
                            readOnly
                            className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">User Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user?.email}
                            readOnly
                            className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                        />
                    </div>
                </div>
                {/* Likes (hidden, default 0) */}
                <div className="md:col-span-2 hidden">
                    <label className="block font-medium mb-1">
                        Like Count (default: 0)
                    </label>
                    <input
                        type="number"
                        name="likes"
                        value={0}
                        readOnly
                        className="input-base cursor-not-allowed"
                    />
                </div>

                {/* Submit */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="btn btn-secondary text-base-100 px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
                    >
                        <FaPlus /> Add Post
                    </button>
                </div>
            </form>
            </Fade>
            
            {/* <SafetyTrust/> */}
        </div>
    );
};

export default AddRoommateForm;
