import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Stacks from './components/stacks/Stacks';
import type { StackType } from './types';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const stackFetch = async (): Promise<StackType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const stackPromise = stackFetch();

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div className="text-center py-20">Loading technologies...</div>}>
        <Stacks stackPromise={stackPromise} />
      </Suspense>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  )
}

export default App