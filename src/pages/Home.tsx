import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <Link to="/laptops" className="home-link">
        <img src="https://imgs.search.brave.com/073Az77rTOz5qYHwF0d1ubsYozxB1VNE8QpeqYTWX30/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JjL2Nj/LzlmL2JjY2M5ZmIz/ODBlMWI2MTIxODFj/ZTlkZjU5MDRmM2My/LmpwZw" alt="Laptops" />
        <p>Navigate to Laptops</p>
      </Link>
      <Link to="/phones" className="home-link">
        <img src="https://imgs.search.brave.com/_7EkkX69RjvCf3kva3ixiO1PzKnZRNGCMzyrcOZ9zrk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90LW1v/YmlsZS5zY2VuZTcu/Y29tL2lzL2ltYWdl/L1RtdXNwcm9kL0Fw/cGxlLWlQaG9uZS0x/NS1QaW5rLWZyb250/aW1hZ2U" alt="Phones" />
        <p>Navigate to Phones</p>
      </Link>
      <Link to="/desktops" className="home-link">
        <img src="https://imgs.search.brave.com/czbRz4I75QBPHogwx8R5uDr9o_L1PCyjXxh-7QYw2jU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cG93ZGVyLWNvYXRl/ZC1tb2RpZmllZC1m/cmFjdGFsLW5vcnRo/LWJ1aWxkLXYwLTE1/aHE4c3k4YnFrYTEu/anBnP3dpZHRoPTY0/MCZjcm9wPXNtYXJ0/JmF1dG89d2VicCZz/PWQzYmU3YWQwNDVm/ZDMyZTc0Y2JiMWU2/OTRiZTc0MjVmZTAx/ZGZhNjU" alt="Desktops" />
        <p>Navigate to Desktops</p>
      </Link>
    </div>
  );
}

export default Home;
