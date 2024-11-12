// ErrorFallback.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function ErrorFallback({ error, resetErrorBoundary }) {
    const navigate = useNavigate();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            className="error-fallback"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                color: '#333',
                padding: '2rem',
            }}
        >
            <FiAlertTriangle size={48} color="#FF6347" />
            <h2 style={{ fontSize: '2rem', margin: '1rem 0' }}>Oops! Something went wrong</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1.5rem' }}>
                An unexpected error occurred. Please try again or return to the homepage.
            </p>

            <pre
                style={{
                    backgroundColor: '#f1f1f1',
                    padding: '1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    color: '#D9534F',
                    marginBottom: '1.5rem',
                    overflowX: 'auto',
                    maxWidth: '90%',
                    wordBreak: 'break-all'
                }}
            >
                {error.message}
            </pre>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                    onClick={resetErrorBoundary}
                    style={{
                        backgroundColor: '#FF6347',
                        color: '#fff',
                        border: 'none',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}
                >
                    Retry
                </button>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        backgroundColor: '#333',
                        color: '#fff',
                        border: 'none',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}
                >
                    Go Home
                </button>
            </div>
        </motion.div>
    );
}

export default ErrorFallback;
