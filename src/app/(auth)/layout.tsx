import React from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="w-[1000px] h-[540px] shadow-myShadow rounded-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
}
