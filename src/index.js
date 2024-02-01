import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from './App'

import "./scss/style.scss"

const app = ReactDOMClient.createRoot(document.getElementById("app")) // Изменить

app.render(<App />)