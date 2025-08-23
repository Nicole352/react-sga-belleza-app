import React, { useState } from 'react';
import { Users, GraduationCap, BookOpen, Menu, X, Home } from 'lucide-react';

// Componente principal del Dashboard Layout
const DashboardLayout = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'estudiantes', label: 'Estudiantes', icon: Users },
    { id: 'calificaciones', label: 'Calificaciones', icon: GraduationCap },
    { id: 'tareas', label: 'Tareas', icon: BookOpen },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  ¡Bienvenido al Panel Educativo!
                </h1>
                <p className="text-gray-600 text-lg">
                  Gestiona estudiantes, calificaciones y tareas desde un solo lugar
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-blue-900 mb-2">Estudiantes</h3>
                  <p className="text-blue-700 text-sm">Administra la información de todos tus estudiantes</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <GraduationCap className="h-10 w-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-green-900 mb-2">Calificaciones</h3>
                  <p className="text-green-700 text-sm">Registra y consulta las calificaciones</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <BookOpen className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-purple-900 mb-2">Tareas</h3>
                  <p className="text-purple-700 text-sm">Crea y gestiona las tareas asignadas</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'estudiantes':
        return (
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestión de Estudiantes</h2>
            <p className="text-gray-600 mb-6">Aquí podrás administrar la información de todos los estudiantes.</p>
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Sección en desarrollo - Próximamente funcionalidad completa</p>
            </div>
          </div>
        );
      case 'calificaciones':
        return (
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sistema de Calificaciones</h2>
            <p className="text-gray-600 mb-6">Registra y consulta las calificaciones de los estudiantes.</p>
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <GraduationCap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Sección en desarrollo - Próximamente funcionalidad completa</p>
            </div>
          </div>
        );
      case 'tareas':
        return (
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestión de Tareas</h2>
            <p className="text-gray-600 mb-6">Crea, asigna y gestiona las tareas para los estudiantes.</p>
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Sección en desarrollo - Próximamente funcionalidad completa</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
            >
              {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <h1 className="ml-4 text-xl font-semibold text-gray-900">
              Panel Educativo
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">
              Usuario: <span className="font-medium text-gray-700">Administrador</span>
            </div>
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex flex-col h-full pt-16 lg:pt-0">
            {/* Sidebar content */}
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setSidebarOpen(false); // Cerrar sidebar en móvil
                      }}
                      className={`${
                        activeSection === item.id
                          ? 'bg-blue-100 border-r-2 border-blue-500 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200 w-full text-left`}
                    >
                      <IconComponent
                        className={`${
                          activeSection === item.id ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                        } mr-3 flex-shrink-0 h-6 w-6`}
                      />
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>
            
            {/* Footer del sidebar */}
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex-shrink-0 w-full">
                <p className="text-xs text-gray-500 text-center">
                  Panel Educativo v1.0
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay para móvil */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Contenido principal */}
        <div className="flex-1 flex flex-col lg:pl-0">
          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;