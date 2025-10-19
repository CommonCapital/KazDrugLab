"use client";

import { useState } from "react";
import { UserRoundSearch, Edit3, Save, Link as LinkIcon, Briefcase } from "lucide-react";
import { useUser } from "../context/UserContext";
import DefaultLayout from "@/component/Layout/DefaultLayout";
import { updateUser } from "@/lib/actions/user.action"; 

const Profile = () => {
  const user = useUser();
if (!user) {
    return (
      <DefaultLayout>
        <div className="flex justify-center items-center h-screen text-slate-400">
          Loading profile...
        </div>
      </DefaultLayout>
    );
  }
  const [photo, setPhoto] = useState(user.photo || "/Default_User_image.png");
  const [bio, setBio] = useState(user.userBio || "");
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <DefaultLayout>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            
            {/* Profile Photo */}
            <div className="relative">
              <img
                src={photo}
                alt="User Avatar"
                className="w-32 h-32 rounded-full object-cover border-2 border-slate-600"
              />
            
            </div>

            {/* User Info */}
            <div className="flex-1 space-y-3">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <UserRoundSearch className="w-5 h-5" />
                {user.firstName} {user.lastName}
              </h2>

              <p className="text-slate-400">{user.email}</p>

              {user.jobTitle && (
                <p className="flex items-center gap-2 text-slate-300">
                  <Briefcase className="w-4 h-4" /> {user.jobTitle}
                </p>
              )}

              {/* Bio */}
              <div>
                <h3 className="text-lg font-medium mb-1">Bio</h3>
                {editing ? (
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    rows={4}
                  />
                ) : (
                  <p className="text-slate-300 text-sm">{bio || "No bio yet."}</p>
                )}
              </div>

              {/* Contribution Links */}
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Contributions</h3>
                <ul className="space-y-2">
                  {[
                    { name: "GitHub", url: "https://github.com/user" },
                    { name: "Blog", url: "https://user-blog.example.com" },
                    { name: "Portfolio", url: "https://user-portfolio.example.com" },
                  ].map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition"
                      >
                        <LinkIcon className="w-4 h-4" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Buttons */}
        

          {message && (
            <p className="mt-4 text-sm text-slate-300 text-right">{message}</p>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
