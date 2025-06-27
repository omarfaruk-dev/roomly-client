import React from 'react';
import useAuth from '../hooks/useAuth';
import { useLoaderData } from 'react-router';
import Lottie from "lottie-react";
import welcome from "../assets/lotties/welcom-lottie.json";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend
} from "recharts";

const Stats = () => {
    const { user } = useAuth();
    const listing = useLoaderData();

    // Filter listings based on the logged-in user's email
    const myListingsArr = listing.filter(listing => listing.email === user?.email);
    const myListings = myListingsArr.length;
    const activeRoommates = listing.filter(r => r.availability === "available").length;
    const pendingRequests = listing.filter(r => r.availability === "pending").length;

    const chartData = [
        { name: "My Listings", value: myListings },
        { name: "Active", value: activeRoommates },
        { name: "Pending", value: pendingRequests }
    ];

    if (!listing || listing.length === 0) {
        return (
            <div className="flex justify-center items-center h-60">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8 animate-fade-in">
                <div className="w-30 md:w-80 ">
                    <Lottie animationData={welcome} loop={true} />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Welcome, {user?.displayName || "User"}!</h2>
                    <p className="text-accent text-lg">Here's a quick overview of your dashboard stats.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-secondary/5 rounded-lg shadow p-5 flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary">{myListings}</span>
                    <span className="text-accent mt-1">My Listings</span>
                </div>
                <div className="bg-secondary/5 rounded-lg shadow p-5 flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary">{activeRoommates}</span>
                    <span className="text-accent mt-1">Active Roommates</span>
                </div>
                <div className="bg-secondary/5 rounded-lg shadow p-5 flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary">{pendingRequests}</span>
                    <span className="text-accent mt-1">Pending Requests</span>
                </div>
            </div>
            <div className="bg-secondary/5 rounded-lg shadow p-5 mb-8">
                <div className="text-lg font-semibold mb-2 text-primary">Listings Overview</div>
                <div className="w-full h-60 flex items-center justify-center text-accent/60">
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default Stats;