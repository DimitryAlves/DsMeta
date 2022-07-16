import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import Card from "./components/Card"

function App() {
    return (
        <>
        <ToastContainer/>
            <Header/>
             <main>
                <section id = "sales">
                    <div className = "container">
                    <Card/>
                    
                    </div>
                </section>
                </main>
        </>
    )
}

export default App

