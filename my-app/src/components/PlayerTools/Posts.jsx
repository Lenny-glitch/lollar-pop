import React from "react";
import {
    // rest of the elements/components imported remain same
    Outlet
  } from 'react-router-dom';

export default function Posts() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Blog</h2>
        {/* render any matching child */}
        <Outlet />
      </div>
    );
  }