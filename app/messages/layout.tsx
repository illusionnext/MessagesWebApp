"use server";
import "server-only";

import React from "react";

export default async function MessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch("http://localhost:8080/messages"),
    messages = await response.json(),
    totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
