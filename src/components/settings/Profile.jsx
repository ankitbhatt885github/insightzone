import React from 'react'
import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='https://images.unsplash.com/photo-1724064710352-3cbcee4bc3a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9uYWxkb3xlbnwwfHwwfHx8MA%3D%3D'
					alt='Profile'
					className='rounded-full w-20 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100'>Ankit Bhatt</h3>
					<p className='text-gray-400'>ankit123@abc.com</p>
				</div>
			</div>

			<button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
		</SettingSection>
  )
}

export default Profile