import React from 'react';
import { createRoot } from "react-dom/client";
import { ChartComponent } from './chartComponent';


const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1>Hello from React</h1>
        <ChartComponent />
    </div>
)