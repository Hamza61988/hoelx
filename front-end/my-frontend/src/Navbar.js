import React from "react";
import './Navbar.css';
import "font-awesome/css/font-awesome.min.css";

export function Navbar() {
    return (
        <div className="parent">
        <div className="dad">
            <div className="Main">
                <nav>
                    <img
                        src="https://imgs.search.brave.com/rMxguWidLFHKbo6vBDQHgwr9us4DclATXXZFbDPDDq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2JiL09MWF9ibHVl/X2xvZ28uc3Zn"
                        alt="olx"
                    />
                    <div className="motor">
                        <img src="https://cdn-icons-png.flaticon.com/128/1182/1182800.png" alt="motor" />
                        <button>Motor</button>
                    </div>
                    <div className="property">
                        <img src="https://cdn-icons-png.flaticon.com/256/1390/1390447.png" alt="property" />
                        <button>Property</button>
                    </div>
                </nav>
            </div>

            <div className="navbar-options">
                <select id="dropdown" name="options">
                    <option value="option1">Pakistan</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                </select>

                <input placeholder="Search mobile, cars, bikes" />

                <button>
                    <i className="fa fa-search"></i> Search
                </button>

                <button>Login</button>
                <button>Sell</button>
            </div>
        </div>

        <hr className="horizontal-line" /> 

        <img className="alphaimg"  src="https://images.olx.com.pk/thumbnails/437508562-800x600.webp" alt="banner"></img>

        </div>
    );
}
