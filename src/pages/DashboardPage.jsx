import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Navbar, Avatar, Spinner } from 'flowbite-react';
import axios from 'axios';
import { UserContext } from '../context/userContext';

function DashboardPage() {
  const { user } = useContext(UserContext);
  // console.log("User from dashboard:", user);
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uniqueNationalities, setUniqueNationalities] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://l2um9p5p9h.execute-api.eu-west-2.amazonaws.com/user-data/userdata'
        ); // replace with your user data api endpoint
        const data = response.data;

        const usersArray = data.body.split('\\').map((entry) => {
          const [username, nationality, lastLogin] = entry.split(', ');
          return {
            username: username.split(': ')[1],
            nationality: nationality.split(': ')[1],
            lastLogin: lastLogin.split(': ')[1],
          };
        });

        setUsersData(usersArray);

        const nationalitiesSet = new Set(
          usersArray.map((user) => user.nationality.trim().toLowerCase())
        );
        setUniqueNationalities(nationalitiesSet.size);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    localStorage.removeItem('authToken');
    navigate('/login');
  };
  // console.log("User state in dashboard33:", user);
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar fluid={true} rounded={true} className="px-40">
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            AI Mavericks
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
                style={{
                  height: '50px',
                  width: '50px',
                  borderRadius: '10px',
                }}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user ? user.name : 'User Name'}</span>
              <span className="block truncate text-sm font-medium">
                {user ? user.email : 'name@flowbite.com'}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </Navbar>

      <div className="p-4">
        <h1 className="text-xl font-semibold mb-4">Welcome, {user ? user.name : 'User'}!</h1>
        <h2 className="text-lg mb-6">
  There are {usersData.length} users in the system. 
</h2>
<h3 className="text-md mb-4">
  The users belong to {uniqueNationalities} nationalities. Below are their last login details:
</h3>


        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner aria-label="Loading users" size="lg" />
          </div>
        ) : (
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200 text-gray-600">
                <tr>
                  <th className="py-2 px-4">Username</th>
                  <th className="py-2 px-4">Nationality</th>
                  <th className="py-2 px-4">Last Login</th>
                </tr>
              </thead>
              <tbody>
                {usersData.length > 0 ? (
                  usersData.map((user, index) => (
                    <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                      <td className="py-2 px-4 border">{user.username}</td>
                      <td className="py-2 px-4 border">{user.nationality}</td>
                      <td className="py-2 px-4 border">
                        {user.lastLogin === 'No login timestamp'
                          ? 'Never Logged In'
                          : new Date(user.lastLogin).toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="py-2 px-4 text-center">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
