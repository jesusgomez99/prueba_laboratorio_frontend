<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Define una ruta raiz
Route::get('/', function () {
    //Renderiza el componente React resources/js/Pages/Welcome.jsx
    //También pasa datos al componente
    return Inertia::render('Welcome', [
        //verifican si las rutas login y register están definidas en tu aplicación
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        //Proporciona la version de Laravel
        'laravelVersion' => Application::VERSION,
        //Proporciona la versión de PHP
        'phpVersion' => PHP_VERSION,
    ]);
});

//Define una ruta para la URL /dashboard
Route::get('/dashboard', function () {
    //Renderiza el componente React resources/js/Pages/Dashboard.jsx
    return Inertia::render('Dashboard');
    //Aplica los middlewares auth y verified
    //auth: Asegura que solo los usuarios autenticados puedan acceder a esta ruta
    //verified: asegura que el corre del usuario esté verificado
    //Asigna un nombre a la ruta dashboard, lo que permite referenciarla en otras partes del código
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/prueba', function () {
    return Inertia::render('Prueba');
})->middleware(['auth', 'verified'])->name('prueba');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
