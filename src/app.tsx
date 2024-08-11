import Layout from "./components/Resume/Layout/main";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Layout />
        </ThemeProvider>
    );
}

export default App;
