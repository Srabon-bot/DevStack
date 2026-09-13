import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Stacks from './components/stacks/Stacks';
import type { StackType } from './types';
import Footer from './components/Footer';

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
      <Suspense>
        <Stacks stackPromise={stackPromise} />
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
