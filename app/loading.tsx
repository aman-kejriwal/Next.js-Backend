import React from 'react';

export default function Loading() {
    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
              <div style={{ width: "100px", height: "100px", backgroundImage: "url('https://superstorefinder.net/support/wp-content/uploads/2018/01/4colors.gif')", backgroundSize: "cover" }}>
              </div>
            </div>
        </div>
    );
}
