import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../../lib/supabase';
import { useTheme } from '../../context/ThemeContext';
import { Shield, Lock } from 'lucide-react';

const AdminLogin = () => {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen relative floating-shapes flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="glass-card glass-card-light dark:glass-card-dark p-8 rounded-xl">
          <div className="text-center mb-8">
            <div className="bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Admin Panel
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Sign in to manage your website content
            </p>
          </div>

          <div className="glass-card glass-card-light dark:glass-card-dark p-6 rounded-lg">
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#6366f1',
                      brandAccent: '#4f46e5',
                      inputBackground: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.25)',
                      inputBorder: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.18)',
                      inputText: isDark ? '#ffffff' : '#1f2937',
                    },
                  },
                },
                className: {
                  container: 'auth-container',
                  button: 'auth-button',
                  input: 'auth-input',
                },
              }}
              providers={[]}
              redirectTo={`${window.location.origin}/admin`}
            />
          </div>

          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Lock className="w-4 h-4" />
              <span>Secure admin access only</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;