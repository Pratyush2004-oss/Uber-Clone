import React from 'react'
import { useUserStore } from '../store/user.store'
import { useCaptainStore } from '../store/captain.store';
import CaptainDashboard from './CaptainDashboard';
import Dashboard from './UserDashboard';

const AuthenticatedHome = () => {
    const { user } = useUserStore();
    const { captain } = useCaptainStore();
    return user ? (
        <Dashboard />
    ) : (
        captain ? (
            <CaptainDashboard />
        ) : (
            <div></div>
        )
    )
}

export default AuthenticatedHome