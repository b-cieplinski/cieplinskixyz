"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const client = new ApolloClient({
    uri: 'https://d2y2up4qdv5a8v.cloudfront.net/cms/read/en',
    cache: new InMemoryCache(),
    ssrMode: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer a488fba7f9b00535387c45ed71762ce9e07dbc689c9ba1bb`
      },
  });
  return (
    <html lang="en">
      <ApolloProvider client={client}>
      <body className="max-w-screen-xl mx-auto">{children}</body>
      </ApolloProvider>
    </html>
  )
}
