import React, { useEffect, useState } from 'react';


const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'enabled');

    useEffect(() => {
        const body = document.body;

        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleDarkModeToggle = () => {
        setIsDarkMode((prevDarkMode) => {
            const newDarkMode = !prevDarkMode;

            if (newDarkMode) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }

            return newDarkMode;
        });
    };

    return (
        <label className="mode">
            <input type="checkbox" id="darkModeToggle" checked={isDarkMode} onChange={handleDarkModeToggle} />
            <i className='bx bxs-moon'></i>
        </label>
    );
}

export default DarkModeToggle;
