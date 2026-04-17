margin-bottom: 8px;
    border: none;
    border-radius: 12px;
    background: #2a5298;
    color: white;
    font-size: 1rem;
    cursor: pointer;
}

.menu button:hover {
    background: #1e3c72;
}

.info p {
    color: #444;
    line-height: 1.5;
}

.barra-inferior {
    display: flex;
    justify-content: space-around;
    background: #2a5298;
    color: white;
    padding: 12px;
    border-radius: 15px;
    font-size: 1.3rem;
}

@media (max-width: 480px) {
    .app {
        max-width: 100%;
        border-radius: 20px;
        padding: 15px;
    }

    .encabezado h1 {
        font-size: 1.5rem;
    }

    .menu button {
        font-size: 0.95rem;
    }
  }
