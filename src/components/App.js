import React from 'react'
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import Signup from './Signup';
import Dashboard from './Dashboard';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import DashboardWrapper from './DashboardWrapper';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh' }}
      >
        <div className='w-100' style={{ maxWidth: 400 }}>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<DashboardWrapper> 
                    <Dashboard />
                  </DashboardWrapper>} 
                />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </Container>
  )
}

export default App;
