# Chatbot Client

This is a chatbot widget application built with React, TypeScript, and Tailwind CSS. It allows users to interact with a chatbot and view chat history.

## Table of Contents

- [Production Link](#production-link)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Running Tests](#running-tests)
- [Environment Variables](#environment-variables)
- [Important Files](#important-files)

## Production Link

- [Vercel](https://nhatnam-chatbot-client.vercel.app/)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- yarn

## Installation

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/namnhat1110/chatbot-client.git
   cd chatbot-client
   ```

2. **Install Dependencies**:

   ```sh
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a [.env](http://_vscodecontentref_/0) file in the root directory and add the following environment variables:
   ```
   VITE_API_URL=your-api-url
   ```

## Running Locally

1. **Run the Development Server**:

   ```sh
   yarn dev
   ```

2. **Access the Application**: Open your browser and navigate to `http://localhost:5173`.

## Running Tests

1. **Run Unit Tests**:

   ```sh
   yarn test
   ```

## Environment Variables

- `VITE_API_URL`: The URL for connecting to chatbot-server.

## Important Files

- **chat.api.ts**: Service for interacting with api from chatbot-server.
- **useHandleChat.ts**: Custom hook to manipulate data.
