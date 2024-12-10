```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        {/* ... more routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  const { id } = useParams();
  // Use id prop to update the component state or fetch data appropriately
  return (
    <div>
      About {id}
    </div>
  );
}
export default App;
```