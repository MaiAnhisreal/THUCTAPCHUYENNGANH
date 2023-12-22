"use client"

import React from 'react';
import Board from './components/board';

export default function Home() {
  return (
    <div className="flex justify-center items-start h-screen">
      <div className="container">
        <main className="flex justify-center items-center h-full">
          <div className="flex justify-center items-center">
            <Board />
          </div>
        </main>
      </div>
    </div>
  );
}