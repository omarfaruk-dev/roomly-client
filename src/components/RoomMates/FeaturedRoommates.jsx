import { FaUserAlt, FaHome, FaPaw, FaMoon, FaSmoking } from 'react-icons/fa';

const roommates = [
  {
    name: 'Alex Johnson',
    rent: '$2000 / mo',
    roomType: 'Private Room',
    lifestyle: ['Pets', 'Night Owl', 'Smoker'],
    availability: 'Available Now',
  },
  {
    name: 'Maria Gonzales',
    rent: '$1800 / mo',
    roomType: 'Shared Room',
    lifestyle: ['No Pets', 'Early Bird', 'Non-Smoker'],
    availability: 'From June 1',
  },
  {
    name: 'David Kim',
    rent: '$2200 / mo',
    roomType: 'Studio Apartment',
    lifestyle: ['Pets', 'Quiet', 'Gym Enthusiast'],
    availability: 'Available Now',
  },
  {
    name: 'Alex Johnson',
    rent: '$2000 / mo',
    roomType: 'Private Room',
    lifestyle: ['Pets', 'Night Owl', 'Smoker'],
    availability: 'Available Now',
  },
  {
    name: 'Maria Gonzales',
    rent: '$1800 / mo',
    roomType: 'Shared Room',
    lifestyle: ['No Pets', 'Early Bird', 'Non-Smoker'],
    availability: 'From June 1',
  },
  {
    name: 'David Kim',
    rent: '$2200 / mo',
    roomType: 'Studio Apartment',
    lifestyle: ['Pets', 'Quiet', 'Gym Enthusiast'],
    availability: 'Available Now',
  },
];

const getLifestyleIcon = (tag) => {
  if (tag.toLowerCase().includes('pet')) return <FaPaw className="text-gray-500" />;
  if (tag.toLowerCase().includes('night')) return <FaMoon className="text-gray-500" />;
  if (tag.toLowerCase().includes('smoke')) return <FaSmoking className="text-gray-500" />;
  return null;
};

const FeaturedRoommates = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-accent mb-12">
          Featured Roommates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roommates.map((roommate, index) => (
            <div
              key={index}
              className="bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaUserAlt className="text-secondary" />
                  <h3 className="text-xl font-semibold text-accent">{roommate.name}</h3>
                </div>

                <p className="mb-2 text-accent">
                  <span className="font-medium text-accent">Rent:</span> {roommate.rent}
                </p>

                <div className="flex items-center gap-2 mb-2 text-accent">
                  <FaHome className="text-secondary" />
                  <span>{roommate.roomType}</span>
                </div>

                <p className="mb-2 text-accent">
                  <span className="font-medium text-accent">Availability:</span>{' '}
                  {roommate.availability}
                </p>

                <div className="mb-4">
                  <p className="font-medium text-accent mb-1">Lifestyle:</p>
                  <div className="flex flex-wrap gap-2">
                    {roommate.lifestyle.map((tag, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 bg-base-100 text-accent px-3 py-1 rounded-full text-sm border"
                      >
                        {getLifestyleIcon(tag)}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="btn btn-secondary mt-4 w-full font-medium py-2 px-4 rounded-md transition">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoommates;
