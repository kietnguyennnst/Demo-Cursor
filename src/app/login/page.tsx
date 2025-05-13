"use client";
import React, { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f6fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 30,
        boxShadow: '0 4px 24px rgba(16, 24, 40, 0.08)',
        padding: '48px 72px',
        width: 540,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: 28,
          fontWeight: 600,
          color: '#101828',
          marginBottom: 32,
          alignSelf: 'flex-start',
        }}>
          Login to your account
        </h2>
        <form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <label htmlFor="email" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              color: '#344054',
              textTransform: 'capitalize',
            }}>Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="username"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d0d5dd',
                borderRadius: 8,
                fontFamily: 'Poppins, sans-serif',
                fontSize: 14,
                color: '#344054',
                background: '#fff',
                outline: 'none',
                marginBottom: 0,
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label htmlFor="password" style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 16,
                fontWeight: 400,
                color: '#344054',
                textTransform: 'capitalize',
              }}>Password</label>
              <a href="#" style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 16,
                color: '#1570ef',
                textDecoration: 'none',
                cursor: 'pointer',
              }}>Forgot?</a>
            </div>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #d0d5dd',
                  borderRadius: 8,
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 14,
                  color: '#344054',
                  background: '#fff',
                  outline: 'none',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                style={{
                  position: 'absolute',
                  right: 16,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                {showPassword ? (
                  <svg width="20" height="20" fill="none" stroke="#98A2B3" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg width="20" height="20" fill="none" stroke="#98A2B3" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-6.5 0-10-7-10-7a21.8 21.8 0 0 1 5.06-6.06M9.9 4.24A10.94 10.94 0 0 1 12 5c6.5 0 10 7 10 7a21.8 21.8 0 0 1-2.06 3.06M15 12a3 3 0 0 1-3 3m0 0a3 3 0 0 1-3-3m6 0a3 3 0 0 0-3-3m0 0a3 3 0 0 0-3 3" />
                    <line x1="3" y1="3" x2="21" y2="21" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: 16,
              background: '#ff0000',
              color: '#fcfcfd',
              fontFamily: 'Poppins, sans-serif',
              fontSize: 16,
              fontWeight: 600,
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              marginTop: 8,
              transition: 'background 0.2s',
            }}
          >
            Login now
          </button>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 24 }}>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, color: '#98a2b3' }}>
            Don't have an account?
          </span>
          <a href="#" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, color: '#1570ef', textDecoration: 'none', cursor: 'pointer', fontWeight: 500 }}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
} 