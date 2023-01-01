import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyle from "./global";
import { SearchProvider } from "./contexts/ValueContext";
import { ChakraProvider } from "@chakra-ui/react";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <SearchProvider>
          <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </SearchProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
