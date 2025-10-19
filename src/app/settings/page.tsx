'use client';

import { getUserByEmail, updateUser } from "@/lib/actions/user.action";
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import {convertImageToBase64} from "../auth/additional-info/page"
import DefaultLayout from "@/component/Layout/DefaultLayout";
const Settings = () => {
    const {data: session} = useSession();
    const [userData, setUserData] = useState({
firstName : '',
lastName: '',
email: '',
photo: '',
userBio: '',
id: '',
    });
const [imageFile, setImageFile] = useState<File | null>(null);
const [error, setError] = useState<string | null>(null);
const [isLoading, setIsLoading] = useState<boolean>(false);

useEffect(() => {
const fetchUserData = async () => {
    if (session?.user?.email) {
        const user = await getUserByEmail(session.user.email)
        setUserData({
            firstName: user?.firstName,
            lastName: user?.lastName,
email: user?.email,
photo: user?.photo,
userBio: user?.userBio,
id: user?._id,
        })
    }
}
fetchUserData();
}, [session?.user?.email]);


const handlePersonalInforSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        const updatedUser = {
            firstName: userData.firstName,
            lastName: userData.lastName,
            userBio: userData.userBio,
            photo: userData.photo,
            email: userData.email,
            };

            if (userData.id) {
                const updated = await updateUser(userData.id, updatedUser)
                setUserData(updated);
            }
        setIsLoading(false);
        
    } catch (error) {
        setIsLoading(false);
        setError("Failed to update profile");

    };
};

console.log(userData);

const handleImageUploadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
setIsLoading(true);
try {
    let base64Image = userData.photo;
    if (imageFile) {
        base64Image = await convertImageToBase64(imageFile);
    }

    if (userData.id) {
        const updatedUser = {
            ...userData,
            photo: base64Image,
        };

        const updated = await updateUser(userData.id, updatedUser);
        setUserData(updated)
       
    }
     setIsLoading(false)
} catch (error) {
    setIsLoading(false)
    setError("Failed to update image.")
    console.error("Error uploading image:", error)
}
}


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setUserData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};
const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
        setImageFile(e.target.files[0]);
        setUserData((prevData) => ({
            ...prevData,
            photo: URL.createObjectURL(e.target.files[0]),
        }));
    };



};



return (
  <DefaultLayout>
    <div className="max-w-3xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-semibold mb-6">Profile Settings</h1>

      {error && (
        <div className="mb-4 p-3 rounded-md bg-red-500/20 text-red-400">
          {error}
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        {/* Profile Photo */}
        <form onSubmit={handleImageUploadSubmit} className="flex flex-col items-center gap-3">
          <img
            src={userData.photo || "/Default_User_image.png"}
            alt="User"
            className="w-32 h-32 rounded-full border border-slate-700 object-cover"
          />
          <label className="cursor-pointer text-sm text-sky-400 hover:underline">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            Change Photo
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-1.5 bg-sky-600 rounded-md hover:bg-sky-700 disabled:opacity-50 text-sm"
          >
            {isLoading ? "Saving..." : "Save Photo"}
          </button>
        </form>

        {/* Personal Information */}
        <form
          onSubmit={handlePersonalInforSubmit}
          className="flex-1 w-full bg-slate-900/40 rounded-xl p-6 border border-slate-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">First Name</label>
              <input
                type="text"
                value={userData.firstName}
                name="firstName"
                readOnly
                className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-sm cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Last Name</label>
              <input
                type="text"
                value={userData.lastName}
                name="lastName"
                readOnly
                className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-sm cursor-not-allowed"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-slate-400 mb-1">Email</label>
            <input
              type="email"
              value={userData.email}
              name="email"
              readOnly
              className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-sm cursor-not-allowed"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-slate-400 mb-1">Bio</label>
            <textarea
              name="userBio"
              value={userData.userBio}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-sm resize-none"
              placeholder="Tell us something about yourself..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="px-5 py-2 bg-sky-600 rounded-md hover:bg-sky-700 disabled:opacity-50 text-sm"
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>

      {/* Contributions Section */}
    
    </div>
  </DefaultLayout>
);

    



}

export default Settings;