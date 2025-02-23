import Header from '@/components/Header'
import React from 'react'

const Settings = () => {
    const userSettings = {
        username: "siddhant Waingade",
        email: "sidW@emai.com",
        teamName: "Development Team",
        roleName: "Developer"
    }

    const labelStyles = "block text-sm font-medium dark:text-white"
    const textStyles = "mt-1 border border-gray-300 rounded-md shadow-sm p-2 dark:text-white";

   return (
    <div className='p-8'>
        <Header name="Settings" />
        <div className='space-y-4'>
            <div>
                <label className={labelStyles}>{userSettings.username}</label>
                <div className={textStyles}>{userSettings.username}</div>
            </div>
            <div>
                <label className={labelStyles}>{userSettings.email}</label>
                <div className={textStyles}>{userSettings.email}</div>
            </div>
            <div>
                <label className={labelStyles}>{userSettings.teamName}</label>
                <div className={textStyles}>{userSettings.teamName}</div>
            </div>
            <div>
                <label className={labelStyles}>{userSettings.roleName}</label>
                <div className={textStyles}>{userSettings.roleName}</div>
            </div>

        </div>
    </div>
  )
}

export default Settings