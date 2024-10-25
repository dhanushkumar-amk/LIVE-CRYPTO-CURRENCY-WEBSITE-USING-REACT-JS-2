import React, { useContext, useState, useEffect } from 'react';
import { CoinContext } from '../../context/coinContext';
import { FaTimes } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Profile.css'

const Profile = () => {
  const { user, setToken } = useContext(CoinContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserData, setEditUserData] = useState({
    name: '',
    email: '',
    profilePic: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData')) || {};
    setEditUserData({
      name: storedUserData.name || user?.name || '',
      email: storedUserData.email || user?.email || '',
      profilePic: storedUserData.profilePic || user?.profilePic || '',
    });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUserData({
      ...editUserData,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    localStorage.setItem('userData', JSON.stringify(editUserData));
    alert("Profile saved successfully");
    setIsEditing(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditUserData({
          ...editUserData,
          profilePic: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfilePic = () => {
    setEditUserData({
      ...editUserData,
      profilePic: '',
    });
    localStorage.setItem(
      'userData',
      JSON.stringify({
        ...editUserData,
        profilePic: '',
      })
    );
  };

  const handleClose = () => {
    navigate('/home');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    alert('Logged out successfully');
    navigate('/');
  };

  const isCustomProfilePic = editUserData.profilePic !== '';

  return (
    <div className="profile-overlay">
      <div className="profile-page">
        <button onClick={handleClose} className="close-button">
          <FaTimes size={20} />
        </button>
        <h2 className="title">User Profile</h2>

        {/* Profile Picture */}
        <div className="profile-pic">
          {isCustomProfilePic ? (
            <img
              src={editUserData.profilePic}
              alt="Profile"
              className="profile-image"
            />
          ) : (
            <div className="default-profile-pic">
              <FiUser className="default-profile-icon" />
            </div>
          )}
          {isEditing && (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
                id="fileInput"
              />
              {!isCustomProfilePic && (
                <label htmlFor="fileInput" className="upload-button">
                  Upload Image
                </label>
              )}
              {isCustomProfilePic && (
                <button
                  onClick={handleRemoveProfilePic}
                  className="remove-button"
                >
                  Remove Picture
                </button>
              )}
            </>
          )}
        </div>

        {/* User Info */}
        <div className="user-info">
          <p className="info-field">
            <strong>Name:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editUserData.name}
                onChange={handleInputChange}
                className="input-field"
              />
            ) : (
              editUserData.name || "Not provided"
            )}
          </p>

          <p className="info-field">
            <strong>Email:</strong>{" "}
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editUserData.email}
                onChange={handleInputChange}
                className="input-field"
              />
            ) : (
              editUserData.email || "Not provided"
            )}
          </p>
        </div>

        {/* Edit & Save Buttons */}
        <div className="buttons">
          {isEditing ? (
            <>
              <button
                onClick={handleSaveChanges}
                className="save-button"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="cancel-button"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="edit-button"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Logout Button */}
        <div className="logout-button">
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;